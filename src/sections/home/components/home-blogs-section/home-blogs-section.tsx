import React, { Suspense } from "react";
import HomeBlogsSectionListContainer from "./list/home-blogs-section-list-container";
import { CardSkeletonGroup } from "@/components/card-skeleton-group/card-skeleton-group";

export default function HomeBlogsSection() {
  return (
    <section id="blogs" className="py-24 bg-background">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl text-primary font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Blog & Publicaciones
            </h2>
            <p className="max-w-[900px] text-black font-semibold md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Comparto conocimientos y experiencias a través de artículos
              técnicos.
            </p>
          </div>
        </div>

        <Suspense
          fallback={
            <CardSkeletonGroup
              containerClassName="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              count={3}
            />
          }
        >
          <HomeBlogsSectionListContainer />
        </Suspense>
      </div>
    </section>
  );
}
