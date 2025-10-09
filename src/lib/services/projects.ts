"use server";

import { createClient } from "../supabase/server";
import { Project, ProjectsFiltersDTO } from "../types/project";
import { Technology } from "../types/technologies";
import { getImageUrlOrThrow } from "./supabase-storage";

export async function getProjectsList(projectFilters: ProjectsFiltersDTO) {
  const supabase = await createClient();

  const {
    name,
    description,
    problem,
    solution,
    impact,
    teachings,
    technologies,
  } = projectFilters || {};

  // Helper to apply all text-based filters once
  const applyTextFilters = (
    q: ReturnType<typeof supabase.from> extends infer T
      ? T extends { select: any }
        ? any
        : any
      : any
  ) => {
    let filtered = q;
    if (name && name.trim())
      filtered = filtered.ilike("name", `%${name.trim()}%`);
    if (description && description.trim())
      filtered = filtered.ilike("description", `%${description.trim()}%`);
    if (problem && problem.trim())
      filtered = filtered.ilike("problem", `%${problem.trim()}%`);
    if (solution && solution.trim())
      filtered = filtered.ilike("solution", `%${solution.trim()}%`);
    if (impact && impact.trim())
      filtered = filtered.ilike("impact", `%${impact.trim()}%`);
    if (teachings && teachings.trim())
      filtered = filtered.ilike("teachings", `%${teachings.trim()}%`);
    return filtered;
  };

  // Start base query and apply text filters
  let baseQuery = applyTextFilters(
    supabase.from("project").select(`
      *,
      technology_has_proyect (
        technology (*)
      )
    `)
  );

  // If technology filters are present, enforce INTERSECTION (project must contain ALL provided technologies)
  if (Array.isArray(technologies) && technologies.length > 0) {
    // Step 1: Get project ids that have all requested technologies
    const { data: thpRows, error: thpError } = await supabase
      .from("technology_has_proyect")
      .select("proyect_id, technology_id")
      .in("technology_id", technologies);

    if (thpError) return { data: null, error: thpError };

    // Count distinct technology matches per project
    const projectIdToTechSet = new Map<string, Set<string>>();
    (thpRows || []).forEach((row: any) => {
      const set = projectIdToTechSet.get(row.proyect_id) || new Set<string>();
      set.add(row.technology_id);
      projectIdToTechSet.set(row.proyect_id, set);
    });

    const requiredCount = new Set(technologies).size;
    const matchingProjectIds = Array.from(projectIdToTechSet.entries())
      .filter(([, techSet]) => techSet.size === requiredCount)
      .map(([projectId]) => projectId);

    if (matchingProjectIds.length === 0) return { data: [], error: null };

    baseQuery = baseQuery.in("id", matchingProjectIds);
  }

  const { data, error } = await baseQuery;
  if (error) return { data: null, error };

  const projects = data as (Project & {
    technology_has_proyect: { technology: Technology }[];
  })[];

  try {
    const mappedProjects = await Promise.all(
      projects.map(async (project) => {
        let mainImage = undefined;
        if (project.mainImage) {
          mainImage = await getImageUrlOrThrow(supabase, project.mainImage);
        }

        let images: string[] = [];
        if (Array.isArray(project.images)) {
          images = await Promise.all(
            project.images.map(async (image) => {
              return await getImageUrlOrThrow(supabase, image);
            })
          );
        }

        const technologies = await Promise.all(
          project.technology_has_proyect.map(
            async (thp: { technology: Technology }) => ({
              ...thp.technology,
              icon: thp.technology.icon
                ? await getImageUrlOrThrow(supabase, thp.technology.icon)
                : undefined,
            })
          )
        );

        return {
          ...project,
          technologies,
          mainImage,
          images,
        };
      })
    );
    return { data: mappedProjects, error: null };
  } catch (err) {
    return { data: null, error: err };
  }
}
