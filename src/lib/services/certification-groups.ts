"use server";

import { createClient } from "../supabase/server";
import { CertificationGroup } from "../types/certification-groups";
import { Certification } from "../types/certifications";
import { getImageUrlOrThrow } from "./supabase-storage";

export async function getCertificationGroupsList() {
  const supabase = await createClient();
  const { data: certificationGroupsData, error } = await supabase.from(
    "certificationgroup"
  ).select(`
        *,
        certification_has_certificationgroup (
          certification (*)
        )
      `);
  const certificationGroups = certificationGroupsData as (CertificationGroup & {
    certification_has_certificationgroup: {
      certification: Certification;
    }[];
  })[];

  return {
    data: (await Promise.all(
      certificationGroups.map(async (certificationGroup) => {
        return {
          id: certificationGroup.id,
          title: certificationGroup.title,
          certifications: await Promise.all(
            certificationGroup.certification_has_certificationgroup.map(
              async (ccg) => ({
                ...ccg.certification,
                image: ccg.certification.image
                  ? await getImageUrlOrThrow(supabase, ccg.certification.image)
                  : undefined,
              })
            )
          ),
        };
      })
    )) as CertificationGroup[],
    error,
  };
}
