import React from "react";
import { getBlogsList } from "@/lib/services/blogs";
import { Blog } from "@/lib/types/blogs";
import HomeBlogsSectionList from "./home-blogs-section-list";

export default async function HomeBlogsSectionListContainer() {
  const res = await getBlogsList();

  if (res.error) {
    console.log(res.error);
    throw new Error("Error fetching blogs");
  }
  const blogs = res.data as Blog[];
  return <HomeBlogsSectionList blogs={blogs} />;
}
