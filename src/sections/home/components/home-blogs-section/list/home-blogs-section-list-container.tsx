import React from "react";
import { getBlogsList } from "@/lib/services/blogs";
import { Blog, convertBlogsFiltersDTO } from "@/lib/types/blogs";
import HomeBlogsSectionList from "./home-blogs-section-list";
import { getSectionFilters } from "@/lib/cache/server-cache";
import { BlogsFilters } from "../filters/hooks/use-blogs-filters";
import { paths } from "@/lib/routes/path";

export default async function HomeBlogsSectionListContainer() {
  const blogsFilters =
    (await getSectionFilters<BlogsFilters>(paths.home.blogsSection)) || {};
  const res = await getBlogsList(convertBlogsFiltersDTO(blogsFilters));

  if (res.error) {
    console.log(res.error);
    throw new Error("Error fetching blogs");
  }
  const blogs = res.data as Blog[];
  return <HomeBlogsSectionList blogs={blogs} />;
}
