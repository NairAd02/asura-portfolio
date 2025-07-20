import SkillGroupCard from "@/components/skill-group-card/skill-group-card";
import { SkillGroup } from "@/lib/types/skill-group";
import React from "react";

const skillGroups: SkillGroup[] = [
  {
    title: "Lenguajes de Programación",
    color: "#4B5563",
    skills: [
      {
        name: "TypeScript",
        icon: "typescript",
        level: { level: "advanced", color: "#3178C6" },
      },
      {
        name: "JavaScript",
        icon: "javascript",
        level: { level: "advanced", color: "#F7DF1E" },
      },
      {
        name: "Python",
        icon: "python",
        level: { level: "intermediate", color: "#3776AB" },
      },
      {
        name: "Java",
        icon: "java",
        level: { level: "intermediate", color: "#007396" },
      },
      {
        name: "Go",
        icon: "go",
        level: { level: "beginner", color: "#00ADD8" },
      },
    ],
  },
  {
    title: "Frontend Development",
    color: "#3B82F6",
    skills: [
      {
        name: "React",
        icon: "react",
        level: { level: "advanced", color: "#61DAFB" },
      },
      {
        name: "Angular",
        icon: "angular",
        level: { level: "intermediate", color: "#DD0031" },
      },
      {
        name: "Vue.js",
        icon: "vue",
        level: { level: "intermediate", color: "#4FC08D" },
      },
      {
        name: "Next.js",
        icon: "nextjs",
        level: { level: "advanced", color: "#000000" },
      },
      {
        name: "Tailwind CSS",
        icon: "tailwindcss",
        level: { level: "advanced", color: "#06B6D4" },
      },
    ],
  },
  {
    title: "Backend Development",
    color: "#10B981",
    skills: [
      {
        name: "Node.js",
        icon: "nodejs",
        level: { level: "advanced", color: "#339933" },
      },
      {
        name: "Express",
        icon: "express",
        level: { level: "advanced", color: "#000000" },
      },
      {
        name: "NestJS",
        icon: "nestjs",
        level: { level: "intermediate", color: "#E0234E" },
      },
      {
        name: "Django",
        icon: "django",
        level: { level: "beginner", color: "#092E20" },
      },
      {
        name: "Spring Boot",
        icon: "spring",
        level: { level: "intermediate", color: "#6DB33F" },
      },
    ],
  },
  {
    title: "Bases de Datos",
    color: "#8B5CF6",
    skills: [
      {
        name: "MongoDB",
        icon: "mongodb",
        level: { level: "advanced", color: "#47A248" },
      },
      {
        name: "PostgreSQL",
        icon: "postgresql",
        level: { level: "intermediate", color: "#336791" },
      },
      {
        name: "MySQL",
        icon: "mysql",
        level: { level: "intermediate", color: "#4479A1" },
      },
      {
        name: "Firebase",
        icon: "firebase",
        level: { level: "intermediate", color: "#FFCA28" },
      },
      {
        name: "Redis",
        icon: "redis",
        level: { level: "beginner", color: "#DC382D" },
      },
    ],
  },
  {
    title: "DevOps & Cloud",
    color: "#EC4899",
    skills: [
      {
        name: "Docker",
        icon: "docker",
        level: { level: "intermediate", color: "#2496ED" },
      },
      {
        name: "Kubernetes",
        icon: "kubernetes",
        level: { level: "beginner", color: "#326CE5" },
      },
      {
        name: "AWS",
        icon: "aws",
        level: { level: "intermediate", color: "#FF9900" },
      },
      {
        name: "Azure",
        icon: "azure",
        level: { level: "beginner", color: "#0089D6" },
      },
      {
        name: "CI/CD Pipelines",
        level: { level: "intermediate", color: "#555555" },
      },
    ],
  },
  {
    title: "Otras Habilidades",
    color: "#F59E0B",
    skills: [
      {
        name: "Git",
        icon: "git",
        level: { level: "advanced", color: "#F05032" },
      },
      {
        name: "GraphQL",
        icon: "graphql",
        level: { level: "intermediate", color: "#E10098" },
      },
      {
        name: "RESTful APIs",
        level: { level: "advanced", color: "#555555" },
      },
      {
        name: "Microservicios",
        level: { level: "intermediate", color: "#555555" },
      },
      {
        name: "Testing (Jest, Cypress)",
        level: { level: "intermediate", color: "#555555" },
      },
    ],
  },
];

export default function HomeSkillsSection() {
  return (
    <section id="habilidades" className="py-24 bg-background">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl text-primary font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Tecnologías y Habilidades
            </h2>
            <p className="max-w-[900px] text-black font-semibold md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Las herramientas y tecnologías que domino para crear soluciones
              excepcionales.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((skillGroup, index) => (
              <SkillGroupCard key={index} skillGroup={skillGroup} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
