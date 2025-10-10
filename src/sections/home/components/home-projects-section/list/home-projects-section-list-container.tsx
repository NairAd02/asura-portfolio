import React from "react";
import { getProjectsList } from "@/lib/services/projects";
import { Project } from "@/lib/types/project";
import HomeProjectsSectionList from "./home-projects-section-list";
import { getSectionFilters } from "@/lib/cache/server-cache";
import { ProjectsFilters } from "../filters/hooks/use-projects-filters";

export default async function HomeProjectsSectionListContainer() {
  const projectsFilters = (await getSectionFilters<ProjectsFilters>(
    "projects"
  )) || {
    technologies: [],
  };
  const res = await getProjectsList(projectsFilters);

  if (res.error) {
    console.log(res.error);
    throw new Error("Error fetching projects");
  }
  const projects = res.data as Project[];
  return <HomeProjectsSectionList projects={projects} />;
}
