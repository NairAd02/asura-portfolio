import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { principalPlaceHolder } from "@/lib/place-holders";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  ExternalLink,
  Github,
  Code2,
  Lightbulb,
  Target,
  TrendingUp,
  Eye,
} from "lucide-react";
import NavigationComponent from "../navigation-component/navigation-component";
import type { Project } from "@/lib/types/project";
import TechnologyBadge from "../technology-badge/technology-badge";
import { paths } from "@/lib/routes/path";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Card className="group relative pt-0 border-t-12 border-t-primary overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-b-4 border-b-primary/40 hover:border-b-primary shadow-md">
      {/* Top accent line */}

      <div className="flex flex-col  h-full">
        <NavigationComponent
          className="relative w-full group/image cursor-pointer h-60 flex-shrink-0 overflow-hidden"
          href={paths.projectDetails({ id: project.id }).root}
        >
          <Image
            src={project.mainImage || principalPlaceHolder}
            alt={`Imagen del proyecto ${project.name}`}
            fill
            quality={100}
            className="object-center transition-transform duration-500 group-hover/image:scale-110 group-hover/image:brightness-75"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
          {/* "Ver detalles" button - appears on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-all duration-500 translate-y-4 group-hover/image:translate-y-0">
            <div className="bg-background text-foreground px-6 py-3 rounded-lg shadow-2xl flex items-center gap-2 font-semibold transform scale-90 group-hover/image:scale-100 transition-transform duration-300">
              <Eye className="w-5 h-5" />
              Ver detalles
            </div>
          </div>
        </NavigationComponent>

        <CardContent className="flex-1 p-6 pt-3 pb-0 flex gap-4 flex-col justify-between">
          {/* Header */}
          <div className="space-y-3">
            <div>
              <h3 className="text-lg font-bold font-lora text-foreground group-hover:text-primary line-clamp-1 mb-0.5">
                {project.name}
              </h3>
              <p className="text-sm text-black font-lora line-clamp-3 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-lora text-foreground flex items-center gap-1">
                <Code2 className="w-3 h-3" />
                Tecnologías
              </h4>
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((technology, index) => (
                  <TechnologyBadge key={index} technology={technology} />
                ))}
                {project.technologies.length > 3 && (
                  <Badge variant="outline" className="text-xs px-2 py-0.5">
                    +{project.technologies.length - 3}
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Detalles del proyecto - Compacto */}
          <div className="space-y-3 flex-1 min-h-0">
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <div className="flex items-center gap-1 font-lora text-foreground">
                  <Target className="w-3 h-3  text-destructive" />
                  Problema
                </div>
                <p className="text-black font-lora line-clamp-2 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1 font-lora text-foreground">
                  <Lightbulb className="w-3 h-3 text-yellow-500" />
                  Solución
                </div>
                <p className="text-black font-lora line-clamp-2 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1 font-lora text-foreground">
                  <TrendingUp className="w-3 h-3 text-blue-500" />
                  Aprendizaje
                </div>
                <p className="text-black font-lora line-clamp-2 leading-relaxed">
                  {project.teachings}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1 font-lora text-foreground">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  Impacto
                </div>
                <p className="text-black font-lora line-clamp-2 leading-relaxed">
                  {project.impact}
                </p>
              </div>
            </div>
          </div>

          {/* Botones de acción - Footer */}
          <div className="pt-4 border-t border-border">
            <div className="flex gap-3">
              {project.sourceCodeUrl ? (
                <NavigationComponent inAnotherTab href={project.sourceCodeUrl}>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-200 bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    Código
                  </Button>
                </NavigationComponent>
              ) : (
                <div className="flex-1 flex items-center justify-center p-2 rounded-md bg-muted/50 border border-dashed border-muted-foreground/30">
                  <span className="text-xs text-muted-foreground">
                    Sin código
                  </span>
                </div>
              )}

              {project.deploymentUrl ? (
                <NavigationComponent inAnotherTab href={project.deploymentUrl}>
                  <Button
                    size="sm"
                    className="flex-1 group/btn bg-primary hover:bg-primary/90 transition-all duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    Demo
                  </Button>
                </NavigationComponent>
              ) : (
                <div className="flex-1 flex items-center justify-center p-2 rounded-md bg-muted/50 border border-dashed border-muted-foreground/30">
                  <span className="text-xs text-muted-foreground">
                    Sin demo
                  </span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
