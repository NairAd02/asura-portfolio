import React, { Suspense } from "react";
import HomeCertificationsSectionListContainer from "./list/home-certifications-section-list-container";
import { CardSkeletonGroup } from "@/components/card-skeleton-group/card-skeleton-group";
import { CertificationsSectionInfo } from "@/lib/types/portfolio-info";

interface Props {
  certificationsSectionInfo: CertificationsSectionInfo;
}

export default function HomeCertificationsSection({
  certificationsSectionInfo,
}: Props) {
  return (
    <section id="educacion" className="py-24 bg-muted">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl text-primary font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Educación y Certificaciones
            </h2>
            <p className="max-w-[900px] text-black font-semibold md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {certificationsSectionInfo.education_and_certifications_text}
            </p>
          </div>
        </div>

        <Suspense
          fallback={
            <CardSkeletonGroup containerClassName="space-y-6" count={2} />
          }
        >
          <HomeCertificationsSectionListContainer />
        </Suspense>
      </div>
    </section>
  );
}
