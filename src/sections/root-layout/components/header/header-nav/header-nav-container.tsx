"use client";
import PopoverContainer from "@/components/ui/popover-container";
import { useBreakpoint } from "@/hooks/screen/use-breakpoint";
import { AlignCenter } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import HeaderNav from "./header-nav";
import { homeSections, projectSections } from "./data/header-sections";

export default function HeaderNavContainer() {
  const pathname = usePathname();
  const breakpoint = useBreakpoint();
  return (
    <div>
      {breakpoint === "xs" ||
      breakpoint === "sm" ||
      breakpoint === "md" ||
      breakpoint === "lg" ? (
        <PopoverContainer trigger={<AlignCenter />}>
          <HeaderNav
            sections={
              pathname.includes("project") ? projectSections : homeSections
            }
          />
        </PopoverContainer>
      ) : (
        <HeaderNav
          sections={
            pathname.includes("project") ? projectSections : homeSections
          }
        />
      )}
    </div>
  );
}
