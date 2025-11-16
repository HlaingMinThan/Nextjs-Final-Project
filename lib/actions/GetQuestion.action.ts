"use server";

import Question, { IQuestion } from "@/database/question.model";
import dbConnect from "../dbConnect";
import { actionError } from "../response";
import GetQuestionSchema from "../schemas/GetQuestionSchema";
import validateBody from "../validateBody";
import Collection from "@/database/collection.model";
import { auth } from "@/auth";
import Vote from "@/database/vote.model";

type QuestionWithMeta = IQuestion & {
  saved?: boolean;
  userVote?: "upvote" | "downvote" | null;
};

export async function GetQuestion(params: { questionId: string }): Promise<{
  success: Boolean;
  data?: QuestionWithMeta;
}> {
  await dbConnect();
  const validatedData = validateBody(params, GetQuestionSchema);
  const { questionId } = validatedData.data;

  try {
    let [question, auth_session] = await Promise.all([
      Question.findById(questionId).populate("tags"),
      auth(),
    ]);
    if (!question) {
      throw new Error("Failed to get a question");
    }
    const userId = auth_session?.user?.id;

    const [collection, vote] = await Promise.all([
      userId
        ? Collection.findOne({
            question: questionId,
            author: userId,
          })
        : null,
      userId
        ? Vote.findOne({
            author: userId,
            type_id: questionId,
            type: "question",
          })
        : null,
    ]);
    return {
      success: true,
      data: {
        ...JSON.parse(JSON.stringify(question)),
        saved: !!collection,
        userVote: vote?.voteType || null,
      },
    };
  } catch (error) {
    return actionError(error);
  }
}
