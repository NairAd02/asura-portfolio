"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Lightbulb, Target, TrendingUp, BookOpen } from "lucide-react";
import { ProjectDetails } from "@/lib/types/project";

interface ProjectContentProps {
  project: ProjectDetails;
}

const sections = [
  {
    key: "problem" as const,
    title: "El Problema",
    icon: Target,
    color: "text-destructive",
  },
  {
    key: "solution" as const,
    title: "La Solución",
    icon: Lightbulb,
    color: "text-yellow-500",
  },
  {
    key: "impact" as const,
    title: "El Impacto",
    icon: TrendingUp,
    color: "text-green-500",
  },
  {
    key: "teachings" as const,
    title: "Aprendizajes",
    icon: BookOpen,
    color: "text-primary",
  },
];

export function ProjectContent({ project }: ProjectContentProps) {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="px-4 lg:px-20">
        <div className="grid xl:grid-cols-2 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.key}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 md:p-12 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 ${section.color}`}>
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
                    </div>
                    <div className="space-y-4 flex-1">
                      <h2 className="text-base sm:text-2xl md:text-3xl font-bold tracking-tight">
                        {section.title}
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg text-foreground font-semibold leading-relaxed text-pretty">
                        {project[section.key]}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
