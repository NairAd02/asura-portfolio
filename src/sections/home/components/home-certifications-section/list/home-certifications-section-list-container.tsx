import React from "react";
import { getCertificationGroupsList } from "@/lib/services/certification-groups";
import { CertificationGroup } from "@/lib/types/certification-groups";
import HomeCertificationsSectionList from "./home-certifications-section-list";

export default async function HomeCertificationsSectionListContainer() {
  const res = await getCertificationGroupsList();

  if (res.error) {
    console.log(res.error);
    throw new Error("Error fetching certification groups");
  }
  const certificationGroups = res.data as CertificationGroup[];
  return (
    <HomeCertificationsSectionList certificationGroups={certificationGroups} />
  );
}
