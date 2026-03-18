import { Technology } from "./technologies";

export enum LevelEnum {
  BASIC = "basic",
  ADVANCED = "advanced",
  INTERMEDIATE = "intermediate",
}

export const levelMap: Map<
  LevelEnum,
  {
    name: string;
    color:
      | "default"
      | "primary"
      | "secondary"
      | "error"
      | "info"
      | "success"
      | "warning";
  }
> = new Map([
  [LevelEnum.ADVANCED, { name: "Advanced", color: "secondary" }],
  [LevelEnum.INTERMEDIATE, { name: "Intermediate", color: "secondary" }],
  [LevelEnum.BASIC, { name: "Basic", color: "secondary" }],
]);

// Function to get the level color
export const getLevelColor = (level: LevelEnum): string => {
  switch (level) {
    case LevelEnum.BASIC:
      return "bg-red-100 text-red-800 border-red-200";
    case LevelEnum.INTERMEDIATE:
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    default:
      return "bg-primary text-white";
  }
};

// Function to get the number of stars based on level
export const getLevelStars = (level: LevelEnum): number => {
  switch (level) {
    case LevelEnum.BASIC:
      return 1;
    case LevelEnum.INTERMEDIATE:
      return 2;
    default:
      return 3;
  }
};

// Function to get the level text
export const getLevelText = (level: LevelEnum): string => {
  switch (level) {
    case LevelEnum.BASIC:
      return "Basic";
    case LevelEnum.INTERMEDIATE:
      return "Intermediate";
    default:
      return "Advanced";
  }
};

export interface MasteredTechnology {
  technology: Technology;
  level: LevelEnum;
}
