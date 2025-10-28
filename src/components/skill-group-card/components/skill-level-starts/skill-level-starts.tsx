import { getLevelStars, LevelEnum } from "@/lib/types/mastered-technologies";
import { Star } from "lucide-react";
import React from "react";

interface Props {
  level: LevelEnum;
}

export default function SkillLevelStars({ level }: Props) {
  const stars = getLevelStars(level);
  return (
    <div className="flex items-center gap-1">
      {[...Array(3)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < stars
              ? "fill-[#f48c06] text-[#f48c06]"
              : "fill-muted text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
}
