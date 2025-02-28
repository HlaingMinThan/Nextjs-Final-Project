import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import {
  FaReact,
  FaVuejs,
  FaLaravel,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";

function RightSidebar() {
  return (
    <div className="p-5">
      <div>
        <h1 className="text-xl font-bold">Popular Questions</h1>
        <div className="mt-5 space-y-5 pl-3">
          <div className="flex items-center space-x-2">
            <span className="text-xl text-main">
              <AiFillQuestionCircle />
            </span>
            <span className="line-clamp-2 text-sm">
              this is question 1 Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Tenetur quos, animi assumenda velit est aliquam,
              esse quia ducimus doloribus quasi veniam voluptatum aspernatur.
              Rerum qui quas deserunt ad architecto itaque?
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xl text-main">
              <AiFillQuestionCircle />
            </span>
            <span className="line-clamp-2 text-sm">
              this is question 1 Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Tenetur quos, animi assumenda velit est aliquam,
              esse quia ducimus doloribus quasi veniam voluptatum aspernatur.
              Rerum qui quas deserunt ad architecto itaque?
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xl text-main">
              <AiFillQuestionCircle />
            </span>
            <span className="line-clamp-2 text-sm">
              this is question 1 Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Tenetur quos, animi assumenda velit est aliquam,
              esse quia ducimus doloribus quasi veniam voluptatum aspernatur.
              Rerum qui quas deserunt ad architecto itaque?
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xl text-main">
              <AiFillQuestionCircle />
            </span>
            <span className="line-clamp-2 text-sm">
              this is question 1 Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Tenetur quos, animi assumenda velit est aliquam,
              esse quia ducimus doloribus quasi veniam voluptatum aspernatur.
              Rerum qui quas deserunt ad architecto itaque?
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xl text-main">
              <AiFillQuestionCircle />
            </span>
            <span className="line-clamp-2 text-sm">
              this is question 1 Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Tenetur quos, animi assumenda velit est aliquam,
              esse quia ducimus doloribus quasi veniam voluptatum aspernatur.
              Rerum qui quas deserunt ad architecto itaque?
            </span>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-xl font-bold">Popular Tags</h1>
        <div className="mt-5 space-y-5 pl-3">
          <div className="flex items-center space-x-2">
            <span className="text-xl" style={{ color: "#61DAFB" }}>
              <FaReact />
            </span>
            <span className="line-clamp-2 text-[16px]">React</span>
          </div>
        </div>
        <div className="mt-5 space-y-5 pl-3">
          <div className="flex items-center space-x-2">
            <span className="text-xl" style={{ color: "#4FC08D" }}>
              <FaVuejs />
            </span>
            <span className="line-clamp-2 text-[16px]">Vue</span>
          </div>
        </div>
        <div className="mt-5 space-y-5 pl-3">
          <div className="flex items-center space-x-2">
            <span className="text-xl" style={{ color: "#FF2D20" }}>
              <FaLaravel />
            </span>
            <span className="line-clamp-2 text-[16px]">Laravel</span>
          </div>
        </div>
        <div className="mt-5 space-y-5 pl-3">
          <div className="flex items-center space-x-2">
            <span className="text-xl" style={{ color: "#3776AB" }}>
              <FaPython />
            </span>
            <span className="line-clamp-2 text-[16px]">Python</span>
          </div>
        </div>
        <div className="mt-5 space-y-5 pl-3">
          <div className="flex items-center space-x-2">
            <span className="text-xl" style={{ color: "#339933" }}>
              <FaNodeJs />
            </span>
            <span className="line-clamp-2 text-[16px]">Node.js</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
