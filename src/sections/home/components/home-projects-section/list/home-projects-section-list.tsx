import ProjectCard from "@/components/project-card/project-card";
import { Project } from "@/lib/types/project";
import React from "react";

interface Props {
  projects: Project[];
}

export default function HomeProjectsSectionList({ projects }: Props) {
  return (
    <div className="mx-auto grid gap-6 py-12 xl:grid-cols-2 lg:gap-4">
      {projects.map((proyect, index) => (
        <ProjectCard key={index} proyect={proyect} />
      ))}
    </div>
  );
}
