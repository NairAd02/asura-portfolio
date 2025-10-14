import React from "react";
import { getExperiencesList } from "@/lib/services/experiences";
import { Experience } from "@/lib/types/experiences";
import HomeExperienceSectionList from "./home-experience-section-list";

export default async function HomeExperienceSectionListContainer() {
  const res = await getExperiencesList({ technologies: [] });

  if (res.error) {
    console.log(res.error);
    throw new Error("Error fetching experiences");
  }
  const experiences = res.data as Experience[];
  return <HomeExperienceSectionList experiences={experiences} />;
}
