import DataRenderer from "@/components/DataRenderer";
import { IAnswer } from "@/database/answer.model";
import React, { use } from "react";
import AnswerCard from "./AnswerCard";
import CommonFilter from "@/components/CommonFilter";
import { AnswerFilters, DefaultFilters } from "@/constant/filters";
import { success } from "zod/v4";
import Pagination from "@/components/Pagination";

function AnswerList({
  isLoggedIn,
  GetAnswersPromise,
  page,
}: {
  isLoggedIn: boolean;
  GetAnswersPromise: Promise<{
    success: boolean;
    data?: {
      answers: IAnswer[];
      isNext: boolean;
      totalAnswers: number;
    };
    message?: string;
    details?: object | null;
  }>;
  page: number;
}) {
  let { success, data, message } = use(GetAnswersPromise);
  const { answers = [], totalAnswers = 0, isNext = false } = data || {};
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-xl">AnswerList - {totalAnswers}</h3>
        <div>
          <CommonFilter
            filters={AnswerFilters}
            defaultFilter={DefaultFilters.AnswerFilters}
          />
        </div>
      </div>
      <DataRenderer
        success={success}
        errorMessage={message}
        data={answers}
        render={(answers) => {
          return answers.map((answer) => {
            return (
              <AnswerCard
                key={answer._id.toString()}
                answer={answer}
                isLoggedIn={isLoggedIn}
              />
            );
          });
        }}
      />
      <Pagination isNext={isNext} page={page || 1} />
    </div>
  );
}

export default AnswerList;
