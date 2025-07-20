"use client";
import AppLogo from "@/components/app-logo/app-logo";
import NavigationComponent from "@/components/navigation-component/navigation-component";
import PopoverContainer from "@/components/ui/popover-container";
import React from "react";
import HeaderNav from "./header-nav/header-nav";
import { useBreakpoint } from "@/hooks/screen/use-breakpoint";
import { AlignCenter } from "lucide-react";
import MusicToggleButton from "@/components/music-toggle-button/music-toggle-button";

export default function Header() {
  const breakpoint = useBreakpoint();
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <nav>
        <div className="flex px-4 h-14 items-center justify-between">
          <div className="flex items-center gap-2">
          <NavigationComponent href="/">
            <div className="flex items-center gap-4">
              {" "}
              <AppLogo />
              <span className="font-bold">Asura-Portfolio</span>
            </div>
          </NavigationComponent>
          <MusicToggleButton />
          </div>
          {breakpoint === "xs" || breakpoint === "sm" || breakpoint === "md" || breakpoint === "lg" ? (
            <PopoverContainer trigger={<AlignCenter />}>
              <HeaderNav />
            </PopoverContainer>
          ) : (
            <HeaderNav />
          )}
        </div>
      </nav>
    </header>
  );
}
