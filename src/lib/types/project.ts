import { Technology } from "./technologies";

export interface ProjectMetaData {
  name: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  mainImage?: string;
  sourceCodeUrl?: string;
  deploymentUrl?: string;
  images: string[];
  problem: string;
  solution: string;
  impact: string;
  teachings: string;
  technologies: Technology[];
}

export interface ProjectDetails {
  id: string;
  name: string;
  description: string;
  technical_information: string;
  mainImage?: string;
  sourceCodeUrl?: string;
  deploymentUrl?: string;
  images: string[];
  problem: string;
  solution: string;
  impact: string;
  teachings: string;
  technologies: Technology[];
}

export interface ProjectsFiltersDTO {
  name?: string;
  description?: string;
  problem?: string;
  solution?: string;
  impact?: string;
  teachings?: string;
  technologies: string[];
}
