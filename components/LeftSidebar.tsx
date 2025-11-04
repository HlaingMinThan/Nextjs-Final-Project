import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";

import ROUTES from "@/routes";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

async function LeftSidebar() {
  let session = await auth();
  let user = session?.user;
  return (
    <div className="w-1/5 px-5 py-2">
      <ul className="space-y-6">
        <li className="rounded-xl bg-main p-3">
          <Link
            href={ROUTES.HOME}
            className="flex items-center space-x-4 text-[16px] font-bold"
          >
            <FaHome />
            <span>Home</span>
          </Link>
        </li>
        <li className="rounded-xl bg-primary p-3">
          <Link
            href={ROUTES.TAGS}
            className="flex items-center space-x-4 text-[16px] font-bold"
          >
            <FaHome />
            <span>Tags</span>
          </Link>
        </li>
        <li className="rounded-xl bg-primary p-3">
          <Link
            href={ROUTES.QUESTIONS}
            className="flex items-center space-x-4 text-[16px] font-bold"
          >
            <FaHome />
            <span>Popular Questions</span>
          </Link>
        </li>
        <li className="rounded-xl bg-primary p-3">
          <Link
            href={ROUTES.QUESTIONS}
            className="flex items-center space-x-4 text-[16px] font-bold"
          >
            <FaHome />
            <span>Ask a new question</span>
          </Link>
        </li>
        <li className="rounded-xl bg-primary p-3">
          <Link
            href={ROUTES.COMMUNITY}
            className="flex items-center space-x-4 text-[16px] font-bold"
          >
            <FaHome />
            <span>Community</span>
          </Link>
        </li>
        {!user && (
          <li className="rounded-xl border-2 border-main p-3">
            <Link
              href={ROUTES.LOGIN}
              className="flex items-center space-x-4 text-[16px] font-bold"
            >
              <FaHome />
              <span>Login</span>
            </Link>
          </li>
        )}
        {user && (
          <li className="rounded-xl bg-red-500 p-3">
            <form
              action={async () => {
                "use server";
                await signOut({ redirect: false });
                return redirect(ROUTES.LOGIN);
              }}
            >
              <button
                type="submit"
                className="flex items-center space-x-4 text-[16px] font-bold"
              >
                <FaHome />
                <span>Logout</span>
              </button>
            </form>
          </li>
        )}
      </ul>
    </div>
  );
}

export default LeftSidebar;
