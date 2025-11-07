import DataRenderer from "@/components/DataRenderer";
import { IAnswer } from "@/database/answer.model";
import React from "react";
import AnswerCard from "./AnswerCard";
import CommonFilter from "@/components/CommonFilter";
import { AnswerFilters, DefaultFilters } from "@/constant/filters";

function AnswerList({
  answers,
  success,
  errorMessage,
  totalAnswers,
}: {
  answers: IAnswer[];
  success: boolean;
  errorMessage?: string;
  totalAnswers: number;
}) {
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
        errorMessage={errorMessage}
        data={answers}
        render={(answers) => {
          return answers.map((answer) => {
            return <AnswerCard key={answer._id.toString()} answer={answer} />;
          });
        }}
      />
    </div>
  );
}

export default AnswerList;
