"use server";

import { createClient } from "../supabase/server";
import { Blog, BlogsFiltersDTO } from "../types/blogs";

export async function getBlogsList(blogFilters: BlogsFiltersDTO) {
  const supabase = await createClient();

  const { name, description, date } = blogFilters || {};

  // Apply PostgreSQL filters for name and description
  const applyPostgreSQLFilters = (
    q: ReturnType<typeof supabase.from> extends infer T
      ? T extends { select: any }
        ? any
        : any
      : any
  ) => {
    let filtered = q;
    if (name && name.trim())
      filtered = filtered.ilike("name", `%${name.trim()}%`);
    if (description && description.trim())
      filtered = filtered.ilike("description", `%${description.trim()}%`);
    return filtered;
  };

  // Start base query with PostgreSQL filters
  const baseQuery = applyPostgreSQLFilters(supabase.from("blog").select("*"));

  const { data: blogsData, error } = await baseQuery;
  if (error) return { data: null, error };

  const blogs = blogsData as Blog[];

  // Apply date filter in TypeScript if needed
  if (!date || !date.trim()) {
    return { data: blogs, error: null };
  }

  let filteredBlogs = blogs;

  if (blogFilters.date) {
    const blogFilterDate = blogFilters.date;

    filteredBlogs = blogs.filter((blog) => {
      const blogDate = new Date(blog.date);
      const filterDate = new Date(blogFilterDate);

      // Normalizar ambas fechas a medianoche
      const normalizedBlogDate = new Date(blogDate).setHours(0, 0, 0, 0);
      const normalizedFilterDate = new Date(filterDate).setHours(0, 0, 0, 0);

      return normalizedBlogDate === normalizedFilterDate;
    });
  }

  return { data: filteredBlogs, error: null };
}
