import HomeContainer from "@/sections/home/home-container";
import React, { ReactNode } from "react";

interface Props {
  projects: ReactNode;
  experiences: ReactNode;
  skills: ReactNode;
  certifications: ReactNode;
  blogs: ReactNode;
  hero: ReactNode;
}

export default function HomeLayout({
  projects: homeProjectsSection,
  experiences: homeExperienceSection,
  skills: homeSkillsSection,
  certifications: homeCertificationsSection,
  blogs: homeBlogsSection,
  hero: homeHeroSection,
}: Props) {
  return (
    <HomeContainer
      homeHeroSection={homeHeroSection}
      homeProjectsSection={homeProjectsSection}
      homeExperienceSection={homeExperienceSection}
      homeSkillsSection={homeSkillsSection}
      homeCertificationsSection={homeCertificationsSection}
      homeBlogsSection={homeBlogsSection}
    />
  );
}
