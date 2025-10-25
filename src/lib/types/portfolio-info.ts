export interface PortfolioInfo {
  id: string;
  contact_name: string;
  contact_image?: string;
  introductory_phrase: string;
  about_text: string;
  feature_project_text: string;
  work_experience_text: string;
  technologies_and_skills_text: string;
  education_and_certifications_text: string;
  blog_and_post_text: string;
  contact_text: string;
  contact_email: string;
}

export interface PersonalInformationInfo {
  id: string;
  contact_name: string;
  contact_image?: string;
  introductory_phrase: string;
}

export interface AboutInfo {
  id: string;
  about_text: string;
}

export interface ProjectsSectionInfo {
  id: string;
  feature_project_text: string;
}

export interface ExperiencesSectionInfo {
  id: string;
  work_experience_text: string;
}
