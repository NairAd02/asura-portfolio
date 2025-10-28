import { ReactNode, Suspense } from "react";
import { CardSkeletonGroup } from "@/components/card-skeleton-group/card-skeleton-group";

interface Props {
  homeProjectsSection: ReactNode;
  homeExperienceSection: ReactNode;
  homeSkillsSection: ReactNode;
  homeCertificationsSection: ReactNode;
  homeHeroSection: ReactNode;
  homeAboutSection: ReactNode;
  homeContactSection: ReactNode;
}

export default function HomeContainer({
  homeProjectsSection,
  homeExperienceSection,
  homeSkillsSection,
  homeCertificationsSection,
  homeHeroSection,
  homeAboutSection,
  homeContactSection,
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
      <Suspense
        fallback={<CardSkeletonGroup containerClassName="w-full" count={1} />}
      >
        {homeProjectsSection}
      </Suspense>

      {/* Experience Section */}
      <Suspense
        fallback={<CardSkeletonGroup containerClassName="w-full" count={1} />}
      >
        {homeExperienceSection}
      </Suspense>

      {/* Skills Section */}
      <Suspense
        fallback={<CardSkeletonGroup containerClassName="w-full" count={1} />}
      >
        {homeSkillsSection}
      </Suspense>

      {/* Education Section */}
      <Suspense
        fallback={<CardSkeletonGroup containerClassName="w-full" count={1} />}
      >
        {homeCertificationsSection}
      </Suspense>

      {/* Contact Section */}
      <Suspense
        fallback={<CardSkeletonGroup containerClassName="w-full" count={1} />}
      >
        {homeContactSection}
      </Suspense>
    </div>
  );
}
