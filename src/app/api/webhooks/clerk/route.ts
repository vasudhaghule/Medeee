import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/nextjs/server";
import { createUser, updateUser, deleteUser } from "@/actions/user.action";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Please add WEBHOOK_SECRET from Clerk Dashboard to .env");
  }

  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Missing Svix headers", { status: 400 });
  }

  const payload = await req.text();
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Webhook verification failed:", err);
    return new Response("Webhook verification failed", { status: 400 });
  }

  const { id } = evt.data;
  const eventType = evt.type;

  if (eventType === "user.created") {
    const {
      id,
      email_addresses,
      image_url,
      first_name,
      last_name,
      username,
    } = evt.data;

    const email = email_addresses[0]?.email_address;
    const role = email === "admin@example.com" ? "admin" : "user";

    const user = {
      clerkId: id,
      email,
      username: username!,
      photo: image_url,
      firstName: first_name,
      lastName: last_name,
      role,
    };

    console.log("Saving new user:", user);

    const newUser = await createUser(user);

    if (newUser) {
      const client = await clerkClient();
      await client.users.updateUserMetadata(id, {
        publicMetadata: {
          userId: newUser._id,
          role: newUser.role,
        },
      });
    }

    return NextResponse.json({
      message: "New User created",
      user: newUser,
    });
  }

  if (eventType === "user.updated") {
    const {
      id,
      email_addresses,
      image_url,
      first_name,
      last_name,
      username,
    } = evt.data;

    const updatedUserData = {
      email: email_addresses[0]?.email_address,
      username: username!,
      photo: image_url,
      firstName: first_name,
      lastName: last_name,
    };

    console.log("Updating user:", updatedUserData);

    const updatedUser = await updateUser(id, updatedUserData);

    return NextResponse.json({
      message: "User updated",
      user: updatedUser,
    });
  }

  if (eventType === "user.deleted") {
    console.log(`Deleting user with clerkId: ${id}`);

    if (!id) {
      return new Response("User id missing", { status: 400 });
    }

    await deleteUser(id);

    return NextResponse.json({
      message: "User deleted",
    });
  }

  console.log(`Unhandled event type: ${eventType}`);
  return new Response("Webhook received", { status: 200 });
}
