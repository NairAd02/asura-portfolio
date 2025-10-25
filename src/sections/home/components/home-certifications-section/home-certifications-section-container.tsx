import React from "react";
import { getCertificationsSectionInfo } from "@/lib/services/portfolio-info";
import HomeCertificationsSection from "./home-certifications-section";

export default async function HomeCertificationsSectionContainer() {
  const res = await getCertificationsSectionInfo();
  if (!res.data || res.error) {
    console.log(res.error);
    return (
      <div>Problemas en la carga de la sección de las certificaciones</div>
    );
  }

  const certificationsSectionInfo = res.data;
  return (
    <HomeCertificationsSection
      certificationsSectionInfo={certificationsSectionInfo}
    />
  );
}
