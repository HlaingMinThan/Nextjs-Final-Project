import Image from "next/image";
import React from "react";

import Input from "./Input";
import SearchInput from "./SearchInput";
import logo from "../public/logo.jpg";

import { auth } from "@/auth";
import Link from "next/link";
import ROUTES from "@/routes";

async function Navbar() {
  let session = await auth();
  let user = session?.user;

  const hasProfileImage = user?.image && user.image.trim() !== "";

  return (
    <nav className="flex justify-between px-10 py-6">
      <div className="flex items-center justify-center space-x-4">
        <Image
          src={logo}
          width={60}
          height={60}
          className="rounded-full"
          alt="logo"
        />
        <h1 className="font-bold">
          Creative <span className="text-main">Coder</span>
        </h1>
      </div>
      <div className="w-[600px]">
        <SearchInput />
      </div>
      <div>
        {user && (
          <div className="relative group">
            <Link
              href={ROUTES.PROFILE(user.id as string)}
              className="block rounded-full ring-2 ring-transparent transition-all duration-200 group-hover:ring-main"
            >
              {hasProfileImage ? (
                <image
                  src={user.image as string}
                  width={45}
                  height={45}
                  className="aspect-square rounded-full object-cover"
                  alt="user profile"
                />
              ) : (
                <div className="w-[45px] h-[45px] rounded-full bg-primary flex items-center justify-center border-2 border-main">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              )}
            </Link>

            <div className="absolute right-0 top-full z-10 mt-4 w-64 -translate-y-2 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-secondary via-primary to-tertiary p-4 text-white shadow-2xl">
                <div className="mb-4 border-b border-white/10 pb-3">
                  <p className="text-xs uppercase tracking-wide text-white/60">
                    Signed in as
                  </p>
                  <p className="truncate text-lg font-semibold">
                    {user.name || user.email}
                  </p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href={ROUTES.PROFILE(user.id as string)}
                      className="flex items-center gap-3 rounded-xl bg-white/10 px-3 py-2 transition hover:bg-white/20"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-main"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <span>My Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={ROUTES.SETTINGS}
                      className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2 transition hover:bg-white/15"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-main"
                      >
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 11 3.09V3a2 2 0 0 1 4 0v.09c.01.7.4 1.34 1 1.68.58.33 1.3.3 1.82-.08l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.44.44-.58 1.08-.33 1.65.16.37.5.65.9.75H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"></path>
                      </svg>
                      <span>Settings</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={ROUTES.REPUTATION}
                      className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2 transition hover:bg-white/15"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-main"
                      >
                        <path d="M12 20l9-5-9-5-9 5 9 5z"></path>
                        <path d="M12 12l9-5-9-5-9 5 9 5z"></path>
                        <path d="M12 12l9-5-9-5-9 5 9 5z" opacity="0"></path>
                      </svg>
                      <span>My Reputation</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
