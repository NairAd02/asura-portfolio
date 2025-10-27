import SkillGroupCard from "@/components/skill-group-card/skill-group-card";
import { SkillGroup } from "@/lib/types/skill-groups";
import React from "react";

interface Props {
  skillGroups: SkillGroup[];
}

export default function HomeSkillsSectionList({ skillGroups }: Props) {
  return (
    <div className="mx-auto max-w-5xl py-12">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
        {skillGroups.map((skillGroup, index) => (
          <SkillGroupCard key={index} skillGroup={skillGroup} />
        ))}
      </div>
    </div>
  );
}
