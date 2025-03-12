import { NextResponse } from "next/server";
import { ZodError } from "zod";

const handleSuccessResponse = (data: unknown, status: number = 200) => {
  return NextResponse.json(
    {
      data,
      success: true,
    },
    { status }
  );
};
const handleErrorResponse = (e: unknown) => {
  let status = 500;
  let message = e instanceof Error ? e.message : "Internal Server Error";
  let details = null;
  if (e instanceof ZodError) {
    // handle validation error
    details = e.flatten().fieldErrors;
    message = "Validation Error";
    status = 400;
  }
  return NextResponse.json(
    {
      message,
      success: false,
      details,
      status: 500,
    },
    { status }
  );
};

export { handleSuccessResponse, handleErrorResponse };
