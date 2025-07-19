import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t px-8 py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Adrian Suarez Padrón. Todos los derechos reservados.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/tu-usuario" target="_blank">
              <Github className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com/in/tu-usuario" target="_blank">
              <Linkedin className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
