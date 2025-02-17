import React from "react";

import Button from "@/components/Button";
import github from "@/public/github.png";
import google from "@/public/google.webp";

function AuthForm() {
  return (
    <div className="flex space-x-3">
      <Button type="outline" icon={google}>
        Login with Google
      </Button>
      <Button type="outline" icon={github}>
        Login with Github
      </Button>
    </div>
  );
}

export default AuthForm;
