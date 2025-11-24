"use client";

import type { Experience } from "@/lib/types/experiences";
import ExperienceCard from "@/components/experience-card/experience-card";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface Props {
  experiences: Experience[];
}

export default function ExperienceTimeline({ experiences }: Props) {
  // Sort experiences by date (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = new Date(a.startdate).getTime();
    const dateB = new Date(b.startdate).getTime();
    return dateB - dateA;
  });

  const experiencesWithYears = sortedExperiences.map((exp, index) => {
    const year = new Date(exp.startdate).getFullYear();
    const prevYear =
      index > 0
        ? new Date(sortedExperiences[index - 1].startdate).getFullYear()
        : null;
    return {
      ...exp,
      year,
      showYear: year !== prevYear, // Only show year if it's different from previous
    };
  });

  return (
    <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
      {/* Timeline vertical line */}
      <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-primary/60 to-primary/40" />

      {/* Timeline items */}
      <div className="space-y-12">
        {experiencesWithYears.map((experience, index) => {
          return (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-16 sm:pl-24"
            >
              {experience.showYear && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-0 sm:left-8 top-[-45px] -translate-x-2 sm:-translate-x-4"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary">
                    {experience.year}
                  </div>
                </motion.div>
              )}

              {/* Timeline dot with icon */}
              <div className="absolute left-4 sm:left-8 top-8 -translate-x-1/2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.2,
                  }}
                  className="relative"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center shadow-lg ring-4 ring-background">
                    <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                 
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <ExperienceCard experience={experience} />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
