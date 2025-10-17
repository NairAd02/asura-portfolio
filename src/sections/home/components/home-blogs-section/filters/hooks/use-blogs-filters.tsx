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

export interface BlogsFilters {
  name?: string;
  description?: string;
  date?: Date;
}

interface Props {
  setPagination?: Dispatch<SetStateAction<Pagination>>;
  defaultsFilters?: BlogsFilters;
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

export default function useBlogsFilters({
  setPagination,
  defaultsFilters = {},
  useCache = false,
}: Props) {
  const [filters, setFilters] = useState<BlogsFilters>(defaultsFilters);
  const [isPending, startTransition] = useTransition();
  const SECTION_KEY = paths.home.blogsSection;

  // Al montar, cargar filtros guardados en cookies/servidor
  useEffect(() => {
    if (useCache)
      startTransition(async () => {
        const cached = await loadFilters<BlogsFilters>(SECTION_KEY);
        if (cached) setFilters(cached);
      });
  }, [useCache, SECTION_KEY]);

  // Función debounced para guardar filtros con revalidatePath
  const debouncedSaveFilters = useDebouncedCallback(
    (newFilters: BlogsFilters) => {
      startTransition(async () => {
        await saveFilters(SECTION_KEY, newFilters);
      });
    },
    600 // ms de espera antes de guardar y revalidar
  );

  // Cambia filtros y guarda con debounce
  function handleChangeFilters(updatedFilters: Partial<BlogsFilters>) {
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
    const reset = {};
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
    if (filters.name) count++;
    if (filters.description) count++;
    if (filters.date) count++;

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
