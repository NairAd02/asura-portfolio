import HomeHeroSection from "./components/home-hero-section/home-hero-section";
import HomeAboutSection from "./components/home-about-section/home-about-section";
import HomeProyectsSection from "./components/home-proyects-section/home-proyects-section";
import HomeExperienceSection from "./components/home-experience-section/home-experience-section";
import HomeSkillsSection from "./components/home-skills-section/home-skills-section";
import HomeEducationAndCertificationsSection from "./components/home-education-and-certifications-section/home-education-and-certifications-section";
import HomeBlogsSection from "./components/home-blogs-section/home-blogs-section";
import HomeContactSection from "./components/home-contact-section/home-contact-section";

export default function HomeContainer() {
  return (
    <div className="flex flex-col bg-background">
      {/* Hero Section */}
      <HomeHeroSection />

      {/* About Section */}
      <HomeAboutSection />

      {/* Projects Section */}
      <HomeProyectsSection />

      {/* Experience Section */}
      <HomeExperienceSection />

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
