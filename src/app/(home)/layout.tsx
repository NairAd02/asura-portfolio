import HomeContainer from "@/sections/home/home-container";
import React, { ReactNode } from "react";

interface Props {
  projects: ReactNode;
  experiences: ReactNode;
  skills: ReactNode;
  certifications: ReactNode;
  hero: ReactNode;
  about: ReactNode;
  contact: ReactNode;
}

export default function HomeLayout({
  projects: homeProjectsSection,
  experiences: homeExperienceSection,
  skills: homeSkillsSection,
  certifications: homeCertificationsSection,
  hero: homeHeroSection,
  about: homeAboutSection,
  contact: homeContactSection,
}: Props) {
  return (
    <HomeContainer
      homeHeroSection={homeHeroSection}
      homeProjectsSection={homeProjectsSection}
      homeExperienceSection={homeExperienceSection}
      homeSkillsSection={homeSkillsSection}
      homeCertificationsSection={homeCertificationsSection}
      homeAboutSection={homeAboutSection}
      homeContactSection={homeContactSection}
    />
  );
}
