import { useCallback } from "react";
import { Separator } from "@/components/ui/separator";
import SearchInput from "@/components/inputs/search-input/search-input";
import ListInput from "@/components/inputs/list-input/list-input";
import { Technology } from "@/lib/types/technologies";
import TextareaInput from "@/components/inputs/textarea-input/textarea-input";
import { OptionData } from "@/lib/types/filters";
import { ExperiencesFilters as ExperiencesFiltersType } from "./hooks/use-experiences-filters";

interface Props {
  filters: ExperiencesFiltersType;
  handleChangeFilters: (filters: Partial<ExperiencesFiltersType>) => void;
  technologies: OptionData<Technology>;
}

export default function ExperiencesFilters({
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
        label="Tecnologías"
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
        id="company"
        label="Buscar por Empresa"
        value={filters.company}
        placeHolder="Introduzca la empresa..."
        onChange={(e) => {
          handleChangeFilters({ company: e.target.value || undefined });
        }}
      />
      <SearchInput
        id="position"
        label="Buscar por rol desempeñado"
        value={filters.position}
        placeHolder="Introduzca el rol que desempeño en la empresa..."
        onChange={(e) => {
          handleChangeFilters({ position: e.target.value || undefined });
        }}
      />

      <TextareaInput
        id="description"
        label="Buscar por descripción"
        value={filters.description}
        placeHolder="Introduzca la descripción..."
        onChange={(e) => {
          handleChangeFilters({ description: e.target.value || undefined });
        }}
      />

      <TextareaInput
        id="achievements"
        label="Buscar por logros"
        value={filters.achievements}
        placeHolder="Introduzca los logros alcanzados en la empresa..."
        onChange={(e) => {
          handleChangeFilters({ achievements: e.target.value || undefined });
        }}
      />
    </div>
  );
}
