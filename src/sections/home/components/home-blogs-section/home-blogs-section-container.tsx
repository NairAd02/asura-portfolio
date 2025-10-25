import React from "react";
import { getBlogsSectionInfo } from "@/lib/services/portfolio-info";

import HomeBlogsSection from "./home-blogs-section";

export default async function HomeBlogsSectionContainer() {
  const res = await getBlogsSectionInfo();
  if (!res.data || res.error) {
    console.log(res.error);
    return <div>Problemas en la carga de la sección de los blogs</div>;
  }

  const blogsSectionInfo = res.data;
  return <HomeBlogsSection blogsSectionInfo={blogsSectionInfo} />;
}
