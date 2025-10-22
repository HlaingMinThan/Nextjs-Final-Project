"use server";

import Question, { IQuestion, IQuestion } from "@/database/question.model";
import mongoose from "mongoose";
import dbConnect from "../dbConnect";
import { actionError } from "../response";
import GetQuestionSchema from "../schemas/GetQuestionSchema";
import validateBody from "../validateBody";

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
    let question = await Question.findById(questionId).populate("tags");
    if (!question) {
      throw new Error("Failed to get a question");
    }
    return { success: true, data: JSON.parse(JSON.stringify(question)) };
  } catch (error) {
    return actionError(error);
  }
}
