"use server";

import Question from "@/database/question.model";
import mongoose from "mongoose";
import dbConnect from "../dbConnect";
import QuestionEditSchema from "../schemas/QuestionEditSchema";
import validateBody from "../validateBody";
import { auth } from "@/auth";
import { actionError } from "../response";
import TagQuestion from "@/database/tag-question.model";
import Tag from "@/database/tag.model";

export async function QuestionEdit(params: {
  questionId: string;
  title: string;
  content: string;
  tags: string[];
}): Promise<{
  success: Boolean;
  data?: {
    _id: string;
    title: string;
    content: string;
    author: string;
    tags: string[];
  };
}> {
  await dbConnect();
  const validatedData = validateBody(params, QuestionEditSchema);
  const { title, content, tags, questionId } = validatedData.data;
  const auth_session = await auth();
  const userId = auth_session?.user?.id;

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    let question = await Question.findById(questionId).populate("tags");
    if (!question) {
      throw new Error("Failed to get a question");
    }

    if (question.title !== title || question.content !== content) {
      question.title = title;
      question.content = content;
      await question.save();
    }

    await session.commitTransaction();

    return { success: true, data: JSON.parse(JSON.stringify(question)) };
  } catch (error) {
    await session.abortTransaction();
    return actionError(error);
  } finally {
    await session.endSession();
  }
}
