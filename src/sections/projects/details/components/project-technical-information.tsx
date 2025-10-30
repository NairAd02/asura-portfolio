"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Cpu, Database, Layers } from "lucide-react";

interface ProjectTechnicalInfoProps {
  technicalInfo: string;
}

const decorativeIcons = [
  { Icon: Code2, delay: 0, position: "top-4 left-4" },
  { Icon: Cpu, delay: 0.2, position: "top-4 right-4" },
  { Icon: Database, delay: 0.4, position: "bottom-4 left-4" },
  { Icon: Layers, delay: 0.6, position: "bottom-4 right-4" },
];

export function ProjectTechnicalInformation({
  technicalInfo,
}: ProjectTechnicalInfoProps) {
  return (
    <section id="technicalInformation" className="py-16 md:py-24 bg-muted">
      <div className="px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4"
            >
              <Code2 className="h-8 w-8 text-primary" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl text-primary font-bold tracking-tight mb-3">
              Información Técnica
            </h2>
            <p className="text-foreground font-semibold text-lg">
              Detalles de implementación y arquitectura del proyecto
            </p>
          </div>

          <Card className="relative overflow-hidden p-8 md:p-12 hover:shadow-2xl transition-all duration-500 group">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Decorative corner icons */}
            {decorativeIcons.map(({ Icon, delay, position }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay }}
                className={`absolute ${position} text-primary`}
              >
                <Icon className="h-6 w-6 md:h-8 md:w-8" />
              </motion.div>
            ))}

            {/* Content */}
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="prose prose-lg max-w-none dark:prose-invert"
              >
                <div className="space-y-4">
                  {technicalInfo.split("\n").map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-base md:text-lg text-foreground font-semibold leading-relaxed text-pretty"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </motion.div>

              {/* Animated border effect */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-1 bg-gradient-to-r from-primary via-accent to-secondary mt-8 rounded-full origin-left"
              />
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
