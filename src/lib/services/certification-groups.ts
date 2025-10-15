"use server";

import { createClient } from "../supabase/server";
import { CertificationGroup } from "../types/certification-groups";
import { Certification } from "../types/certifications";

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
    data: certificationGroups.map((certificationGroup) => {
      return {
        id: certificationGroup.id,
        title: certificationGroup.title,
        certifications:
          certificationGroup.certification_has_certificationgroup.map(
            (ccg) => ccg.certification
          ),
      };
    }) as CertificationGroup[],
    error,
  };
}
