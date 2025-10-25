import React from "react";
import { getProjectsSectionInfo } from "@/lib/services/portfolio-info";
import HomeProjectsSection from "./home-projects-section";

export default async function HomeProjectsSectionContainer() {
  const res = await getProjectsSectionInfo();
  if (!res.data || res.error) {
    console.log(res.error);
    return <div>Problemas en la carga de la sección de los proyectos</div>;
  }

  const projectsSectionInfo = res.data;
  return <HomeProjectsSection projectsSectionInfo={projectsSectionInfo} />;
}
