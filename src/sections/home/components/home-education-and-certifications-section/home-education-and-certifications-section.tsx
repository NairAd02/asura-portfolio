import CertificationGroupCard from "@/components/certification-group-card/certification-group-card";
import { CertificationGroup } from "@/lib/types/certification-groups";
import React from "react";

const certificationGroups: CertificationGroup[] = [
  {
    title: "Certificaciones Técnicas",
    certifications: [
      {
        title: "AWS Certified Solutions Architect - Associate",
        institution: "Amazon Web Services",
        startDate: "2019-01",
        endDate: "2019-12",
      },
      {
        title: "Google Professional Data Engineer",
        institution: "Google Cloud",
        startDate: "2019-01",
        endDate: "2019-12",
      },
      {
        title: "Microsoft Certified: Azure Administrator Associate",
        institution: "Microsoft",
        startDate: "2019-01",
        endDate: "2019-12",
      },
    ],
  },
  {
    title: "Certificaciones Académicas",
    certifications: [
      {
        title: "Especialización en Inteligencia Artificial",
        institution: "Universidad Tecnológica Nacional",
        startDate: "2019-01",
        endDate: "2019-12",
      },
      {
        title: "Diplomado en Ciencia de Datos",
        institution: "Platzi",
        startDate: "2019-01",
        endDate: "2019-12",
      },
    ],
  },
];

export default function HomeEducationAndCertificationsSection() {
  return (
    <section id="educacion" className="py-24 bg-muted/50">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Educación y Certificaciones
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Mi formación académica y certificaciones profesionales.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <div className="space-y-6">
            {certificationGroups.map((certificationGroup, index) => (
              <CertificationGroupCard
                key={index}
                certificationGroup={certificationGroup}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
