import ExperienceCard from "@/components/experience-card/experience-card";
import { Experience } from "@/lib/types/experiences";
import React from "react";

interface Props {
  experiences: Experience[];
}

export default function HomeExperienceSectionList({ experiences }: Props) {
  return (
    <div className="mx-auto max-w-6xl py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
}
