import { Button } from "@/components/ui/button";
import { principalPlaceHolder } from "@/lib/place-holders";
import { PersonalInformationInfo } from "@/lib/types/portfolio-info";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  personalInformationInfo: PersonalInformationInfo;
}

export default function HomeHeroSection({ personalInformationInfo }: Props) {
  return (
    <section id="inicio" className="p-8 bg-background">
      <div className="px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row justify-between gap-8">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {personalInformationInfo.contact_name}
              </h1>
              <p className="max-w-[600px] text-black font-semibold md:text-xl">
                {personalInformationInfo.introductory_phrase}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="#proyectos">Ver Proyectos</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contacto">Contactar</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <Button variant="default" size="icon" asChild>
                <Link href="https://github.com" target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="default" size="icon" asChild>
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="default" size="icon" asChild>
                <Link href="mailto:tu@email.com">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <Image
                src={
                  personalInformationInfo.contact_image || principalPlaceHolder
                }
                alt="Foto profesional"
                width={400}
                height={400}
                className="aspect-square object-cover rounded-full border-4 border-primary/60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
