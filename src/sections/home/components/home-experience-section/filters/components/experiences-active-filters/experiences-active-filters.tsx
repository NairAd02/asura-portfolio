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
          <Label>Active Filters</Label>

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
            Clear
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.company && (
            <FilterBadge
              filterName="Company"
              filterValue={filters.company}
              handleDeleteFilter={() => {
                handleChangeFilters({ company: undefined });
              }}
            />
          )}
          {filters.description && (
            <FilterBadge
              filterName="Description"
              filterValue={filters.description}
              handleDeleteFilter={() => {
                handleChangeFilters({ description: undefined });
              }}
            />
          )}
          {filters.position && (
            <FilterBadge
              filterName="Role performed"
              filterValue={filters.position}
              handleDeleteFilter={() => {
                handleChangeFilters({ position: undefined });
              }}
            />
          )}
          {filters.achievements && (
            <FilterBadge
              filterName="Achievements"
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
