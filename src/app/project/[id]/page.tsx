import { getProjectMetaDataById } from "@/lib/services/projects";
import ProjectDetailsContainer from "@/sections/projects/details/project-details-container";
import { Metadata } from "next";
import React from "react";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const perfumeId = (await params).id;
  const res = await getProjectMetaDataById(perfumeId);

  if (!res.data || res.error)
    throw new Error(
      "Error al cargar al información de la metada data proyecto"
    );

  const project = res.data;
  return {
    title: project ? project.name : "Proyecto no encontrado",
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      images: [project.mainImage],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description: project.description,
      images: [project.mainImage],
    },
  };
}

export default async function ProjectDetailsPage({ params }: Props) {
  const { id } = await params;

  return <ProjectDetailsContainer id={id} />;
}
