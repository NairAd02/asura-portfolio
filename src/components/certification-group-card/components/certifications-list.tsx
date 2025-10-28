import { Certification } from "@/lib/types/certifications";
import React from "react";
import CertificationCard from "./certification-card";

interface Props {
  certifications: Certification[];
}

export default function CertificationsList({ certifications }: Props) {
  return (
    <div>
      <div className="grid gap-4">
        {certifications.map((certification, index) => (
          <CertificationCard key={index} certification={certification} />
        ))}
      </div>
    </div>
  );
}
