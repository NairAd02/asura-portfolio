import { ProjectDetails as ProjectDetailsType } from "@/lib/types/project";
import React from "react";
import { ProjectHero } from "./components/project-hero";
import { ProjectImageGallery } from "./components/project-image-gallery";
import { ProjectContent } from "./components/project-content";
import { ProjectTechnologies } from "./components/project-technologies";
import { ProjectTechnicalInformation } from "./components/project-technical-information";

interface Props {
  project: ProjectDetailsType;
}

export default function ProjectDetails({ project }: Props) {
  return (
    <div className="flex flex-col">
      <ProjectHero project={project} />
      <ProjectTechnicalInformation
        technicalInfo={project.technical_information}
      />
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
