"use server";

import { createClient } from "../supabase/server";
import { LevelEnum, MasteredTechnology } from "../types/mastered-technologies";
import { SkillGroup } from "../types/skill-groups";
import { Technology } from "../types/technologies";
import { getImageUrlOrThrow } from "./supabase-storage";

export async function getSkillGroupsList() {
  const supabase = await createClient();
  const { data: skillGroupsData, error } = await supabase.from("skillgroup")
    .select(`
      *,
      skillgroup_has_technology (
        technology (*),
        level
      )
    `);

  const skillGroups = skillGroupsData as (SkillGroup & {
    skillgroup_has_technology: { technology: Technology; level: LevelEnum }[];
  })[];

  try {
    const skillGroupsMapped = await Promise.all(
      skillGroups.map(async (skillGroup) => {
        return {
          ...skillGroup,
          icon: skillGroup.icon
            ? await getImageUrlOrThrow(supabase, skillGroup.icon)
            : undefined,
          masteredTechnologies: await Promise.all(
            skillGroup.skillgroup_has_technology.map(
              async (sht) =>
                ({
                  technology: {
                    ...sht.technology,
                    icon: sht.technology.icon
                      ? await getImageUrlOrThrow(supabase, sht.technology.icon)
                      : undefined,
                  },
                  level: sht.level,
                } as MasteredTechnology)
            )
          ),
        };
      })
    );
    return { data: skillGroupsMapped, error };
  } catch (error) {
    return { data: null, error };
  }
}
