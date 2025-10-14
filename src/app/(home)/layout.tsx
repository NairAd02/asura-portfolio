import HomeContainer from "@/sections/home/home-container";
import React, { ReactNode } from "react";

interface Props {
  projects: ReactNode;
  experiences: ReactNode;
}

export default function HomeLayout({
  projects: homeProjectsSection,
  experiences: homeExperienceSection,
}: Props) {
  return (
    <HomeContainer
      homeProjectsSection={homeProjectsSection}
      homeExperienceSection={homeExperienceSection}
    />
  );
}
