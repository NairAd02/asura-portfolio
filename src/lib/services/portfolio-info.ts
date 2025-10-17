"use server";

import { createClient } from "../supabase/server";
import { PersonalInformationInfo } from "../types/portfolio-info";
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
