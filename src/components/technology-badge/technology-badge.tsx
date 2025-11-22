import { Technology } from "@/lib/types/technologies";
import React from "react";
import { Badge } from "../ui/badge";
import AvatarContainer from "../ui/avatar-container";
import { Skeleton } from "../ui/skeleton";

interface Props {
  technology: Technology;
}

export default function TechnologyBadge({ technology }: Props) {
  return (
    <Badge
      variant="outline"
      className="px-2 text-xs font-lora font-semibold py-1"
    >
      {technology.icon && (
        <AvatarContainer
          className="h-4 w-4"
          image={technology.icon}
          fallback={
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-4 rounded-full" />
            </div>
          }
        />
      )}
      {technology.name}
    </Badge>
  );
}
