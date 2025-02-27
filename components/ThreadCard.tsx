import Image from "next/image";
import React from "react";
import { AiFillLike } from "react-icons/ai";
import { IoMdEye } from "react-icons/io";
import { MdQuestionAnswer } from "react-icons/md";

import profile from "@/public/profile.jpg";

import TagCard from "./TagCard";

function ThreadCard() {
  return (
    <div className="space-y-7 rounded-xl bg-card px-10 py-5">
      <h1 className="text-xl font-bold">What is vue js ? how does it work ?</h1>
      <div className="space-x-3">
        <TagCard href="/filters/vue">Vue</TagCard>
        <TagCard href="/filters/react">React</TagCard>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 text-[14px] text-gray-300">
          <Image
            src={profile}
            width={30}
            height={30}
            className="aspect-square rounded-full object-cover"
            alt="logo"
          />
          <span>Hlaing Min Than . asked 3 minutes ago</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 text-[14px] text-gray-300">
            <span>
              <AiFillLike />
            </span>
            <span>1.2k Likes</span>
          </div>
          <div className="flex items-center space-x-1 text-[14px] text-gray-300">
            <span>
              <MdQuestionAnswer />
            </span>
            <span>1.2k Answers</span>
          </div>
          <div className="flex items-center space-x-1 text-[14px] text-gray-300">
            <span>
              <IoMdEye />
            </span>
            <span>1.2k Views</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreadCard;
