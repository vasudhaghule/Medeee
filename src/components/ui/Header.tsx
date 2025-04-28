"use client";
import React from "react";

import Link from "next/link";
import { Search } from "lucide-react";
import LogInSignUpButtons from "@/components/ui/logInSignUpButtons";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import Logo from "../../../public/assets/Logo.svg";
import Image from "next/image";

 function Header() {
  const pathname = usePathname();
 
  return (
    <>
      <header className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between gap-4">
            <div className="flex items-center gap-8">
              <Link href="/">
                {" "}
                <Image src={Logo.src} width={100} height={100} alt="Logo" />
              </Link>

              {/* <Link
              className={`link ${
                pathname === "/"
                  ? "text-2xl font-bold text-black"
                  : "text-2xl font-bold text-black"
              }`}
              href="/"
            >
              Kalshi
            </Link> */}
              <nav className="hidden md:flex items-center gap-6">
                <Link
                  href="/market"
                  className={`link ${
                    pathname === "/market"
                      ? "text-sm font-medium text-[#00E5AC]"
                      : "text-sm font-medium text-black"
                  }`}
                >
                  Markets
                </Link>
                <Link
                  href="/live"
                  className={`link ${
                    pathname === "/live"
                      ? "text-sm font-medium text-[#00E5AC]"
                      : "text-sm font-medium text-red-500"
                  }`}
                >
                  Live
                </Link>
                <Link
                  href="/esports"
                  className={`link ${
                    pathname === "/esports"
                      ? "text-sm font-medium text-[#00E5AC]"
                      : "text-sm font-medium text-black"
                  }`}
                >
                  E-Sports
                </Link>
                <Link
                  href="/forecasts"
                  className={`link ${
                    pathname === "/forecasts"
                      ? "text-sm font-medium text-[#00E5AC]"
                      : "text-sm font-medium text-black"
                  }`}
                >
                  Forecasts
                </Link>
                <Link
                  href="/ideas"
                  className={`link ${
                    pathname === "/ideas"
                      ? "text-sm font-medium text-[#00E5AC]"
                      : "text-sm font-medium text-black"
                  }`}
                >
                  Ideas
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative max-w-sm w-full hidden md:block">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search markets or profiles"
                  className="pl-9 rounded-full border-gray-200"
                />
              </div>
              <LogInSignUpButtons />
              
            </div>
          </div>
        </div>
      </header>
      <nav className="sm:hidden flex  p-[10px] bg-gray-200 fixed bottom-0  items-center gap-4 w-full justify-center ">
        <Link
          href="/market"
          className={`link ${
            pathname === "/market"
              ? "text-sm font-medium text-[#00E5AC]"
              : "text-sm font-medium text-black"
          }`}
        >
          Markets
        </Link>
        <Link
          href="/live"
          className={`link ${
            pathname === "/live"
              ? "text-sm font-medium text-[#00E5AC]"
              : "text-sm font-medium text-red-500"
          }`}
        >
          Live
        </Link>
        <Link
          href="/esports"
          className={`link ${
            pathname === "/esports"
              ? "text-sm font-medium text-[#00E5AC]"
              : "text-sm font-medium text-black"
          }`}
        >
          E-Sports
        </Link>
        <Link
          href="/forecasts"
          className={`link ${
            pathname === "/forecasts"
              ? "text-sm font-medium text-[#00E5AC]"
              : "text-sm font-medium text-black"
          }`}
        >
          Forecasts
        </Link>
        <Link
          href="/ideas"
          className={`link ${
            pathname === "/ideas"
              ? "text-sm font-medium text-[#00E5AC]"
              : "text-sm font-medium text-black"
          }`}
        >
          Ideas
        </Link>
      </nav>
    </>
  );
}

export default Header;
