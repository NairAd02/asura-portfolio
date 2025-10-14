import HomeHeroSection from "./components/home-hero-section/home-hero-section";
import HomeAboutSection from "./components/home-about-section/home-about-section";
import HomeSkillsSection from "./components/home-skills-section/home-skills-section";
import HomeEducationAndCertificationsSection from "./components/home-education-and-certifications-section/home-education-and-certifications-section";
import HomeBlogsSection from "./components/home-blogs-section/home-blogs-section";
import HomeContactSection from "./components/home-contact-section/home-contact-section";
import { ReactNode } from "react";

interface Props {
  homeProjectsSection: ReactNode;
  homeExperienceSection: ReactNode;
}

export default function HomeContainer({
  homeProjectsSection,
  homeExperienceSection,
}: Props) {
  return (
    <div className="flex flex-col bg-background">
      {/* Hero Section */}
      <HomeHeroSection />

      {/* About Section */}
      <HomeAboutSection />

      {/* Projects Section */}
      {homeProjectsSection}

      {/* Experience Section */}
      {homeExperienceSection}

      {/* Skills Section */}
      <HomeSkillsSection />

      {/* Education Section */}
      <HomeEducationAndCertificationsSection />

      {/* Blog Section (Optional) */}
      <HomeBlogsSection />

      {/* Contact Section */}
      <HomeContactSection />
    </div>
  );
}
