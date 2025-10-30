"use client";

import AvatarContainer from "@/components/ui/avatar-container";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { Skill } from "@/lib/types/skills";
import { Award } from "lucide-react";

interface SkillsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  skills: Skill[];
  groupName: string;
  groupIcon?: string;
}

export function SkillsModal({
  open,
  onOpenChange,
  skills,
  groupName,
  groupIcon,
}: SkillsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-black border-4 border-primary dark:border-white shadow-2xl">
        {/* Decorative top border with elegant effect */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />

        <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg" />
        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg" />
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-lg" />
        <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg" />

        <DialogHeader className="px-8 pt-8 pb-4 relative">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Award className="w-8 h-8 text-primary" />
            <DialogTitle className="text-3xl font-bold text-center text-primary font-serif">
              Habilidades Destacadas
            </DialogTitle>
            <Award className="w-8 h-8 text-primary" />
          </div>
          <div className="flex items-center w-full justify-center gap-2">
            <AvatarContainer
              className="h-12 w-12"
              image={groupIcon}
              fallback={
                <div className="flex items-center gap-2">
                  <Skeleton className="h-12 w-12 rounded-full" />
                </div>
              }
            />
            <p className="text-center text-primary font-semibold text-2xl">
              {groupName}
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mt-4" />
        </DialogHeader>

        <ScrollArea className="px-8 pb-12 sm:pb-8 max-h-[calc(85vh-166px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-lg p-4 border-2 border-primary/60 dark:border-gray-700 hover:border-black dark:hover:border-white hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <p className="text-foreground flex-1 font-semibold leading-relaxed text-sm sm:text-base">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
