import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Experience } from "@/lib/types/experiences";
import { formatDate } from "@/lib/format-date";

interface Props {
  experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{experience.position}</CardTitle>
            <CardDescription className="text-base">
              {experience.company}
            </CardDescription>
          </div>
        </div>
        <Badge className="whitespace-normal md:whitespace-nowrap" variant="outline">
          {formatDate(experience.startDate)} -{" "}
          {experience.endDate ? formatDate(experience.endDate) : "Presente"}
        </Badge>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{experience.description}</p>
        <div className="space-y-2">
          <p className="text-sm">
            <strong>Logros clave:</strong>
          </p>
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
            {experience.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {experience.technologies.map((technology, index) => (
            <Badge key={index} variant="secondary">
              {technology.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
