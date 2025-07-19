import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <nav>
        <div className="container flex px-4 h-14 items-center">
          <div className="mr-4 flex">
            <Link href="#inicio" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Asura-Portfolio</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
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
          </div>
        </div>
      </nav>
    </header>
  );
}
