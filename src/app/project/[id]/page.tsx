import ProjectDetailsContainer from "@/sections/projects/details/project-details-container";
import React from "react";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProjectDetailsPage({ params }: Props) {
  const { id } = await params;

  return <ProjectDetailsContainer id={id} />;
}
