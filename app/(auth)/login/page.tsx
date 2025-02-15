import Image from "next/image";
import Link from "next/link";
import React from "react";

import Input from "@/components/Input";
import github from "@/public/github.png";
import google from "@/public/google.webp";
import logo from "@/public/logo.jpg";

function page() {
  return (
    <div className="flex">
      <div className="flex h-screen w-2/4 items-center  bg-primary p-10">
        <div className="space-y-10">
          <Link href={"/"} className="flex items-center space-x-4">
            <Image src={logo} width={100} height={100} alt="logo" />
            <h1 className="text-5xl font-semibold">
              Creative <span className="text-main">Coder</span> Form
            </h1>
          </Link>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            soluta, harum praesentium id ducimus odit eius quas, nam voluptatem
            illo molestias officiis dolorem. Vel, earum fugiat esse tempore
            reprehenderit saepe?
          </p>
          <button className="w-full rounded-lg border-2 border-main px-4 py-2">
            Create a new account ?
          </button>
        </div>
      </div>
      <div className="flex h-screen w-2/4 items-center justify-center ">
        <div className="w-4/5 space-y-6">
          <h3 className="text-xl font-semibold">
            Sign in to Creative <span className="text-main">Coder</span> Forum
          </h3>
          <div className="space-y-3">
            <Input label="Email Address" />
          </div>
          <div className="space-y-3">
            <Input label="Password" />
          </div>
          <div>
            <button className="w-full rounded-lg bg-main px-4 py-2">
              Login
            </button>
          </div>
          <div className="flex space-x-3">
            <button className="flex w-full items-center space-x-3 rounded-lg border-2 border-main px-4 py-2">
              <Image src={google} alt="google icon" width={30} height={30} />
              <span>Login with Google</span>
            </button>
            <button className="flex w-full items-center space-x-3 rounded-lg border-2 border-main px-4 py-2">
              <Image src={github} alt="google icon" width={30} height={30} />
              <span>Login with Github</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
