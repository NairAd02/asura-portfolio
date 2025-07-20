import { Skill } from "./skills";

export interface SkillGroup {
  title: string;
  skills: Skill[];
  icon?: string;
  color?: string;
}
