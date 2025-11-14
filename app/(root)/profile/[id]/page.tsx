import React from "react";
import GetUser from "@/lib/actions/GetUser";
import ProfileHeader from "../components/ProfileHeader";
import getUserQuestions from "@/lib/actions/getUserQuestions";
import DataRenderer from "@/components/DataRenderer";
import ThreadCard from "@/components/ThreadCard";
import getUserAnswers from "@/lib/actions/GetUserAnswers";
import AnswerCard from "../../questions/components/AnswerCard";
import Link from "next/link";

const Page = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { tab: string };
}) => {
  const { id } = params;
  const result = await GetUser({ userId: id });
  const activeTab = searchParams.tab;

  if (!result.success || !result.data) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-10 text-zinc-700 dark:text-zinc-300">
        Failed to load user.
      </div>
    );
  }

  const { user, totalQuestions, totalAnswers } = result.data;
  let { success, data, message } = await getUserQuestions({
    userId: id,
  });
  const { questions = [] } = data || {};

  let {
    success: answerSuccess,
    data: dataAnswer,
    message: answerError,
  } = await getUserAnswers({
    userId: id,
  });
  const { answers = [] } = dataAnswer || {};

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <ProfileHeader user={user} totals={{ totalQuestions, totalAnswers }} />

      <div className="my-7 space-x-5">
        <Link
          href={`/profile/${id}?tab=questions`}
          className={` border-white border rounded-xl px-2 py-1 ${
            activeTab === "questions" ? "bg-main" : "bg-primary"
          }`}
        >
          Top Questions
        </Link>
        <Link
          href={`/profile/${id}?tab=answers`}
          className={` border-white border rounded-xl px-2 py-1 ${
            activeTab === "answers" ? "bg-main" : "bg-primary"
          }`}
        >
          Top Answers
        </Link>
      </div>
      {activeTab === "questions" ? (
        <DataRenderer
          success={success}
          data={questions}
          errorMessage={message}
          render={(questions) =>
            questions.map((question) => (
              <ThreadCard key={question._id} question={question} />
            ))
          }
        />
      ) : (
        <DataRenderer
          success={answerSuccess}
          data={answers}
          errorMessage={answerError}
          render={(answers) =>
            answers.map((answer) => (
              <AnswerCard key={answer._id.toString()} answer={answer} />
            ))
          }
        />
      )}
    </div>
  );
};

export default Page;
