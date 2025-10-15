import HomeHeroSection from "./components/home-hero-section/home-hero-section";
import HomeAboutSection from "./components/home-about-section/home-about-section";
import HomeBlogsSection from "./components/home-blogs-section/home-blogs-section";
import HomeContactSection from "./components/home-contact-section/home-contact-section";
import { ReactNode } from "react";

interface Props {
  homeProjectsSection: ReactNode;
  homeExperienceSection: ReactNode;
  homeSkillsSection: ReactNode;
  homeCertificationsSection: ReactNode;
}

export default function HomeContainer({
  homeProjectsSection,
  homeExperienceSection,
  homeSkillsSection,
  homeCertificationsSection,
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
      {homeSkillsSection}

      {/* Education Section */}
      {homeCertificationsSection}

      {/* Blog Section (Optional) */}
      <HomeBlogsSection />

      {/* Contact Section */}
      <HomeContactSection />
    </div>
  );
}
