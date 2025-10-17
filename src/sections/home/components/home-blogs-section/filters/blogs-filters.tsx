import SearchInput from "@/components/inputs/search-input/search-input";
import TextareaInput from "@/components/inputs/textarea-input/textarea-input";
import { BlogsFilters as BlogsFiltersType } from "./hooks/use-blogs-filters";
import DatePickerInput from "@/components/inputs/date-picker-input/date-picker-input";

interface Props {
  filters: BlogsFiltersType;
  handleChangeFilters: (filters: Partial<BlogsFiltersType>) => void;
}

export default function BlogsFilters({ filters, handleChangeFilters }: Props) {
  return (
    <div className="flex items-center gap-4">
      <SearchInput
        id="name"
        value={filters.name}
        placeHolder="Buscar por nombre..."
        onChange={(e) => {
          handleChangeFilters({ name: e.target.value || undefined });
        }}
      />
      <TextareaInput
        id="description"
        value={filters.description}
        placeHolder="Buscar por descripción..."
        onChange={(e) => {
          handleChangeFilters({ description: e.target.value || undefined });
        }}
      />

      <DatePickerInput
        id="date"
        placeholder="Buscar por fecha..."
        value={filters.date}
        onChange={(date) => {
          handleChangeFilters({ date: date || undefined });
        }}
      />
    </div>
  );
}
