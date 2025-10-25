import React from "react";
import { getExperiencesSectionInfo } from "@/lib/services/portfolio-info";
import HomeExperienceSection from "./home-experience-section";

export default async function HomeExperiencesSectionContainer() {
  const res = await getExperiencesSectionInfo();
  if (!res.data || res.error) {
    console.log(res.error);
    return <div>Problemas en la carga de la sección de las experiencias</div>;
  }

  const experiencesSectionInfo = res.data;
  return (
    <HomeExperienceSection experiencesSectionInfo={experiencesSectionInfo} />
  );
}
