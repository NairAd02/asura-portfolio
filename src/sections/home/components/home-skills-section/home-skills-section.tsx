import React, { Suspense } from "react";
import HomeSkillsSectionListContainer from "./list/home-skills-section-list-container";
import { CardSkeletonGroup } from "@/components/card-skeleton-group/card-skeleton-group";

export default function HomeSkillsSection() {
  return (
    <section id="habilidades" className="py-24 bg-background">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl text-primary font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Tecnologías y Habilidades
            </h2>
            <p className="max-w-[900px] text-black font-semibold md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Las herramientas y tecnologías que domino para crear soluciones
              excepcionales.
            </p>
          </div>
        </div>
        <Suspense
          fallback={
            <CardSkeletonGroup
              containerClassName="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              count={6}
            />
          }
        >
          <HomeSkillsSectionListContainer />
        </Suspense>
      </div>
    </section>
  );
}
