import React from "react";
import { getAboutInfo } from "@/lib/services/portfolio-info";
import HomeAboutSection from "./home-about-section";

export default async function HomeAboutSectionContainer() {
  const res = await getAboutInfo();
  if (!res.data || res.error) {
    console.log(res.error);
    return <div>Problemas en la carga de los datos personales</div>;
  }

  const aboutInfo = res.data;
  return <HomeAboutSection aboutInfo={aboutInfo} />;
}
