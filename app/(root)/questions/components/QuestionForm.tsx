"use client";

import React, { useState } from "react";

import Button from "@/components/Button";
import Editor from "@/components/Editor";
import Input from "@/components/Input";
import TagCard from "@/components/TagCard";
import { toast, Bounce } from "react-toastify";
import { QuestionCreate } from "@/lib/actions/QuestionCreate.action";
import { useRouter } from "next/navigation";
import ROUTES from "@/routes";

function QuestionForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>(["react", "vue"]);
  const [error, setError] = useState("");
  const [newTag, setNewTag] = useState("");

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
        setNewTag("");
        setError("");
      } else {
        setError("you are adding an existing tag");
      }
    }
  };

  let router = useRouter();

  let submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let result = await QuestionCreate({
        title,
        content,
        tags,
      });
      if (result.success && result.data) {
        toast.success("Question created successfully.", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        return router.push(ROUTES.QUESTION_DETAILS(result.data?._id));
      }
    } catch (e) {
      if (e instanceof Error) {
        toast.error(e.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    }
  };
  return (
    <form className="space-y-5" onSubmit={submit}>
      <h1 className="text-2xl font-bold">Ask A New Question?</h1>
      <Input
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        text="Describe your question title in short way."
      />
      <div className="mt-3">
        <Editor
          label="Any Question ?"
          value={content}
          onChange={(v) => setContent(v)}
        />
      </div>
      <Input
        onKeyDown={handleEnterPress}
        value={newTag}
        onChange={(e) => setNewTag(e.target.value)}
        label="Tags"
        text="Please press enter to add a new tag."
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div className="mt-5 space-x-3">
        {tags.map((tag, i) => (
          <TagCard key={i} href="/filters/vue">
            {tag}
          </TagCard>
        ))}
      </div>
      <Button type="submit">Create</Button>
    </form>
  );
}

export default QuestionForm;
