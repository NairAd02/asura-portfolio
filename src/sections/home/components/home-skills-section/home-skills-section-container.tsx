import React from "react";
import { getSkillsSectionInfo } from "@/lib/services/portfolio-info";
import HomeSkillsSection from "./home-skills-section";

export default async function HomeSkillsSectionContainer() {
  const res = await getSkillsSectionInfo();
  if (!res.data || res.error) {
    console.log(res.error);
    return <div>Problemas en la carga de la sección de las habilidades</div>;
  }

  const skillsSectionInfo = res.data;
  return <HomeSkillsSection skillsSectionInfo={skillsSectionInfo} />;
}
