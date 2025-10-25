import HomeContactSection from "./components/home-contact-section/home-contact-section";
import { ReactNode, Suspense } from "react";
import { CardSkeletonGroup } from "@/components/card-skeleton-group/card-skeleton-group";

interface Props {
  homeProjectsSection: ReactNode;
  homeExperienceSection: ReactNode;
  homeSkillsSection: ReactNode;
  homeCertificationsSection: ReactNode;
  homeBlogsSection: ReactNode;
  homeHeroSection: ReactNode;
  homeAboutSection: ReactNode;
}

export default function HomeContainer({
  homeProjectsSection,
  homeExperienceSection,
  homeSkillsSection,
  homeCertificationsSection,
  homeBlogsSection,
  homeHeroSection,
  homeAboutSection,
}: Props) {
  return (
    <div className="flex flex-col bg-background">
      {/* Hero Section */}
      <Suspense
        fallback={<CardSkeletonGroup containerClassName="w-full" count={1} />}
      >
        {homeHeroSection}
      </Suspense>

      {/* About Section */}
      <Suspense
        fallback={<CardSkeletonGroup containerClassName="w-full" count={1} />}
      >
        {homeAboutSection}
      </Suspense>

      {/* Projects Section */}
      {homeProjectsSection}

      {/* Experience Section */}
      {homeExperienceSection}

      {/* Skills Section */}
      {homeSkillsSection}

      {/* Education Section */}
      {homeCertificationsSection}

      {/* Blog Section (Optional) */}
      {homeBlogsSection}

      {/* Contact Section */}
      <HomeContactSection />
    </div>
  );
}
