import { Skill } from "./skills";

export interface SkillGroup {
  id: string;
  name: string;
  icon?: string;
  skills: Skill[];
}
