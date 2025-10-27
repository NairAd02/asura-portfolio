import SkillGroupCard from "@/components/skill-group-card/skill-group-card";
import { SkillGroup } from "@/lib/types/skill-groups";
import React from "react";

interface Props {
  skillGroups: SkillGroup[];
}

export default function HomeSkillsSectionList({ skillGroups }: Props) {
  const orderedSkillGroups = [...skillGroups].sort(
    (a, b) => b.masteredTechnologies.length - a.masteredTechnologies.length
  );

  return (
    <div className="mx-auto max-w-5xl py-12">
      {/* Masonry layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {orderedSkillGroups.map((skillGroup, index) => (
          <div key={index} className="break-inside-avoid">
            <SkillGroupCard skillGroup={skillGroup} />
          </div>
        ))}
      </div>
    </div>
  );
}
