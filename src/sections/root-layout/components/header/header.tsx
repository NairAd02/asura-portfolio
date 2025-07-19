import AppLogo from "@/components/app-logo/app-logo";
import NavigationComponent from "@/components/navigation-component/navigation-component";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <nav>
        <div className="container flex px-4 h-14 items-center">
          <NavigationComponent href="/">
            <div className="flex items-center gap-2">
              {" "}
              <AppLogo />
              <span className="font-bold">Asura-Portfolio</span>
            </div>
          </NavigationComponent>
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
