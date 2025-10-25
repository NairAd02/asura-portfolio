import { ProjectDetails as ProjectDetailsType } from "@/lib/types/project";
import React from "react";
import { ProjectHero } from "./components/project-hero";
import { ProjectImageGallery } from "./components/project-image-gallery";
import { ProjectContent } from "./components/project-content";
import { ProjectTechnologies } from "./components/project-technologies";

interface Props {
  project: ProjectDetailsType;
}

export default function ProjectDetails({ project }: Props) {
  return (
    <div className="flex flex-col">
      <ProjectHero project={project} />
      <ProjectImageGallery
        images={project.images}
        mainImage={project.mainImage}
        projectName={project.name}
      />
      <ProjectContent project={project} />
      <ProjectTechnologies technologies={project.technologies} />
    </div>
  );
}
