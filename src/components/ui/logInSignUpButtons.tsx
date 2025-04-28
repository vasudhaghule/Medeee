"use client"; // 👈 Very important

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs"; // changed to UserButton instead of UserProfile

const LogInSignUpButtons = () => {
  const { userId } = useAuth(); // useAuth for client component

  return (
    <div className="flex items-center gap-2">
      {!userId ? (
        <>
          <Link href={"/sign-in"}>
            <Button variant="ghost" className="text-sm font-medium">
              Log in
            </Button>
          </Link>
          <Link href={"/sign-up"}>
            <Button className="text-sm font-medium bg-[#00E5AC] text-white hover:bg-[#00E5AC]/90">
              Sign up
            </Button>
          </Link>
        </>
      ) : (
        <>
          <UserButton />{" "}
          {/* Better than using UserProfile */}
        </>
      )}
    </div>
  );
};

export default LogInSignUpButtons;
