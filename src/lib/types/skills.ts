export interface Skill {
  name: string;
  icon?: string;
  level: SkillLevel;
}

export interface SkillLevel {
  level: string;
  color: string;
}
