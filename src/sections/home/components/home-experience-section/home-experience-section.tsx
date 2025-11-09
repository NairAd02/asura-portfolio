import React, { Suspense } from "react";
import HomeExperienceSectionListContainer from "./list/home-experience-section-list-container";
import { CardSkeletonGroup } from "@/components/card-skeleton-group/card-skeleton-group";
import { ExperiencesSectionInfo } from "@/lib/types/portfolio-info";

interface Props {
  experiencesSectionInfo: ExperiencesSectionInfo;
}

export default function HomeExperienceSection({
  experiencesSectionInfo,
}: Props) {
  return (
    <section id="experiencia" className="py-24 bg-muted">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl text-primary font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Experiencia Laboral
            </h2>
            <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {experiencesSectionInfo.work_experience_text}
            </p>
          </div>
        </div>
        <Suspense
          fallback={
            <CardSkeletonGroup
              containerClassName="grid grid-cols-1 lg:grid-cols-2 gap-4"
              count={4}
            />
          }
        >
          <HomeExperienceSectionListContainer />
        </Suspense>
      </div>
    </section>
  );
}
