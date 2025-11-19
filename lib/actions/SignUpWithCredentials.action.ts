"use server";

import dbConnect from "../dbConnect";
import mongoose from "mongoose";
import { actionError } from "@/lib/response";
import validateBody from "../validateBody";
import SignUpSchema from "../schemas/SignUpSchema";
import User from "@/database/user.model";
import Account from "@/database/account.model";
import bcrypt from "bcryptjs";
import { signIn } from "@/auth";

export async function signUpWithCredentials(params: {
  name: string;
  username: string;
  email: string;
  password: string;
}) {
  await dbConnect();
  console.log("db connected");
  const session = await mongoose.startSession();
  session.startTransaction();
  let transactionCommitted = false;

  try {
    const validatedData = validateBody(params, SignUpSchema);
    const { name, email, username, password } = validatedData.data;

    // Check for existing user/username within transaction
    const existingUser = await User.findOne({ email }).session(session);
    if (existingUser) {
      throw new Error("Email Already Exists");
    }

    const existingUserName = await User.findOne({ username }).session(session);
    if (existingUserName) {
      throw new Error("Username Already Exists");
    }

    const [newUser] = await User.create(
      [
        {
          name,
          username,
          email,
        },
      ],
      {
        session,
      }
    );

    await Account.create(
      [
        {
          userId: newUser._id,
          name,
          provider: "credentials",
          providerAccountId: email,
          password: await bcrypt.hash(password, 10),
        },
      ],
      {
        session,
      }
    );

    await session.commitTransaction();
    transactionCommitted = true;
    await session.endSession();

    // Sign in after transaction is committed and session is ended
    try {
      await signIn("credentials", { email, password, redirect: false });
    } catch (signInError) {
      // If sign in fails, the user is still created, just log the error
      console.error("Sign in failed after registration:", signInError);
      // Return success anyway since user was created
    }

    return { success: true };
  } catch (error) {
    // Only abort if transaction hasn't been committed
    if (!transactionCommitted) {
      await session.abortTransaction();
    }
    await session.endSession();
    return actionError(error);
  }
}
