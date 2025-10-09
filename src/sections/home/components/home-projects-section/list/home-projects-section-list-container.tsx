import React from "react";
import { getProjectsList } from "@/lib/services/projects";
import { Project, ProjectsFiltersDTO } from "@/lib/types/project";
import HomeProjectsSectionList from "./home-projects-section-list";

interface Props {
  projectsFilters: ProjectsFiltersDTO;
}

export default async function HomeProjectsSectionListContainer({
  projectsFilters,
}: Props) {
  const res = await getProjectsList(projectsFilters);

  if (res.error) {
    console.log(res.error);
    throw new Error("Error fetching projects");
  }
  const projects = res.data as Project[];
  return <HomeProjectsSectionList projects={projects} />;
}
