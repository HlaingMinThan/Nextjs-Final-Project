import React from "react";

import { signIn } from "@/auth";
import Button from "@/components/Button";
import github from "@/public/github.png";
import google from "@/public/google.webp";

function AuthForm() {
  return (
    <div className="flex space-x-3">
      <Button type="outline" icon={google}>
        Login with Google
      </Button>
      <form
        className="w-full"
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <Button type="outline" icon={github}>
          Login with Github
        </Button>
      </form>
    </div>
  );
}

export default AuthForm;
