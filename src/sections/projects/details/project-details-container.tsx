import React from "react";
import { getProjectById } from "@/lib/services/projects";
import ProjectDetails from "./project-details";

interface Props {
  id: string;
}

export default async function ProjectDetailsContainer({ id }: Props) {
  const res = await getProjectById(id);
  if (!res.data || res.error) {
    console.log(res.error);
    return <div>Problemas en la carga del proyecto</div>;
  }

  const project = res.data;
  return <ProjectDetails project={project} />;
}
