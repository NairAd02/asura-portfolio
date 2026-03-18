import React from "react";
import { getSkillsSectionInfo } from "@/lib/services/portfolio-info";
import HomeSkillsSection from "./home-skills-section";

export default async function HomeSkillsSectionContainer() {
  const res = await getSkillsSectionInfo();
  if (!res.data || res.error) {
    console.log(res.error);
    return <div>Problems loading the skills section</div>;
  }

  const skillsSectionInfo = res.data;
  return <HomeSkillsSection skillsSectionInfo={skillsSectionInfo} />;
}
