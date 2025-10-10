"use server";
import { createClient } from "../supabase/server";
import { Technology } from "../types/technologies";
import { getImageUrlOrThrow } from "./supabase-storage";

export async function getTechnologiesList() {
  const supabase = await createClient();
  const { data: technologiesData, error } = await supabase
    .from("technology")
    .select("*");
  const technologies = technologiesData as Technology[];

  try {
    const technologiesMapped = await Promise.all(
      technologies.map(async (technology) => {
        return {
          ...technology,
          icon: technology.icon
            ? await getImageUrlOrThrow(supabase, technology.icon)
            : undefined,
        };
      })
    );
    return { data: technologiesMapped, error };
  } catch (error) {
    return { data: null, error };
  }
}
