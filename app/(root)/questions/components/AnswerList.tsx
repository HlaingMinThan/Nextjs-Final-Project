import DataRenderer from "@/components/DataRenderer";
import { IAnswer } from "@/database/answer.model";
import React from "react";
import AnswerCard from "./AnswerCard";

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
      <h3 className="font-bold text-xl">AnswerList - {totalAnswers}</h3>
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
