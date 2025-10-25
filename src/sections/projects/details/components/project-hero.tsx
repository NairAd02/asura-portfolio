"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import type { ProjectDetails } from "@/lib/types/project";

interface ProjectHeroProps {
  project: ProjectDetails;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);
  const scale = useTransform(mouseX, [-0.5, 0.5], [1, 1.05]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {project.mainImage && (
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            rotateX,
            rotateY,
            scale,
          }}
        >
          <div
            className="absolute inset-0 bg-center "
            style={{
              backgroundImage: `url(${project.mainImage})`,
            }}
          />
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-primary/80" />
        </motion.div>
      )}

      {/* Background gradient */}
      <div className="absolute inset-0 " />

      <div className="container relative z-10 px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              {project.name}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-2xl text-white max-w-2xl mx-auto text-pretty leading-relaxed"
          >
            {project.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {project.deploymentUrl && (
              <Button size="lg" asChild className="group">
                <a
                  href={project.deploymentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Proyecto
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            )}
            {project.sourceCodeUrl && (
              <Button
                size="lg"
                variant="outline"
                asChild
                className="group bg-transparent"
              >
                <a
                  href={project.sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Código Fuente
                </a>
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
