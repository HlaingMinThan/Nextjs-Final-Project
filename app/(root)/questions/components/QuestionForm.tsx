"use client";

import React from "react";

import Editor from "@/components/Editor";

function QuestionForm() {
  const [value, setValue] = React.useState("");
  return (
    <>
      <Editor
        label="Any Question ?"
        value={value}
        onChange={(v) => setValue(v)}
      />
    </>
  );
}

export default QuestionForm;
