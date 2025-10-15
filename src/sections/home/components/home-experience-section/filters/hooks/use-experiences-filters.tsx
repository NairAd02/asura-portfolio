"use client";

import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useTransition,
  useRef,
} from "react";
import { Pagination } from "@/lib/types/pagination";
import {
  loadFilters,
  resetFilters,
  saveFilters,
} from "@/lib/actions/filters-actions";
import { paths } from "@/lib/routes/path";

export interface ExperiencesFilters {
  company?: string;
  position?: string;
  description?: string;
  achievements?: string;
  technologies: string[];
}

interface Props {
  setPagination?: Dispatch<SetStateAction<Pagination>>;
  defaultsFilters?: ExperiencesFilters;
  useCache?: boolean;
}

// Utilidad simple de debounce (se conserva entre renders)
function useDebouncedCallback<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function debouncedFunction(...args: Parameters<T>) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }

  // Limpieza al desmontar
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return debouncedFunction;
}

export default function useExperiencesFilters({
  setPagination,
  defaultsFilters = { technologies: [] },
  useCache = false,
}: Props) {
  const [filters, setFilters] = useState<ExperiencesFilters>(defaultsFilters);
  const [isPending, startTransition] = useTransition();
  const SECTION_KEY = paths.home.experiencesSection;

  // Al montar, cargar filtros guardados en cookies/servidor
  useEffect(() => {
    if (useCache)
      startTransition(async () => {
        const cached = await loadFilters<ExperiencesFilters>(SECTION_KEY);
        if (cached) setFilters(cached);
      });
  }, [useCache, SECTION_KEY]);

  // Función debounced para guardar filtros con revalidatePath
  const debouncedSaveFilters = useDebouncedCallback(
    (newFilters: ExperiencesFilters) => {
      startTransition(async () => {
        await saveFilters(SECTION_KEY, newFilters);
      });
    },
    600 // ms de espera antes de guardar y revalidar
  );

  // Cambia filtros y guarda con debounce
  function handleChangeFilters(updatedFilters: Partial<ExperiencesFilters>) {
    const newFilters = { ...filters, ...updatedFilters };
    setFilters(newFilters);

    if (useCache) {
      debouncedSaveFilters(newFilters);
    }

    if (setPagination) {
      setPagination((old) => ({ ...old, page: 1 }));
    }
  }

  // Resetea los filtros
  function handleResetFilters() {
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

  // Contador de filtros activos
  function getActiveFiltersCount() {
    let count = 0;
    if (filters.achievements) count++;
    if (filters.company) count++;
    if (filters.description) count++;
    if (filters.position) count++;

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
