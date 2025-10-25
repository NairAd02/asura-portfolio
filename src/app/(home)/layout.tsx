import HomeContainer from "@/sections/home/home-container";
import React, { ReactNode } from "react";

interface Props {
  projects: ReactNode;
  experiences: ReactNode;
  skills: ReactNode;
  certifications: ReactNode;
  blogs: ReactNode;
  hero: ReactNode;
  about: ReactNode;
}

export default function HomeLayout({
  projects: homeProjectsSection,
  experiences: homeExperienceSection,
  skills: homeSkillsSection,
  certifications: homeCertificationsSection,
  blogs: homeBlogsSection,
  hero: homeHeroSection,
  about: homeAboutSection,
}: Props) {
  return (
    <HomeContainer
      homeHeroSection={homeHeroSection}
      homeProjectsSection={homeProjectsSection}
      homeExperienceSection={homeExperienceSection}
      homeSkillsSection={homeSkillsSection}
      homeCertificationsSection={homeCertificationsSection}
      homeBlogsSection={homeBlogsSection}
      homeAboutSection={homeAboutSection}
    />
  );
}
