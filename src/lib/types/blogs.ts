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