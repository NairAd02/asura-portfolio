import BlogCard from "@/components/blog-card/blog-card";
import { Blog } from "@/lib/types/blogs";
import React from "react";

interface Props {
  blogs: Blog[];
}

export default function HomeBlogsSectionList({ blogs }: Props) {
  return (
    <div className="mx-auto max-w-6xl py-12">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
}
