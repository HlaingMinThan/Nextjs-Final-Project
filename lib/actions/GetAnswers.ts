"use server";

import Answer, { IAnswer } from "@/database/answer.model";
import dbConnect from "../dbConnect";
import validateBody from "../validateBody";
import GetAnswerSchema from "../schemas/GetAnswerSchema";
import { actionError } from "../response";
import { auth } from "@/auth";
import Vote from "@/database/vote.model";

const GetAnswers = async (params: {
  page: number;
  pageSize: number;
  filter: string;
  questionId: string;
}): Promise<{
  success: boolean;
  data?: {
    answers: IAnswer[];
    isNext: boolean;
    totalAnswers: number;
  };
  message?: string;
  details?: object | null;
}> => {
  await dbConnect();
  const validatedData = validateBody(params, GetAnswerSchema);
  const { page = 1, pageSize = 10, filter, questionId } = validatedData.data;

  const skip = (Number(page) - 1) * pageSize;
  const limit = Number(pageSize);

  let sortCriteria = {};

  switch (filter) {
    case "latest":
      sortCriteria = { createdAt: -1 };
      break;
    case "oldest":
      sortCriteria = { createdAt: 1 };
      break;
    case "popular":
      sortCriteria = { upvotes: -1 };
      break;
    default:
      sortCriteria = { createdAt: -1 };
      break;
  }

  try {
    const [authSession, totalAnswers] = await Promise.all([
      auth(),
      Answer.countDocuments({ question: questionId }),
    ]);

    const answers = await Answer.find({ question: questionId })
      .populate("author", "_id name image")
      .sort(sortCriteria)
      .skip(skip)
      .limit(limit);

    const userId = authSession?.user?.id;
    let answersWithMeta: (IAnswer & {
      userVote: "upvote" | "downvote" | null;
    })[] = JSON.parse(JSON.stringify(answers)).map((answer: IAnswer) => ({
      ...answer,
      userVote: null,
    }));

    if (userId && answers.length) {
      const answerIds = answers.map((answer) => answer._id);
      const votes = await Vote.find({
        author: userId,
        type: "answer",
        type_id: { $in: answerIds },
      });

      const voteMap = votes.reduce(
        (acc, vote) => {
          acc.set(vote.type_id.toString(), vote.voteType);
          return acc;
        },
        new Map<string, "upvote" | "downvote">()
      );

      answersWithMeta = answersWithMeta.map((answer) => ({
        ...answer,
        userVote: voteMap.get(answer._id.toString()) ?? null,
      }));
    }

    const isNext = totalAnswers > skip + answers.length;

    return {
      success: true,
      data: {
        answers: answersWithMeta,
        isNext,
        totalAnswers,
      },
    };
  } catch (e) {
    return actionError(e);
  }
};

export default GetAnswers;
