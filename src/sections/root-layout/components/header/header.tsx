import AppLogo from "@/components/app-logo/app-logo";
import NavigationComponent from "@/components/navigation-component/navigation-component";
import React from "react";
import MusicToggleButton from "@/components/music-toggle-button/music-toggle-button";
import HeaderNavContainer from "./header-nav/header-nav-container";

export default function Header() {
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
          <HeaderNavContainer />
        </div>
      </nav>
    </header>
  );
}
