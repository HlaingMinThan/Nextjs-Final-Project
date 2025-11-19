import Preview from "@/components/Preview";
import VoteButtons from "@/components/VoteButtons";
import { IAnswer } from "@/database/answer.model";
import GetUserVote from "@/lib/actions/GetUserVote";
import React, { Suspense } from "react";

function AnswerCard({ answer }: { answer: IAnswer }) {
  const authorName = ((answer as any)?.author?.name as string) || "Anonymous";
  const upvotes = (answer as any)?.upvotes ?? 0;
  const downvotes = (answer as any)?.downvotes ?? 0;

  const initial = authorName?.charAt(0)?.toUpperCase?.() || "?";
  const GetUserVotePromise = GetUserVote({
    type: "answer",
    typeId: answer._id,
  });
  return (
    <article className="w-full  border-b-[0.5px] border-tertiary  shadow-sm transition hover:shadow  border-tertiary-800 dark:bg-tertiary-900 my-5 py-6">
      <header className="mb-3 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          {initial}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-slate-900 dark:text-slate-100">
            {authorName}{" "}
            <span className="text-gray-600">was answered 3 mins ago</span>
          </p>
        </div>
      </header>

      <div className="prose prose-slate max-w-none text-slate-800 dark:prose-invert dark:text-slate-100">
        <Preview content={answer.content} />
      </div>

      <footer className="mt-4 flex items-center justify-between">
        <Suspense fallback={<p>loading...</p>}>
          <VoteButtons
            GetUserVotePromise={GetUserVotePromise}
            type="answer"
            typeId={answer?._id}
            initialUpvotes={answer.upvotes}
            initialDownvotes={answer.downvotes}
          />
        </Suspense>
      </footer>
    </article>
  );
}

export default AnswerCard;
