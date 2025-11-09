import { AboutInfo } from "@/lib/types/portfolio-info";
import React from "react";

interface Props {
  aboutInfo: AboutInfo;
}

export default function HomeAboutSection({ aboutInfo }: Props) {
  return (
    <section id="acerca" className="py-24 bg-muted">
      <div className="px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl text-primary font-bold font-cormorant sm:text-4xl md:text-5xl">
            Sobre Mí
          </h2>
          <p className="mt-4 text-black font-lora  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {aboutInfo.about_text}
          </p>
        </div>
      </div>
    </section>
  );
}
