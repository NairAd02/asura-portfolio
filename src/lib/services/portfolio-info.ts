"use server";

import { createClient } from "../supabase/server";
import {
  AboutInfo,
  BlogsSectionInfo,
  CertificationsSectionInfo,
  ContactSectionInfo,
  ExperiencesSectionInfo,
  PersonalInformationInfo,
  ProjectsSectionInfo,
  SkillsSectionInfo,
} from "../types/portfolio-info";
import { getImageUrlOrThrow } from "./supabase-storage";

export async function getPersonalInformationInfo() {
  const supabase = await createClient();

  const { data: portfolio, error: portfolioError } = await supabase
    .from("portfolio")
    .select("id, contact_name, contact_image, introductory_phrase")
    .eq("id", process.env.NEXT_PUBLIC_PORTFOLIO_ID)
    .single();

  if (portfolioError) return { data: null, error: portfolioError };

  const portfolioEntity = portfolio as PersonalInformationInfo;

  return {
    data: {
      ...portfolioEntity,
      contact_image: portfolioEntity.contact_image
        ? await getImageUrlOrThrow(supabase, portfolioEntity.contact_image)
        : undefined,
    } as PersonalInformationInfo,
  };
}

export async function getAboutInfo() {
  const supabase = await createClient();

  const { data: portfolio, error: portfolioError } = await supabase
    .from("portfolio")
    .select("id, about_text")
    .eq("id", process.env.NEXT_PUBLIC_PORTFOLIO_ID)
    .single();

  if (portfolioError) return { data: null, error: portfolioError };

  const portfolioEntity = portfolio as AboutInfo;

  return {
    data: {
      ...portfolioEntity,
    } as AboutInfo,
  };
}

export async function getProjectsSectionInfo() {
  const supabase = await createClient();

  const { data: portfolio, error: portfolioError } = await supabase
    .from("portfolio")
    .select("id, feature_project_text")
    .eq("id", process.env.NEXT_PUBLIC_PORTFOLIO_ID)
    .single();

  if (portfolioError) return { data: null, error: portfolioError };

  const portfolioEntity = portfolio as ProjectsSectionInfo;

  return {
    data: {
      ...portfolioEntity,
    } as ProjectsSectionInfo,
  };
}

export async function getExperiencesSectionInfo() {
  const supabase = await createClient();

  const { data: portfolio, error: portfolioError } = await supabase
    .from("portfolio")
    .select("id, work_experience_text")
    .eq("id", process.env.NEXT_PUBLIC_PORTFOLIO_ID)
    .single();

  if (portfolioError) return { data: null, error: portfolioError };

  const portfolioEntity = portfolio as ExperiencesSectionInfo;

  return {
    data: {
      ...portfolioEntity,
    } as ExperiencesSectionInfo,
  };
}

export async function getSkillsSectionInfo() {
  const supabase = await createClient();

  const { data: portfolio, error: portfolioError } = await supabase
    .from("portfolio")
    .select("id, technologies_and_skills_text")
    .eq("id", process.env.NEXT_PUBLIC_PORTFOLIO_ID)
    .single();

  if (portfolioError) return { data: null, error: portfolioError };

  const portfolioEntity = portfolio as SkillsSectionInfo;

  return {
    data: {
      ...portfolioEntity,
    } as SkillsSectionInfo,
  };
}

export async function getCertificationsSectionInfo() {
  const supabase = await createClient();

  const { data: portfolio, error: portfolioError } = await supabase
    .from("portfolio")
    .select("id, education_and_certifications_text")
    .eq("id", process.env.NEXT_PUBLIC_PORTFOLIO_ID)
    .single();

  if (portfolioError) return { data: null, error: portfolioError };

  const portfolioEntity = portfolio as CertificationsSectionInfo;

  return {
    data: {
      ...portfolioEntity,
    } as CertificationsSectionInfo,
  };
}

export async function getBlogsSectionInfo() {
  const supabase = await createClient();

  const { data: portfolio, error: portfolioError } = await supabase
    .from("portfolio")
    .select("id, blog_and_post_text")
    .eq("id", process.env.NEXT_PUBLIC_PORTFOLIO_ID)
    .single();

  if (portfolioError) return { data: null, error: portfolioError };

  const portfolioEntity = portfolio as BlogsSectionInfo;

  return {
    data: {
      ...portfolioEntity,
    } as BlogsSectionInfo,
  };
}

export async function getContactSectionInfo() {
  const supabase = await createClient();

  const { data: portfolio, error: portfolioError } = await supabase
    .from("portfolio")
    .select("id, contact_text, contact_email, contact_phone, location, cv_doc")
    .eq("id", process.env.NEXT_PUBLIC_PORTFOLIO_ID)
    .single();

  if (portfolioError) return { data: null, error: portfolioError };

  const portfolioEntity = portfolio as ContactSectionInfo;

  return {
    data: {
      ...portfolioEntity,
      cv_doc: portfolioEntity.cv_doc
        ? await getImageUrlOrThrow(supabase, portfolioEntity.cv_doc)
        : undefined,
    } as ContactSectionInfo,
  };
}
