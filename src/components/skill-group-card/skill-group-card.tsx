"use client";

import type { SkillGroup } from "@/lib/types/skill-groups";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AvatarContainer from "../ui/avatar-container";
import { principalPlaceHolder } from "@/lib/place-holders";
import { Award, TrendingUp, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "../ui/skeleton";
import { SkillsModal } from "./components/skills-modal";
import SkillLevelStars from "./components/skill-level-starts/skill-level-starts";

interface Props {
  skillGroup: SkillGroup;
}

export default function SkillGroupCard({ skillGroup }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="group hover:shadow-lg transition-all duration-300 border-t-4 border-t-primary/40 hover:border-t-primary">
        <CardHeader>
          <CardTitle className="flex justify-between group-hover:text-primary font-bold items-center gap-2">
            <div className="flex items-center font-lora gap-2">
              <AvatarContainer
                image={skillGroup.icon || principalPlaceHolder}
                fallback={
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-8 w-8 rounded-full" />
                  </div>
                }
              />
              {skillGroup.name}
            </div>
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <TrendingUp className="h-4 w-4 text-primary" />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="space-y-2">
            {skillGroup.masteredTechnologies.map((masteredTech, index) => (
              <div key={index} className="flex justify-between">
                <div className="flex items-center gap-2">
                  <AvatarContainer
                    className="h-6 w-6"
                    image={masteredTech.technology.icon}
                    fallback={
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-10 w-10 rounded-full" />
                      </div>
                    }
                  />
                  <span className="text-sm font-lora font-semibold">
                    {masteredTech.technology.name}
                  </span>
                </div>
                <SkillLevelStars level={masteredTech.level} />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <Award className="text-primary size-4" />
              <h4 className="text-sm font-semibold font-lora text-foreground">
                Habilidades Destacadas
              </h4>
            </div>

            <Button
              onClick={() => setIsModalOpen(true)}
              variant="default"
              className="flex items-center gap-2 group/btn cursor-pointer relative"
            >
              <Eye className="w-4 h-4 text-white group-hover/btn:animate-pulse" />
              <span>Ver Detalles</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <SkillsModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        skills={skillGroup.skills}
        groupName={skillGroup.name}
        groupIcon={skillGroup.icon}
      />
    </>
  );
}
