import React from "react";
import { getExperiencesList } from "@/lib/services/experiences";
import { Experience } from "@/lib/types/experiences";
import HomeExperienceSectionList from "./home-experience-section-list";
import { getSectionFilters } from "@/lib/cache/server-cache";
import { paths } from "@/lib/routes/path";
import { ExperiencesFilters } from "../filters/hooks/use-experiences-filters";

export default async function HomeExperienceSectionListContainer() {
  const experiencesFilters = (await getSectionFilters<ExperiencesFilters>(
    paths.home.experiencesSection
  )) || {
    technologies: [],
  };

  const res = await getExperiencesList(experiencesFilters);

  if (res.error) {
    console.log(res.error);
    throw new Error("Error fetching experiences");
  }
  const experiences = res.data as Experience[];

  // Sort experiences by date (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = new Date(a.startdate).getTime();
    const dateB = new Date(b.startdate).getTime();
    return dateB - dateA;
  });

  return <HomeExperienceSectionList experiences={sortedExperiences} />;
}
