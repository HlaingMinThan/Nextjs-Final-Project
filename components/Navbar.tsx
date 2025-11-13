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
          <Link href={ROUTES.PROFILE(user.id as string)}>
            <Image
              src={user?.image as string}
              width={45}
              height={45}
              className="aspect-square rounded-full object-cover"
              alt="logo"
            />
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
