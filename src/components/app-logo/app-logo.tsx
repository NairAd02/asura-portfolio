import React from "react";
import AvatarContainer from "../ui/avatar-container";
import { Skeleton } from "../ui/skeleton";

export default function AppLogo() {
  return (
    <AvatarContainer
      image="images/logo-app.jpg"
      fallback={
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      }
    />
  );
}
