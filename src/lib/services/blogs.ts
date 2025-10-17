"use server";

import { createClient } from "../supabase/server";
import { Blog, BlogsFiltersDTO } from "../types/blogs";

export async function getBlogsList(blogFilters?: BlogsFiltersDTO) {
  const supabase = await createClient();

  const { name, description, date } = blogFilters || {};

  // Helper to apply all text-based filters once
  const applyTextFilters = (
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
    if (date && date.trim())
      filtered = filtered.ilike("date", `%${date.trim()}%`);
    return filtered;
  };

  // Start base query and apply text filters
  const baseQuery = applyTextFilters(supabase.from("blog").select("*"));

  const { data: blogsData, error } = await baseQuery;
  if (error) return { data: null, error };

  const blogs = blogsData as Blog[];

  return { data: blogs, error: null };
}
