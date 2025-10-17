import { BlogsFilters } from "@/sections/home/components/home-blogs-section/filters/hooks/use-blogs-filters";

export interface Blog {
  id: string;
  name: string;
  description: string;
  date: string;
  link?: string;
}

export interface BlogsFiltersDTO {
  name?: string;
  description?: string;
  date?: string;
}

export const convertBlogsFiltersDTO = (
  blogsFilters: BlogsFilters
): BlogsFiltersDTO => {
  return {
    ...blogsFilters,
    date: blogsFilters.date?.toISOString(),
  };
};
