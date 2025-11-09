import React, { Suspense } from "react";
import HomeProjectsSectionListContainer from "./list/home-projects-section-list-container";
import { CardSkeletonGroup } from "@/components/card-skeleton-group/card-skeleton-group";
import { ProjectsSectionInfo } from "@/lib/types/portfolio-info";

interface Props {
  projectsSectionInfo: ProjectsSectionInfo;
}

export default function HomeProjectsSection({ projectsSectionInfo }: Props) {
  return (
    <section id="proyectos" className="py-24 bg-background">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl text-primary font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Proyectos Destacados
            </h2>
            <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {projectsSectionInfo.feature_project_text}
            </p>
          </div>
        </div>
        <Suspense
          fallback={
            <CardSkeletonGroup
              containerClassName="mx-auto mt-10 max-w-7xl grid gap-6 lg:gap-4 w-full"
              count={4}
            />
          }
        >
          <HomeProjectsSectionListContainer />
        </Suspense>
      </div>
    </section>
  );
}
