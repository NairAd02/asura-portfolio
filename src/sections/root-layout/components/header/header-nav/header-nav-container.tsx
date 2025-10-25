"use client";
import PopoverContainer from "@/components/ui/popover-container";
import { useBreakpoint } from "@/hooks/screen/use-breakpoint";
import { paths } from "@/lib/routes/path";
import { AlignCenter } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import HeaderNav from "./header-nav";

export default function HeaderNavContainer() {
  const pathname = usePathname();
  const breakpoint = useBreakpoint();
  return (
    <div>
      {" "}
      {pathname === paths.home.root ? (
        breakpoint === "xs" ||
        breakpoint === "sm" ||
        breakpoint === "md" ||
        breakpoint === "lg" ? (
          <PopoverContainer trigger={<AlignCenter />}>
            <HeaderNav />
          </PopoverContainer>
        ) : (
          <HeaderNav />
        )
      ) : (
        <></>
      )}
    </div>
  );
}
