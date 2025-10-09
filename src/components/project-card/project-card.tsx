
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
} from "lucide-react";
import NavigationComponent from "../navigation-component/navigation-component";
import { Project } from "@/lib/types/project";

interface Props {
  proyect: Project;
}

export default function ProjectCard({ proyect }: Props) {
  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-b-4 border-b-primary/40 hover:border-b-primary shadow-md">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-primary" />
      
      <div className="flex flex-col sm:flex-row h-full">
        <div className="flex items-center justify-center">
          <div className="relative">
            <Image
              src={proyect.mainImage || principalPlaceHolder}
              alt={`Imagen del proyecto ${proyect.name}`}
              width={250}
              height={250}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        <CardContent className="flex-1 p-6 flex gap-4 flex-col justify-between">
          {/* Header */}
          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary line-clamp-2 mb-2">
                {proyect.name}
              </h3>
              <p className="text-sm text-black font-semibold line-clamp-2 leading-relaxed">
                {proyect.description}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-foreground flex items-center gap-1">
                <Code2 className="w-3 h-3" />
                Tecnologías
              </h4>
              <div className="flex flex-wrap gap-1">
                {proyect.technologies.slice(0, 6).map((technology, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs px-2 py-0.5 font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {technology.name}
                  </Badge>
                ))}
                {proyect.technologies.length > 6 && (
                  <Badge variant="outline" className="text-xs px-2 py-0.5">
                    +{proyect.technologies.length - 6}
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Detalles del proyecto - Compacto */}
          <div className="space-y-3 flex-1 min-h-0">
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <div className="flex items-center gap-1 font-semibold text-foreground">
                  <Target className="w-3 h-3 text-destructive" />
                  Problema
                </div>
                <p className="text-black font-semibold line-clamp-2 leading-relaxed">
                  {proyect.problem}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1 font-semibold text-foreground">
                  <Lightbulb className="w-3 h-3 text-yellow-500" />
                  Solución
                </div>
                <p className="text-black font-semibold line-clamp-2 leading-relaxed">
                  {proyect.solution}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1 font-semibold text-foreground">
                  <TrendingUp className="w-3 h-3 text-blue-500" />
                  Aprendizaje
                </div>
                <p className="text-black font-semibold line-clamp-2 leading-relaxed">
                  {proyect.teachings}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1 font-semibold text-foreground">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  Impacto
                </div>
                <p className="text-black font-semibold line-clamp-2 leading-relaxed">
                  {proyect.impact}
                </p>
              </div>
            </div>
          </div>

          {/* Botones de acción - Footer */}
          <div className="pt-4 border-t border-border">
            <div className="flex gap-3">
              {proyect.sourceCodeUrl ? (
                <NavigationComponent href={proyect.sourceCodeUrl}>
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

              {proyect.deploymentUrl ? (
                <NavigationComponent href={proyect.deploymentUrl}>
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
