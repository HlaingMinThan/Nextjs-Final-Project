"use client";

import GetUserVote from "@/lib/actions/GetUserVote";
import VoteAction from "@/lib/actions/VoteAction";
import React, { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";

function VoteButtons({
  typeId,
  type,
  initialUpvotes,
  initialDownvotes,
}: {
  typeId: string;
  type: "question" | "answer";
  initialUpvotes: number;
  initialDownvotes: number;
}) {
  let [upvotes, setUpvotes] = useState(initialUpvotes);
  let [downvotes, setDownvotes] = useState(initialDownvotes);
  let [userVote, setUserVote] = useState<"upvote" | "downvote" | null>(null);

  useEffect(() => {
    const fetchUserVote = async () => {
      const { success, data } = await GetUserVote({
        type,
        typeId,
      });
      if (success && data) {
        setUserVote(data.userVote);
      }
    };
    fetchUserVote();
  }, [type, typeId]);

  let handleVote = async (voteType: "upvote" | "downvote") => {
    try {
      let { success, data, message } = await VoteAction({
        type,
        typeId,
        voteType,
      });
      if (success) {
        let { upvotes = 0, downvotes = 0, userVote } = data || {};
        setUpvotes(upvotes);
        setDownvotes(downvotes);
        setUserVote(userVote ?? null);
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
    <div className="flex items-center space-x-2 text-xs">
      <div>
        <button
          onClick={() => handleVote("upvote")}
          className={`p-2 border-[1px] border-white space-x-2 rounded-lg ${
            userVote === "upvote" ? "border-green-300 text-green-300" : ""
          }`}
        >
          <span>{upvotes}</span>
          <span>Likes</span>
        </button>
      </div>
      <div>
        <button
          onClick={() => handleVote("downvote")}
          className={`p-2 border-[1px] border-white space-x-2 rounded-lg ${
            userVote === "downvote" ? "border-red-300 text-red-300" : ""
          }`}
        >
          <span>{downvotes}</span>
          <span>Dislikes</span>
        </button>
      </div>
    </div>
  );
}

export default VoteButtons;
