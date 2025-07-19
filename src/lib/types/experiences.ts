import { Technology } from "./technologies";

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate?: string; // Optional, if the experience is current
  description: string;
  technologies: Technology[];
  mainImage?: string;
  achievements: string[];
}
