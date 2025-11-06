"use server";

import { ICollection } from "@/database/collection.model";
import Collection from "@/database/collection.model";
import Question, { IQuestionDoc } from "@/database/question.model";
import dbConnect from "../dbConnect";
import { auth } from "@/auth";
import validateBody from "../validateBody";
import PaginatedSearchParamsSchema from "../schemas/PaginatedSearchParamsSchema";
import { FilterQuery } from "mongoose";
import { actionError } from "../response";

const getBookMarkCollections = async (params: {
  page?: number;
  pageSize?: number;
  search?: string;
  filter?: string;
  sort?: string;
}): Promise<{
  data?: {
    collections: ICollection[];
    isNext: Boolean;
  };
  success: Boolean;
  message?: string;
  details?: object | null;
}> => {
  await dbConnect();
  const auth_session = await auth();
  const userId = auth_session?.user?.id;

  const validatedData = validateBody(params, PaginatedSearchParamsSchema);

  let { page = 1, pageSize = 10, search, filter, sort } = validatedData.data;

  const skip = (Number(page) - 1) * pageSize;
  const limit = Number(pageSize);

  const filterQuery: FilterQuery<typeof Collection> = { author: userId };
  if (search) {
    const matchingQuestions = await Question.find({
      $or: [
        { title: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } },
      ],
    }).select("_id"); // [{_id:adfasd},{_id:adfasd}]
    const matchingIds = matchingQuestions.map((q) => q._id); //['adfasd,'adafsdf']
    if (!matchingIds.length) {
      return {
        success: true,
        data: { collections: [], isNext: false },
      };
    }
    filterQuery.question = { $in: matchingIds };
  }

  let sortCriteria = {};
  switch (filter) {
    case "mostrecent":
      sortCriteria = { createdAt: -1 };
      break;
    case "oldest":
      sortCriteria = { createdAt: -1 };
      break;
    case "mostvoted":
      sortCriteria = { upvotes: -1 };
      break;
    case "mostanswered":
      sortCriteria = { answers: -1 };
      break;
    default:
      sortCriteria = { createdAt: -1 };
      break;
  }

  try {
    const totalCollections = await Collection.countDocuments(filterQuery);

    const collections = await Collection.find(filterQuery)
      .populate({
        path: "question",
        populate: [
          { path: "tags", select: "_id name" },
          { path: "author", select: "_id name image" },
        ],
      })
      .sort(sortCriteria)
      .skip(skip)
      .limit(limit);

    const isNext = totalCollections > skip + collections.length;

    return {
      success: true,
      data: {
        collections: JSON.parse(JSON.stringify(collections)),
        isNext,
      },
    };
  } catch (e) {
    return actionError(e);
  }
};

export default getBookMarkCollections;
