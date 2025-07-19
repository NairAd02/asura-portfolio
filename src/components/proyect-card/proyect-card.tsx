import { Proyect } from "@/lib/types/proyect";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { principalPlaceHolder } from "@/lib/place-holders";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

interface Props {
  proyect: Proyect;
}

export default function ProyectCard({ proyect }: Props) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video">
        <Image
          src={proyect.mainImage || principalPlaceHolder}
          alt="Proyecto 2"
          width={500}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
      <CardHeader>
        <CardTitle>{proyect.name}</CardTitle>
        <CardDescription>{proyect.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {proyect.technologies.map((technology, index) => (
            <Badge key={index} variant="secondary">
              {technology.name}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          <strong>Problema:</strong> {proyect.problem}
          <br />
          <strong>Solución:</strong> {proyect.solution}
          <br />
          <strong>Aprendizaje:</strong> {proyect.teachings}
          <br />
          <strong>Impacto:</strong> {proyect.impact}
        </p>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" asChild>
            <Link href="https://github.com" target="_blank">
              <Github className="w-4 h-4 mr-2" />
              Código
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="https://demo.com" target="_blank">
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
