import React from "react";
import { getSkillGroupsList } from "@/lib/services/skill-groups";
import { SkillGroup } from "@/lib/types/skill-groups";
import HomeSkillsSectionList from "./home-skills-section-list";

export default async function HomeSkillsSectionListContainer() {
  const res = await getSkillGroupsList();

  if (res.error) {
    console.log(res.error);
    throw new Error("Error fetching skills groups");
  }
  const skillGroups = res.data as SkillGroup[];
  return <HomeSkillsSectionList skillGroups={skillGroups} />;
}
