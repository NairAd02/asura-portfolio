"use client";
import React from "react";
import ProjectsActiveFilters from "./components/experiences-active-filters/experiences-active-filters";
import ProjectsFilters from "./experiences-filters";
import SheetContainer from "@/components/ui/sheet-container";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import useTechnologies from "@/hooks/technologies/use-technologies";
import useExperiencesFilters from "./hooks/use-experiences-filters";

export default function ExperiencesFiltersContainer() {
  const {
    filters,
    getActiveFiltersCount,
    handleChangeFilters,
    handleResetFilters,
  } = useExperiencesFilters({ useCache: true });
  const { technologies, loadingData: loadingDataTechs } = useTechnologies();
  const activeFiltersCount = getActiveFiltersCount();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <SheetContainer
          title="Filtros de Experiencias Laborales"
          trigger={
            <Button className="flex items-center gap-2">
              {" "}
              <SlidersHorizontal /> Filtros
            </Button>
          }
        >
          <ProjectsFilters
            filters={filters}
            handleChangeFilters={handleChangeFilters}
            technologies={{
              data: technologies,
              loading: loadingDataTechs,
            }}
          />
        </SheetContainer>
      </div>
      {activeFiltersCount > 0 && (
        <ProjectsActiveFilters
          filters={filters}
          handleChangeFilters={handleChangeFilters}
          activeFiltersCount={activeFiltersCount}
          handleResetFilters={handleResetFilters}
        />
      )}
    </div>
  );
}
