import HomeContainer from "@/sections/home/home-container";
import React, { ReactNode } from "react";

interface Props {
  projects: ReactNode;
  experiences: ReactNode;
  skills: ReactNode;
  certifications: ReactNode;
  blogs: ReactNode;
}

export default function HomeLayout({
  projects: homeProjectsSection,
  experiences: homeExperienceSection,
  skills: homeSkillsSection,
  certifications: homeCertificationsSection,
  blogs: homeBlogsSection,
}: Props) {
  return (
    <HomeContainer
      homeProjectsSection={homeProjectsSection}
      homeExperienceSection={homeExperienceSection}
      homeSkillsSection={homeSkillsSection}
      homeCertificationsSection={homeCertificationsSection}
      homeBlogsSection={homeBlogsSection}
    />
  );
}
