"use client";

import { Pagination } from "@/lib/types/pagination";

import { Dispatch, SetStateAction, useState } from "react";

export interface TechnologiesFilters {
  nombre?: string;
}

interface Props {
  setPagination?: Dispatch<SetStateAction<Pagination>>;
  defaultsFilters?: TechnologiesFilters;
}

export default function useTechonologiesFilters({
  setPagination,
  defaultsFilters = {},
}: Props) {
  const [filters, setFilters] = useState<TechnologiesFilters>(defaultsFilters);

  async function handleChangeFilters(
    updatedFilters: Partial<TechnologiesFilters>
  ) {
    await setFilters((prev) => ({
      ...prev,
      ...updatedFilters,
    }));

    if (setPagination)
      setPagination((oldPagination) => ({ ...oldPagination, page: 1 }));
  }

  function handleResetFilters() {
    setFilters((_) => ({
      nombre: undefined,
    }));

    if (setPagination)
      setPagination((oldPagination) => ({ ...oldPagination, page: 1 }));
  }

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.nombre) count++;

    return count;
  };

  return {
    filters,
    handleChangeFilters,
    handleResetFilters,
    getActiveFiltersCount,
  };
}
