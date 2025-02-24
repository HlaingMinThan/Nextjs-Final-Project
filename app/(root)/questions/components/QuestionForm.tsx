"use client";

import React from "react";

import Button from "@/components/Button";
import Editor from "@/components/Editor";
import Input from "@/components/Input";

function QuestionForm() {
  const [value, setValue] = React.useState("");
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Ask A New Question?</h1>
      <Input label="Title" text="Describe your question title in short way." />
      <div className="mt-3">
        <Editor
          label="Any Question ?"
          value={value}
          onChange={(v) => setValue(v)}
        />
      </div>
      <Input label="Tags" text="Please press enter to add a new tag." />
      <Button>Create</Button>
    </div>
  );
}

export default QuestionForm;
