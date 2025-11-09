import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, Trophy, Code } from "lucide-react";
import { Experience } from "@/lib/types/experiences";
import { formatDate } from "@/lib/format-date";
import AvatarContainer from "../ui/avatar-container";
import { Skeleton } from "../ui/skeleton";
import TechnologyBadge from "../technology-badge/technology-badge";

interface Props {
  experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <Card className="group hover:shadow-lg gap-1 transition-all duration-300 border-l-4 border-l-primary/40 hover:border-l-primary">
      <CardHeader className="pb-4">
        <div className="flex flex-col gap-3">
          <div className="flex gap-4 items-center">
            {experience.mainImage && (
              <AvatarContainer
                image={experience.mainImage}
                className="h-12 w-12 sm:h-16 sm:w-16"
                fallback={
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-10 w-10 rounded-full" />
                  </div>
                }
              />
            )}
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg sm:text-xl font-lora font-semibold text-foreground group-hover:text-primary transition-colors">
                {experience.position}
              </CardTitle>
              <CardDescription className="flex items-center gap-2 text-base font-lora font-semibold mt-1">
                <Building2 className="h-4 w-4 text-black  font-semibold" />
                {experience.company}
              </CardDescription>
            </div>
          </div>
          <Badge
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-lora font-medium shrink-0"
            variant="outline"
          >
            <Calendar className="h-3 w-3" />
            <span className="whitespace-normal md:whitespace-nowrap">
              {formatDate(experience.startdate)} -{" "}
              {experience.enddate ? formatDate(experience.enddate) : "Presente"}
            </span>
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Descripción */}
        <div>
          <p className="text-black text-sm font-lora sm:text-base leading-relaxed">
            {experience.description}
          </p>
        </div>

        {/* Logros clave */}
        {experience.achievements.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-amber-500" />
              <h4 className="text-sm font-lora font-semibold text-foreground">
                Logros clave
              </h4>
            </div>
            <ul className="space-y-2 ml-6">
              {experience.achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="text-sm text-black relative font-lora before:content-['•'] before:text-primary before:font-bold before:absolute before:-left-4"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tecnologías */}
        {experience.technologies.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4 text-blue-500" />
              <h4 className="text-sm font-lora font-semibold text-foreground">
                Tecnologías
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((technology, index) => (
                <TechnologyBadge key={index} technology={technology} />
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
