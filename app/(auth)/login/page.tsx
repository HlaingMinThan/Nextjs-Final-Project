import Image from "next/image";
import Link from "next/link";
import React from "react";

import Button from "@/components/Button";
import Input from "@/components/Input";
import logo from "@/public/logo.jpg";
import ROUTES from "@/routes";

import AuthForm from "../components/AuthForm";

function page() {
  return (
    <div className="flex">
      <div className="flex h-screen w-2/4 items-center  bg-primary p-10">
        <div className="space-y-10">
          <Link href={ROUTES.HOME} className="flex items-center space-x-4">
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
          <Button variant="outline">Create a new account ?</Button>
        </div>
      </div>
      <div className="flex h-screen w-2/4 items-center justify-center ">
        <div className="w-4/5 space-y-6">
          <h3 className="text-xl font-semibold">
            Sign in to Creative <span className="text-main">Coder</span> Forum
          </h3>
          <div>
            <Input label="Email Address" />
          </div>
          <div>
            <Input label="Password" />
          </div>
          <div>
            <Button>Login</Button>
          </div>
          <AuthForm />
        </div>
      </div>
    </div>
  );
}

export default page;
