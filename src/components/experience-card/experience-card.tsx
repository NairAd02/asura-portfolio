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

interface Props {
  experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/40 hover:border-l-primary">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {experience.position}
            </CardTitle>
            <CardDescription className="flex items-center gap-2 text-base font-semibold mt-1">
              <Building2 className="h-4 w-4 text-black font-semibold" />
              {experience.company}
            </CardDescription>
          </div>
          <Badge
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium shrink-0"
            variant="outline"
          >
            <Calendar className="h-3 w-3" />
            <span className="whitespace-normal md:whitespace-nowrap">
              {formatDate(experience.startDate)} -{" "}
              {experience.endDate ? formatDate(experience.endDate) : "Presente"}
            </span>
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Descripción */}
        <div>
          <p className="text-black font-semibold leading-relaxed">
            {experience.description}
          </p>
        </div>

        {/* Logros clave */}
        {experience.achievements.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-amber-500" />
              <h4 className="text-sm font-semibold text-foreground">
                Logros clave
              </h4>
            </div>
            <ul className="space-y-2 ml-6">
              {experience.achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="text-sm text-black font-semibold relative before:content-['•'] before:text-primary before:font-bold before:absolute before:-left-4"
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
              <h4 className="text-sm font-semibold text-foreground">
                Tecnologías
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((technology, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs px-2 py-0.5 font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {technology.name}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
