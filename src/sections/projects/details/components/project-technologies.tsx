"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Technology } from "@/lib/types/technologies";
import Image from "next/image";

interface ProjectTechnologiesProps {
  technologies: Technology[];
}

export function ProjectTechnologies({
  technologies,
}: ProjectTechnologiesProps) {
  return (
    <section id="technologies" className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight text-center mb-12">
            Tecnologías Utilizadas
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-6 text-center hover:shadow-md transition-all duration-300 group cursor-pointer">
                  {tech.icon && (
                    <div className="mb-4 flex justify-center">
                      <Image
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.name}
                        width={1920}
                        height={1080}
                        className="h-20 w-20 object-contain rounded-2xl transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  )}
                  <p className="font-medium text-sm md:text-base">
                    {tech.name}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
