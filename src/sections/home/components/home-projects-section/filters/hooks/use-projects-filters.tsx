"use client";

import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useTransition,
} from "react";
import { Pagination } from "@/lib/types/pagination";
import {
  loadFilters,
  resetFilters,
  saveFilters,
} from "@/lib/actions/filters-actions";

export interface ProjectsFilters {
  name?: string;
  description?: string;
  problem?: string;
  solution?: string;
  impact?: string;
  teachings?: string;
  technologies: string[];
}

interface Props {
  setPagination?: Dispatch<SetStateAction<Pagination>>;
  defaultsFilters?: ProjectsFilters;
  useCache?: boolean;
}

export default function useProjectsFilters({
  setPagination,
  defaultsFilters = { technologies: [] },
  useCache = false,
}: Props) {
  const [filters, setFilters] = useState<ProjectsFilters>(defaultsFilters);
  const [isPending, startTransition] = useTransition();
  const SECTION_KEY = "projects";

  // 🔄 Al montar, cargar los filtros persistidos desde el servidor
  useEffect(() => {
    if (useCache)
      startTransition(async () => {
        const cached = await loadFilters<ProjectsFilters>(SECTION_KEY);
        if (cached) setFilters(cached);
      });
  }, [useCache]);

  // ✅ Actualiza filtros, guarda en el caché y revalida SSR automáticamente
  async function handleChangeFilters(updatedFilters: Partial<ProjectsFilters>) {
    const newFilters = { ...filters, ...updatedFilters };
    setFilters(newFilters);
    if (useCache)
      startTransition(async () => {
        await saveFilters(SECTION_KEY, newFilters);
        // revalidatePath() dentro de saveFilters vuelve a ejecutar el fetch SSR
      });

    if (setPagination) {
      setPagination((old) => ({ ...old, page: 1 }));
    }
  }

  // 🔁 Resetea los filtros y revalida SSR
  async function handleResetFilters() {
    const reset = { technologies: [] };
    setFilters(reset);
    if (useCache)
      startTransition(async () => {
        await resetFilters(SECTION_KEY);
      });

    if (setPagination) {
      setPagination((old) => ({ ...old, page: 1 }));
    }
  }

  // 🧮 Cuenta filtros activos
  function getActiveFiltersCount() {
    let count = 0;
    if (filters.name) count++;
    if (filters.description) count++;
    if (filters.problem) count++;
    if (filters.impact) count++;
    if (filters.teachings) count++;
    if (filters.solution) count++;
    return count;
  }

  return {
    filters,
    handleChangeFilters,
    handleResetFilters,
    getActiveFiltersCount,
    isPending,
  };
}
