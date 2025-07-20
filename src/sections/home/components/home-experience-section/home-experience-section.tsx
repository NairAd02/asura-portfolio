import ExperienceCard from "@/components/experience-card/experience-card";
import { Experience } from "@/lib/types/experiences";
import React from "react";

const experiences: Experience[] = [
  {
    company: "TechSolutions Inc.",
    position: "Senior Frontend Developer",
    startDate: "2021-03",
    endDate: "2023-11",
    description:
      "Lideré el desarrollo de interfaces para productos SaaS empresariales, trabajando en un equipo ágil multidisciplinario.",
    technologies: [
      { name: "React", color: "#61DAFB", icon: "react" },
      { name: "TypeScript", color: "#3178C6", icon: "typescript" },
      { name: "GraphQL", color: "#E10098", icon: "graphql" },
    ],
    mainImage: "https://example.com/techsolutions.jpg",
    achievements: [
      "Implementé arquitectura de micro-frontends que redujo tiempos de carga en 40%",
      "Mentoré a 3 desarrolladores junior en el equipo",
      "Diseñé sistema de diseño reutilizable adoptado por toda la organización",
    ],
  },
  {
    company: "GreenTech Startup",
    position: "Full Stack Engineer",
    startDate: "2019-06",
    endDate: "2021-02",
    description:
      "Desarrollé soluciones completas para plataforma de sostenibilidad ambiental con enfoque en escalabilidad.",
    technologies: [
      { name: "Node.js", color: "#339933", icon: "nodejs" },
      { name: "MongoDB", color: "#47A248", icon: "mongodb" },
      { name: "AWS", color: "#FF9900", icon: "aws" },
    ],
    mainImage: "https://example.com/greentech.jpg",
    achievements: [
      "Construí API que procesa 10K+ peticiones/minuto sobre datos ambientales",
      "Implementé sistema de caché que redujo costos de AWS en 35%",
      "Integración con múltiples APIs de datos climáticos gubernamentales",
    ],
  },
  {
    company: "DigitalBank",
    position: "Mobile Developer",
    startDate: "2017-01",
    endDate: "2019-05",
    description:
      "Desarrollo de aplicaciones móviles bancarias con altos estándares de seguridad y usabilidad.",
    technologies: [
      { name: "Flutter", color: "#02569B", icon: "flutter" },
      { name: "Dart", color: "#0175C2", icon: "dart" },
      { name: "Firebase", color: "#FFCA28", icon: "firebase" },
    ],
    mainImage: "https://example.com/digitalbank.jpg",
    achievements: [
      "App con 500K+ descargas y rating de 4.8/5 en stores",
      "Implementación de autenticación biométrica segura",
      "Reducción de crashes en producción en 90% mediante mejor testing",
    ],
  },
  {
    company: "Freelance",
    position: "Web Developer",
    startDate: "2015-09",
    endDate: "2016-12",
    description:
      "Desarrollo de sitios web y aplicaciones personalizadas para diversos clientes.",
    technologies: [
      { name: "JavaScript", color: "#F7DF1E", icon: "javascript" },
      { name: "PHP", color: "#777BB4", icon: "php" },
      { name: "WordPress", color: "#21759B", icon: "wordpress" },
    ],
    achievements: [
      "Entregué 15+ proyectos para clientes en 6 industrias diferentes",
      "Desarrollé plugins personalizados para necesidades específicas",
      "Automatización de procesos de despliegue para clientes recurrentes",
    ],
  },
  {
    company: "Innovatech Labs",
    position: "Lead Software Architect",
    startDate: "2023-12",
    description:
      "Liderazgo técnico en desarrollo de soluciones innovadoras para clientes Fortune 500.",
    technologies: [
      { name: "Kubernetes", color: "#326CE5", icon: "kubernetes" },
      { name: "Go", color: "#00ADD8", icon: "go" },
      { name: "Microservices", color: "#3A7BD5" },
    ],
    mainImage: "https://example.com/innovatech.jpg",
    achievements: [
      "Diseñé arquitectura escalable para sistema de procesamiento de pagos internacionales",
      "Implementé estrategia de migración a la nube para cliente financiero",
      "Establecí prácticas de DevOps que redujeron tiempo de despliegue en 60%",
    ],
  },
  {
    company: "University Tech Lab",
    position: "Research Assistant",
    startDate: "2014-01",
    endDate: "2015-08",
    description:
      "Investigación en tecnologías emergentes y desarrollo de prototipos para proyectos académicos.",
    technologies: [
      { name: "Python", color: "#3776AB", icon: "python" },
      { name: "Machine Learning", color: "#FF6F00" },
      { name: "R", color: "#276DC3", icon: "r" },
    ],
    achievements: [
      "Publicación de paper sobre algoritmos de recomendación",
      "Desarrollo de prototipo para análisis de datos educativos",
      "Colaboración en proyecto de código abierto para visualización de datos",
    ],
  },
];

export default function HomeExperienceSection() {
  return (
    <section id="experiencia" className="py-24 bg-muted/50">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Experiencia Laboral
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Mi trayectoria profesional en el desarrollo de software y
              tecnología.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-6xl py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
