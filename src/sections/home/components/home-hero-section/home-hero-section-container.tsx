import React from "react";
import HomeHeroSection from "./home-hero-section";
import { getPersonalInformationInfo } from "@/lib/services/portfolio-info";

export default async function HomeHeroSectionContainer() {
  const res = await getPersonalInformationInfo();
  if (!res.data || res.error) {
    console.log(res.error);
    return <div>Problemas en la carga de los datos personales</div>;
  }

  const personalInformationInfo = res.data;
  return <HomeHeroSection personalInformationInfo={personalInformationInfo} />;
}
