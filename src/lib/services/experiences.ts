"use server";

import { createClient } from "../supabase/server";
import { Experience, ExperiencesFiltersDTO } from "../types/experiences";
import { Technology } from "../types/technologies";
import { getImageUrlOrThrow } from "./supabase-storage";

export async function getExperiencesList(
  experienceFilters: ExperiencesFiltersDTO
) {
  const supabase = await createClient();

  const { company, position, description, achievements, technologies } =
    experienceFilters || {};

  // Helper to apply all text-based filters once
  const applyTextFilters = (
    q: ReturnType<typeof supabase.from> extends infer T
      ? T extends { select: any }
        ? any
        : any
      : any
  ) => {
    let filtered = q;
    if (company && company.trim())
      filtered = filtered.ilike("company", `%${company.trim()}%`);
    if (position && position.trim())
      filtered = filtered.ilike("position", `%${position.trim()}%`);
    if (description && description.trim())
      filtered = filtered.ilike("description", `%${description.trim()}%`);
    if (achievements && achievements.trim())
      filtered = filtered.ilike("achievements", `%${achievements.trim()}%`);
    return filtered;
  };

  // Start base query and apply text filters
  let baseQuery = applyTextFilters(
    supabase.from("experience").select(`
      *,
      experience_has_technology (
        technology (*)
      )
    `)
  );

  // If technology filters are present, enforce INTERSECTION (experience must contain ALL provided technologies)
  if (Array.isArray(technologies) && technologies.length > 0) {
    // Step 1: Get experience ids that have all requested technologies
    const { data: theRows, error: theError } = await supabase
      .from("experience_has_technology")
      .select("experience_id, technology_id")
      .in("technology_id", technologies);

    if (theError) return { data: null, error: theError };

    // Count distinct technology matches per experience
    const experienceIdToTechSet = new Map<string, Set<string>>();
    (theRows || []).forEach((row: any) => {
      const set =
        experienceIdToTechSet.get(row.experience_id) || new Set<string>();
      set.add(row.technology_id);
      experienceIdToTechSet.set(row.experience_id, set);
    });

    const requiredCount = new Set(technologies).size;
    const matchingExperienceIds = Array.from(experienceIdToTechSet.entries())
      .filter(([, techSet]) => techSet.size === requiredCount)
      .map(([experienceId]) => experienceId);

    if (matchingExperienceIds.length === 0) return { data: [], error: null };

    baseQuery = baseQuery.in("id", matchingExperienceIds);
  }

  const { data, error } = await baseQuery;
  if (error) return { data: null, error };

  const experiences = data as (Experience & {
    technology_has_experience: { technology: Technology }[];
  })[];

  try {
    const mappedExperiences = await Promise.all(
      experiences.map(async (experience) => {
        let mainImage = undefined;
        if (experience.mainImage) {
          mainImage = await getImageUrlOrThrow(supabase, experience.mainImage);
        }

        const technologies = await Promise.all(
          experience.technology_has_experience.map(
            async (the: { technology: Technology }) => ({
              ...the.technology,
              icon: the.technology.icon
                ? await getImageUrlOrThrow(supabase, the.technology.icon)
                : undefined,
            })
          )
        );

        return {
          ...experience,
          technologies,
          mainImage,
        };
      })
    );
    return { data: mappedExperiences, error: null };
  } catch (err) {
    return { data: null, error: err };
  }
}
