import { Technology } from "./technologies";

export interface Experience {
  id: string;
  company: string;
  position: string;
  startdate: string;
  enddate?: string;
  description: string;
  mainImage?: string;
  achievements: string[];
  technologies: Technology[];
}

export interface ExperiencesFiltersDTO {
  company?: string;
  position?: string;
  description?: string;
  achievements?: string;
  technologies: string[];
}