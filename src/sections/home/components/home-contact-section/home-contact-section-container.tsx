import React from "react";
import { getContactSectionInfo } from "@/lib/services/portfolio-info";

import HomeContactSection from "./home-contact-section";

export default async function HomeContactSectionContainer() {
  const res = await getContactSectionInfo();
  if (!res.data || res.error) {
    console.log(res.error);
    return <div>Problemas en la carga de la sección de contacto</div>;
  }

  const contactSectionInfo = res.data;
  return <HomeContactSection contactSectionInfo={contactSectionInfo} />;
}
