"use server";

import Question, { IQuestion } from "@/database/question.model";
import mongoose from "mongoose";
import dbConnect from "../dbConnect";
import { actionError } from "../response";
import GetQuestionSchema from "../schemas/GetQuestionSchema";
import validateBody from "../validateBody";
import Collection from "@/database/collection.model";
import { auth } from "@/auth";
import { unstable_cache } from "next/cache";

const GetQuestionBase = unstable_cache(
  async ({ questionId }: { questionId: string }) => {
    await dbConnect();

    const session = await mongoose.startSession();
    session.startTransaction();

    let question = await Question.findById(questionId).populate("tags");
    if (!question) {
      throw new Error("Failed to get a question");
    }
    return JSON.parse(JSON.stringify(question));
  },
  ["question-public"],
  {
    revalidate: 60, // cache 60s; tweak as you like
  }
);

export async function GetQuestion(params: { questionId: string }): Promise<{
  success: Boolean;
  data?: IQuestion;
}> {
  await dbConnect();
  const validatedData = validateBody(params, GetQuestionSchema);
  const { questionId } = validatedData.data;

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    let question = await GetQuestionBase({ questionId });
    let auth_session = await auth();

    const collection = await Collection.findOne({
      question: questionId,
      author: auth_session?.user?.id,
    });
    return {
      success: true,
      data: { ...JSON.parse(JSON.stringify(question)), saved: !!collection },
    };
  } catch (error) {
    return actionError(error);
  }
}
