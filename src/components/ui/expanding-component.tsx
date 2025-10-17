"use client";

import type React from "react";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right";

interface Props {
  trigger: React.ReactNode;
  children: React.ReactNode;
  direction?: Direction;
  className?: string;
  contentClassName?: string;
}

export function ExpandingComponent({
  trigger,
  children,
  direction = "right",
  className,
  contentClassName,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const getContainerClasses = () => {
    const baseClasses = "inline-flex items-center";

    switch (direction) {
      case "up":
        return cn(baseClasses, "flex-col-reverse");
      case "down":
        return cn(baseClasses, "flex-col");
      case "left":
        return cn(baseClasses, "flex-row-reverse");
      case "right":
        return cn(baseClasses, "flex-row");
      default:
        return cn(baseClasses, "flex-row");
    }
  };

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-300 ease-out overflow-hidden";

    if (!isOpen) {
      return cn(baseClasses, "opacity-0 scale-95");
    }

    return cn(baseClasses, "opacity-100 scale-100");
  };

  const getSpacingClasses = () => {
    if (!isOpen) return "";

    switch (direction) {
      case "up":
        return "mb-2";
      case "down":
        return "mt-2";
      case "left":
        return "mr-2";
      case "right":
        return "ml-2";
      default:
        return "ml-2";
    }
  };

  return (
    <div className={cn(getContainerClasses(), className)}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex-shrink-0"
      >
        {trigger}
      </div>

      <div
        className={cn(
          getAnimationClasses(),
          getSpacingClasses(),
          contentClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
