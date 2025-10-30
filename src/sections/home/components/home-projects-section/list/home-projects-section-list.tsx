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
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
