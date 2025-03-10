import { NextResponse } from "next/server";

import User from "@/database/user.model";
import dbConnect from "@/lib/dbConnect";

// get all users
export async function GET() {
  try {
    await dbConnect();
    const users = await User.find();
    return NextResponse.json(
      {
        data: users,
        success: true,
      },
      { status: 200 }
    );
  } catch (e: unknown) {
    return NextResponse.json(
      {
        message: e instanceof Error ? e.message : "Something went wrong",
        success: false,
        status: 500,
      },
      { status: 500 }
    );
  }
}

// create a user or register user
export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();

    const existingEmail = await User.findOne({ email: body.email });
    if (existingEmail) throw new Error("Email already exists");

    const existingUsername = await User.findOne({ username: body.username });
    if (existingUsername) throw new Error("Username already exists");

    const newUser = await User.create(body);

    return NextResponse.json(
      {
        data: newUser,
        success: true,
        status: 201,
      },
      { status: 201 }
    );
  } catch (e: unknown) {
    return NextResponse.json(
      {
        message: e instanceof Error ? e.message : "Something went wrong",
        success: false,
        status: 500,
      },
      { status: 500 }
    );
  }
}
