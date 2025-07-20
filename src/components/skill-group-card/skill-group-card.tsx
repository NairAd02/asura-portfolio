import { SkillGroup } from "@/lib/types/skill-groups";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AvatarContainer from "../ui/avatar-container";
import { principalPlaceHolder } from "@/lib/place-holders";
import { Badge } from "../ui/badge";

interface Props {
  skillGroup: SkillGroup;
}

export default function SkillGroupCard({ skillGroup }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AvatarContainer
            image={skillGroup.icon || principalPlaceHolder}
            fallback="s-g"
          />
          {skillGroup.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {skillGroup.skills.map((skill, index) => (
            <div key={index} className="flex justify-between">
              <span className="text-sm">{skill.name}</span>
              <Badge variant="default">{skill.level.level}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
