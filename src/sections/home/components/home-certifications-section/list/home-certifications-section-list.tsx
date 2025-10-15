import CertificationGroupCard from "@/components/certification-group-card/certification-group-card";
import { CertificationGroup } from "@/lib/types/certification-groups";
import React from "react";

interface Props {
  certificationGroups: CertificationGroup[];
}

export default function HomeCertificationsSectionList({
  certificationGroups,
}: Props) {
  return (
    <div className="mx-auto max-w-3xl py-12">
      <div className="space-y-6">
        {certificationGroups.map((certificationGroup, index) => (
          <CertificationGroupCard
            key={index}
            certificationGroup={certificationGroup}
          />
        ))}
      </div>
    </div>
  );
}
