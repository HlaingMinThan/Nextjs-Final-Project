//ISR (SSG+REVALIDATE)
export const dynamic = "force-static"; //SSG
export const revalidate = 10;

import React from "react";
import TechNewsCard from "./components/TechNewsCard";
import DataRenderer from "@/components/DataRenderer";

async function page() {
  let articles = [];
  let success = false;
  let errorMessage = "";

  try {
    // Construct the API URL - use localhost for development, or get from env
    const baseUrl =
      process.env.NEXT_PUBLIC_APP_URL || process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000";

    const response = await fetch(`${baseUrl}/api/tech-news`); //auto no cache

    const data = await response.json();

    if (data.success) {
      articles = data.data || [];
      success = true;
    } else {
      errorMessage = data.message || "Failed to load tech news";
    }
  } catch (error) {
    errorMessage =
      error instanceof Error ? error.message : "Failed to load tech news";
  }

  return (
    <>
      <div className="flex items-center justify-between p-5">
        <div>
          <h1 className="text-3xl font-bold">Tech News</h1>
          <p className="text-gray-400 mt-2">Latest articles from dev.to</p>
        </div>
      </div>
      <DataRenderer
        success={success}
        data={articles}
        errorMessage={errorMessage}
        render={(articles) =>
          articles.map((article: any) => (
            <TechNewsCard key={article.id} article={article} />
          ))
        }
      />
    </>
  );
}

export default page;
