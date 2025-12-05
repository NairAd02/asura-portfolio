"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import type { ProjectDetails } from "@/lib/types/project";
import Image from "next/image";
import { principalPlaceHolder } from "@/lib/place-holders";

interface ProjectHeroProps {
  project: ProjectDetails;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [2, -2]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-2, 2]);

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20"
    >
      <div className="container relative z-10 px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary font-bold font-cormorant tracking-wider text-balance">
                  {project.name}
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative"
              >
                <div className="max-h-[280px] overflow-y-auto pr-2 pb-4 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
                  <p className="text-base md:text-lg lg:text-xl text-primary font-lora leading-relaxed text-pretty">
                    {project.description}
                  </p>
                </div>
                {/* Gradient fade at bottom if content overflows */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent pointer-events-none" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {project.deploymentUrl && (
                <Button size="lg" asChild className="group shadow-lg">
                  <a
                    href={project.deploymentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ir a Ver
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </Button>
              )}
              {project.sourceCodeUrl && (
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="group shadow-md bg-transparent"
                >
                  <a
                    href={project.sourceCodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                    Código Fuente
                  </a>
                </Button>
              )}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          {project.mainImage && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="order-1 lg:order-2 relative"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                className="relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-border/50"
              >
                <Image
                  src={project.mainImage || principalPlaceHolder}
                  alt={`Imagen del proyecto ${project.name}`}
                  fill
                  quality={100}
                  className="object-center transition-transform duration-500 group-hover/image:scale-110 group-hover/image:brightness-75"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl -z-10 blur-2xl" />
            </motion.div>
          )}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </motion.section>
  );
}
