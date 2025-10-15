import { Label } from "@/components/ui/label";
import React from "react";
import FilterBadge from "@/components/filters/filter-badge/filter-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RotateCcwIcon } from "lucide-react";
import { ExperiencesFilters } from "../../hooks/use-experiences-filters";

interface Props {
  filters: ExperiencesFilters;
  handleChangeFilters: (filters: Partial<ExperiencesFilters>) => void;
  activeFiltersCount: number;
  handleResetFilters: () => void;
}

export default function ExperiencesActiveFilters({
  filters,
  handleChangeFilters,
  activeFiltersCount,
  handleResetFilters,
}: Props) {
  return (
    <div>
      <div className="space-y-4">
        <div className="flex gap-2 items-center">
          <Label>Filtros Activos</Label>

          <Badge variant="default" className="ml-2">
            {activeFiltersCount}
          </Badge>

          <Button
            variant="outline"
            size="sm"
            onClick={handleResetFilters}
            className="h-8"
          >
            <RotateCcwIcon className="h-4 w-4 mr-1" />
            Limpiar
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.company && (
            <FilterBadge
              filterName="Empresa"
              filterValue={filters.company}
              handleDeleteFilter={() => {
                handleChangeFilters({ company: undefined });
              }}
            />
          )}
          {filters.description && (
            <FilterBadge
              filterName="Descripción"
              filterValue={filters.description}
              handleDeleteFilter={() => {
                handleChangeFilters({ description: undefined });
              }}
            />
          )}
          {filters.position && (
            <FilterBadge
              filterName="Rol desempeñado"
              filterValue={filters.position}
              handleDeleteFilter={() => {
                handleChangeFilters({ position: undefined });
              }}
            />
          )}
          {filters.achievements && (
            <FilterBadge
              filterName="Logros"
              filterValue={filters.achievements}
              handleDeleteFilter={() => {
                handleChangeFilters({ achievements: undefined });
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
