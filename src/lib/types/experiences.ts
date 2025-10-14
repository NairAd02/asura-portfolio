import { Technology } from "./technologies";

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: Technology[];
  mainImage?: string;
  achievements: string[];
}
