import ProjectCard from "@/components/project-card/project-card";
import { Project } from "@/lib/types/project";
import React from "react";
import ProjectsFiltersContainer from "../filters/projects-filters-container";

interface Props {
  projects: Project[];
}

export default function HomeProjectsSectionList({ projects }: Props) {
  return (
    <div className="flex mt-10 flex-col mx-auto max-w-7xl gap-6">
      <ProjectsFiltersContainer />
      <div className="mx-auto grid gap-6 lg:gap-4 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
