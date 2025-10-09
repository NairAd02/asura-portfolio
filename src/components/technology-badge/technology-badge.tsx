import { Technology } from "@/lib/types/technologies";
import React from "react";
import { Badge } from "../ui/badge";
import AvatarContainer from "../ui/avatar-container";

interface Props {
  technology: Technology;
}

export default function TechnologyBadge({ technology }: Props) {
  return (
    <Badge variant="default" className="px-2 py-1">
      {technology.icon && (
        <AvatarContainer
          className="h-4 w-4"
          image={technology.icon}
          fallback="tech"
        />
      )}
      {technology.name}
    </Badge>
  );
}
