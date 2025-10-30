import { Certification } from "@/lib/types/certifications";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { principalPlaceHolder } from "@/lib/place-holders";
import Image from "next/image";
import { Award } from "lucide-react";

interface Props {
  certification: Certification;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CertificationModal({
  certification,
  open,
  onOpenChange,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl max-h-[98vh] p-0 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-black border-4 border-primary dark:border-white shadow-2xl">
        {/* Gradientes decorativos superior e inferior */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />

        {/* Bordes decorativos en las esquinas */}
        <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg" />
        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg" />
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-lg" />
        <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg" />

        <DialogHeader className="px-8 pt-8 relative">
          <div className="flex items-center justify-center gap-3 ">
            <Award className="w-8 h-8 text-primary" />
            <DialogTitle className="text-3xl font-bold text-center text-primary font-serif">
              {certification.title}
            </DialogTitle>
            <Award className="w-8 h-8 text-primary" />
          </div>
          <p className="text-center text-primary font-semibold text-xl">
            {certification.institution}
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent " />
        </DialogHeader>

        <div className="px-8 pb-8">
          <div className="relative w-full  rounded-lg overflow-hidden border-2 border-primary/60 shadow-lg">
            <div className="relative w-full h-[60vh] sm:h-[72vh]">
              <Image
                src={certification.image || principalPlaceHolder}
                alt={certification.title}
                fill
                className="object-center bg-white dark:bg-gray-900"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
