import React, { Suspense } from "react";
import HomeProjectsSectionListContainer from "./list/home-projects-section-list-container";
import { CardSkeletonGroup } from "@/components/card-skeleton-group/card-skeleton-group";

export default function HomeProjectsSection() {
  return (
    <section id="proyectos" className="py-24 bg-background">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl text-primary font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Proyectos Destacados
            </h2>
            <p className="max-w-[900px] text-black font-semibold md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Una selección de proyectos que demuestran mis habilidades técnicas
              y enfoque en la resolución de problemas.
            </p>
          </div>
        </div>
        <Suspense
          fallback={
            <CardSkeletonGroup
              containerClassName="mx-auto grid gap-6 py-12 xl:grid-cols-2 lg:gap-4"
              count={4}
            />
          }
        >
          <HomeProjectsSectionListContainer
            projectsFilters={{ technologies: [] }}
          />
        </Suspense>
      </div>
    </section>
  );
}
