import ProjectCard from "@/components/project-card/project-card";
import { Project } from "@/lib/types/project";
import React from "react";
import ProjectsFiltersContainer from "../filters/projects-filters-container";

interface Props {
  projects: Project[];
}

export default function HomeProjectsSectionList({ projects }: Props) {
  return (
    <div className="flex mt-10 flex-col gap-6">
      <ProjectsFiltersContainer />
      <div className="mx-auto grid gap-6 xl:grid-cols-2 lg:gap-4 w-full">
        {projects.map((proyect, index) => (
          <ProjectCard key={index} proyect={proyect} />
        ))}
      </div>
    </div>
  );
}
