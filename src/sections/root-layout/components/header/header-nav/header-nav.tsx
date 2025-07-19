import Link from "next/link";
import React from "react";

export default function HeaderNav() {
  return (
    
      <nav className="flex flex-col md:flex-row items-center gap-4 text-sm font-medium">
        <Link
          href="#inicio"
          className="transition-colors hover:text-foreground/80"
        >
          Inicio
        </Link>
        <Link
          href="#proyectos"
          className="transition-colors hover:text-foreground/80"
        >
          Proyectos
        </Link>
        <Link
          href="#experiencia"
          className="transition-colors hover:text-foreground/80"
        >
          Experiencia
        </Link>
        <Link
          href="#habilidades"
          className="transition-colors hover:text-foreground/80"
        >
          Habilidades
        </Link>
        <Link
          href="#educacion"
          className="transition-colors hover:text-foreground/80"
        >
          Educación
        </Link>
        <Link
          href="#contacto"
          className="transition-colors hover:text-foreground/80"
        >
          Contacto
        </Link>
      </nav>
    
  );
}
