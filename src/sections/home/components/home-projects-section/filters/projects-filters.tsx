import { useCallback } from "react";
import { Separator } from "@/components/ui/separator";
import SearchInput from "@/components/inputs/search-input/search-input";
import ListInput from "@/components/inputs/list-input/list-input";
import { ProjectsFilters as ProjectsFiltersType } from "./hooks/use-projects-filters";
import { Technology } from "@/lib/types/technologies";
import TextareaInput from "@/components/inputs/textarea-input/textarea-input";
import { OptionData } from "@/lib/types/filters";

interface Props {
  filters: ProjectsFiltersType;
  handleChangeFilters: (filters: Partial<ProjectsFiltersType>) => void;
  technologies: OptionData<Technology>;
}

export default function ProjectsFilters({
  filters,
  technologies,
  handleChangeFilters,
}: Props) {
  const handleTechnologiesChange = useCallback(
    (scentId: string, checked: boolean) => {
      const currentTech = filters.technologies || [];
      const newTech = checked
        ? [...currentTech, scentId]
        : currentTech.filter((id) => id !== scentId);

      handleChangeFilters({
        technologies: newTech.length > 0 ? newTech : [],
      });
    },
    [filters, handleChangeFilters]
  );

  return (
    <div className="space-y-6 p-4 overflow-auto">
      {/* Technologies */}
      <ListInput
        id="technologies"
        label="Technologies"
        values={filters.technologies}
        options={technologies.data.map((technology) => ({
          value: technology.id,
          label: technology.name,
        }))}
        loading={technologies.loading}
        handleValuesChange={handleTechnologiesChange}
      />
      <Separator className="bg-primary" />
      {/* Search for name */}
      <SearchInput
        id="name"
        label="Search by name"
        value={filters.name}
        placeHolder="Enter name..."
        onChange={(e) => {
          handleChangeFilters({ name: e.target.value || undefined });
        }}
      />
      <TextareaInput
        id="description"
        label="Search by description"
        value={filters.description}
        placeHolder="Enter description..."
        onChange={(e) => {
          handleChangeFilters({ description: e.target.value || undefined });
        }}
      />

      <TextareaInput
        id="problem"
        label="Search by problem"
        value={filters.problem}
        placeHolder="Enter project problem..."
        onChange={(e) => {
          handleChangeFilters({ problem: e.target.value || undefined });
        }}
      />

      <TextareaInput
        id="impact"
        label="Search by impact"
        value={filters.impact}
        placeHolder="Enter project impact..."
        onChange={(e) => {
          handleChangeFilters({ impact: e.target.value || undefined });
        }}
      />

      <TextareaInput
        id="solution"
        label="Search by solution"
        value={filters.solution}
        placeHolder="Enter project solution..."
        onChange={(e) => {
          handleChangeFilters({ solution: e.target.value || undefined });
        }}
      />

      <TextareaInput
        id="teachings"
        label="Search by Learning"
        value={filters.teachings}
        placeHolder="Enter project learnings..."
        onChange={(e) => {
          handleChangeFilters({ teachings: e.target.value || undefined });
        }}
      />
    </div>
  );
}
