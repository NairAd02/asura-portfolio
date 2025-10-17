"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import useBlogsFilters from "./hooks/use-blogs-filters";
import BlogsFilters from "./blogs-filters";
import { ExpandingComponent } from "@/components/ui/expanding-component";
import BlogsActiveFilters from "./components/blogs-active-filters/blogs-active-filters";
import { useBreakpoint } from "@/hooks/screen/use-breakpoint";
import SheetContainer from "@/components/ui/sheet-container";

export default function BlogsFiltersContainer() {
  const breakpoint = useBreakpoint();
  const {
    filters,
    getActiveFiltersCount,
    handleChangeFilters,
    handleResetFilters,
  } = useBlogsFilters({ useCache: true });

  const activeFiltersCount = getActiveFiltersCount();
  return (
    <div className="flex flex-col gap-4">
      {breakpoint === "sm" || breakpoint === "xs" || breakpoint === "md" ? (
        <div className="flex gap-2">
          {" "}
          <SheetContainer
            title="Filtros de Blogs"
            trigger={
              <Button className="flex items-center gap-2">
                <SlidersHorizontal /> Filtros
              </Button>
            }
          >
            <BlogsFilters
              filters={filters}
              handleChangeFilters={handleChangeFilters}
            />
          </SheetContainer>{" "}
        </div>
      ) : (
        <ExpandingComponent
          trigger={
            <Button className="flex items-center gap-2">
              <SlidersHorizontal /> Filtros
            </Button>
          }
        >
          <BlogsFilters
            filters={filters}
            handleChangeFilters={handleChangeFilters}
          />
        </ExpandingComponent>
      )}
      {getActiveFiltersCount() > 0 && (
        <BlogsActiveFilters
          filters={filters}
          activeFiltersCount={activeFiltersCount}
          handleChangeFilters={handleChangeFilters}
          handleResetFilters={handleResetFilters}
        />
      )}
    </div>
  );
}
