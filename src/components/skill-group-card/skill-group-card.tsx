import { SkillGroup } from "@/lib/types/skill-groups";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AvatarContainer from "../ui/avatar-container";
import { principalPlaceHolder } from "@/lib/place-holders";
import { Badge } from "../ui/badge";
import { TrendingUp } from "lucide-react";

import { Skeleton } from "../ui/skeleton";
import { levelMap } from "@/lib/types/mastered-technologies";

interface Props {
  skillGroup: SkillGroup;
}

export default function SkillGroupCard({ skillGroup }: Props) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-t-4 border-t-primary/40 hover:border-t-primary">
      <CardHeader>
        <CardTitle className="flex justify-between group-hover:text-primary font-bold items-center gap-2">
          <div className="flex items-center gap-2">
            <AvatarContainer
              image={skillGroup.icon || principalPlaceHolder}
              fallback="s-g"
            />
            {skillGroup.name}
          </div>
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <TrendingUp className="h-4 w-4 text-primary" />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {skillGroup.masteredTechnologies.map((masteredTech, index) => (
            <div key={index} className="flex justify-between">
              <div className="flex items-center gap-2">
                <AvatarContainer
                  className="h-4 w-4"
                  image={masteredTech.technology.icon}
                  fallback={
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-10 w-10 rounded-full" />
                    </div>
                  }
                />
                <span className="text-sm font-semibold">
                  {masteredTech.technology.name}
                </span>
              </div>
              <Badge variant="default">
                {levelMap.get(masteredTech.level)?.name}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
