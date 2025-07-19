import BlogCard from "@/components/blog-card/blog-card";
import { Blog } from "@/lib/types/blogs";
import React from "react";

const blogs: Blog[] = [
  {
    id: "1",
    name: "Introducción a React Hooks",
    description:
      "Guía completa para entender y aplicar los hooks más utilizados en React 18, con ejemplos prácticos y mejores prácticas.",
    date: "2023-05-15",
    link: "https://tublog.com/react-hooks",
    image: "https://example.com/react-hooks.jpg",
  },
  {
    id: "2",
    name: "Microservicios con Node.js: Patrones y Anti-patrones",
    description:
      "Análisis de arquitecturas basadas en microservicios implementadas con Node.js, cubriendo patrones comunes y errores frecuentes.",
    date: "2023-03-22",
    link: "https://tublog.com/node-microservices",
    image: "https://example.com/microservices.jpg",
  },
  {
    id: "3",
    name: "TypeScript en 2023: Novedades y Features Esenciales",
    description:
      "Recorrido por las últimas características de TypeScript 5.0 y cómo aplicarlas en proyectos reales para mejorar tu código.",
    date: "2023-01-10",
    link: "https://tublog.com/typescript-2023",
  },
  {
    id: "4",
    name: "Optimización de Performance en Aplicaciones Angular",
    description:
      "Técnicas avanzadas para identificar y resolver cuellos de botella en aplicaciones Angular de gran escala.",
    date: "2022-11-30",
    link: "https://tublog.com/angular-performance",
    image: "https://example.com/angular-opt.jpg",
  },
  {
    id: "5",
    name: "Guía Completa de GraphQL para Desarrolladores Frontend",
    description:
      "Desde conceptos básicos hasta implementaciones avanzadas con Apollo Client y cache management.",
    date: "2022-09-18",
    link: "https://tublog.com/graphql-frontend",
  },
  {
    id: "6",
    name: "Seguridad en APIs REST: Mejores Prácticas 2023",
    description:
      "Implementación de JWT, OAuth 2.0, rate limiting y protección contra vulnerabilidades comunes en APIs RESTful.",
    date: "2022-07-05",
    link: "https://tublog.com/api-security",
    image: "https://example.com/api-security.jpg",
  },
  {
    id: "7",
    name: "De Junior a Senior: Crecimiento Profesional en Tech",
    description:
      "Ruta de aprendizaje y habilidades blandas necesarias para avanzar en tu carrera como desarrollador de software.",
    date: "2022-04-12",
  },
  {
    id: "8",
    name: "WebAssembly: El Futuro del Rendimiento Web",
    description:
      "Introducción práctica a WASM con Rust para acelerar cálculos intensivos en el navegador.",
    date: "2022-02-28",
    link: "https://tublog.com/webassembly",
    image: "https://example.com/wasm-rust.jpg",
  },
  {
    id: "9",
    name: "Patrones de Diseño en JavaScript Moderno",
    description:
      "Reinterpretación de los clásicos patrones GoF aplicados a JavaScript ES2022 y TypeScript.",
    date: "2021-12-15",
    link: "https://tublog.com/js-patterns",
  },
  {
    id: "10",
    name: "DevOps para Startups: Desde Cero a Producción",
    description:
      "Guía práctica para implementar CI/CD, monitoreo y despliegues automatizados con presupuesto limitado.",
    date: "2021-10-03",
    link: "https://tublog.com/devops-startups",
    image: "https://example.com/devops-startup.jpg",
  },
];

export default function HomeBlogsSection() {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Blog & Publicaciones
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Comparto conocimientos y experiencias a través de artículos
              técnicos.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl py-12">
          <div className="grid gap-6 md:grid-cols-2">
            {blogs.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
