"use client";

import Button from "@/components/Button";

import React, { useState } from "react";
import AuthForm from "./AuthForm";
import Input from "@/components/Input";
import { signUpWithCredentials } from "@/lib/actions/SignUpWithCredentials.action";
import { useRouter } from "next/navigation";
import ROUTES from "@/routes";

interface FormData {
  name: string;
  username: string;
  email: string;
  password: string;
}

interface FormErrors {
  name?: string[];
  username?: string[];
  email?: string[];
  password?: string[];
}

function RegisterForm() {
  let [formData, setFormData] = useState<FormData>({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  let [errors, setErrors] = useState<FormErrors | null>(null);

  let router = useRouter();

  let register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(null);
    let result = await signUpWithCredentials(formData);
    if (result.success) {
      console.log("success");
      router.push(ROUTES.HOME);
    } else {
      if ("details" in result && result.details) {
        setErrors(result.details as FormErrors);
      }
      if ("message" in result && result.message === "Email Already Exists") {
        setErrors({
          email: [result.message],
        });
      }
      if ("message" in result && result.message === "Username Already Exists") {
        setErrors({
          username: [result.message],
        });
      }
    }
  };
  return (
    <form className="w-4/5 space-y-6" onSubmit={register}>
      <h3 className="text-xl font-semibold">
        Sign Up to Creative <span className="text-main">Coder</span> Forum
      </h3>
      <div>
        <Input
          label="Name"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        {errors?.name && (
          <p className="my-2 text-xs text-red-500">{errors.name[0]}</p>
        )}
      </div>
      <div>
        <Input
          label="Username"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, username: e.target.value }))
          }
        />
        {errors?.username && (
          <p className="my-2 text-xs text-red-500">{errors.username[0]}</p>
        )}
      </div>
      <div>
        <Input
          label="Email Address"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        {errors?.email && (
          <p className="my-2 text-xs text-red-500">{errors.email[0]}</p>
        )}
      </div>
      <div>
        <Input
          label="Password"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        {errors?.password && (
          <p className="my-2 text-xs text-red-500">{errors.password[0]}</p>
        )}
      </div>
      <div>
        <Button type="submit">Register</Button>
      </div>
      <AuthForm />
    </form>
  );
}

export default RegisterForm;
