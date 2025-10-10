import HomeContainer from "@/sections/home/home-container";
import React, { ReactNode } from "react";

interface Props {
  projects: ReactNode;
}

export default function HomeLayout({ projects: homeProjectsSection }: Props) {
  return <HomeContainer homeProjectsSection={homeProjectsSection} />;
}
