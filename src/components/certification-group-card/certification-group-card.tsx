"use client";

import type { CertificationGroup } from "@/lib/types/certification-groups";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/format-date";
import { FileText, ZoomIn } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import Image from "next/image";

interface Props {
  certificationGroup: CertificationGroup;
}

export default function CertificationGroupCard({ certificationGroup }: Props) {
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    title: string;
  } | null>(null);

  return (
    <>
      <Card className="group hover:shadow-lg transition-all duration-300 border-r-4 border-r-primary/40 hover:border-r-primary border-l-4 border-l-primary/40 hover:border-l-primary">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/70 group-hover:bg-primary transition-colors">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <CardTitle className="text-xl font-bold text-black group-hover:text-primary">
              {certificationGroup.title}
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {certificationGroup.certifications.map((certification, index) => (
            <div key={index} className="relative">
              {certification.image ? (
                <button
                  onClick={() =>
                    setSelectedImage({
                      url: certification.image!,
                      title: certification.title,
                    })
                  }
                  className="relative block w-full rounded-xl overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 shadow-md hover:shadow-xl group/cert"
                >
                  {/* Imagen de fondo */}
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={certification.image || "/placeholder.svg"}
                      alt={`Certificación ${certification.title}`}
                      fill
                      className="object-cover"
                    />

                    {/* Overlay gradient para legibilidad */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

                    {/* Icono de zoom en la esquina superior derecha */}
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>

                    {/* Información superpuesta */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                      {/* Título */}
                      <h3 className="font-bold text-xl mb-2 leading-tight text-shadow">
                        {certification.title}
                      </h3>

                      {/* Institución */}
                      <p className="text-sm font-medium text-white/90 mb-3">
                        {certification.institution}
                      </p>

                      {/* Fechas */}
                      <div className="flex items-center gap-2">
                        <Badge className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-colors">
                          {formatDate(certification.startdate)} -{" "}
                          {formatDate(certification.enddate)}
                        </Badge>
                      </div>

                      {/* Descripción si existe */}
                      {certification.description && (
                        <p className="text-sm text-white/80 mt-3 line-clamp-2">
                          {certification.description}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              ) : (
                // Fallback si no hay imagen
                <div className="p-6 rounded-xl border-2 border-border bg-muted/30">
                  <h3 className="font-semibold text-lg mb-2">
                    {certification.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {certification.institution}
                  </p>
                  <Badge variant="outline">
                    {formatDate(certification.startdate)} -{" "}
                    {formatDate(certification.enddate)}
                  </Badge>
                  {certification.description && (
                    <p className="text-sm text-muted-foreground mt-3">
                      {certification.description}
                    </p>
                  )}
                </div>
              )}

              {/* Link externo debajo de la imagen */}
              {/*certification.link && (
                <a
                  href={certification.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors font-medium mt-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver credencial en línea
                </a>
              )*/}
            </div>
          ))}
        </CardContent>
      </Card>

      <Dialog
        open={!!selectedImage}
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] p-0">
          <DialogHeader className="p-6 pb-4">
            <DialogTitle className="text-lg font-semibold">
              {selectedImage?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="relative w-full px-6 pb-6">
            {selectedImage && (
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={selectedImage.url || "/placeholder.svg"}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
