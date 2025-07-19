import React from "react";
import { Proyect } from "@/lib/types/proyect";
import ProyectCard from "@/components/proyect-card/proyect-card";

const proyects: Proyect[] = [
  {
    id: "1",
    name: "EcoTrack",
    images: [],
    description:
      "Aplicación para rastrear y reducir la huella de carbono personal",
    problem:
      "Falta de conciencia sobre el impacto ambiental de las actividades diarias",
    solution: "App que calcula emisiones y sugiere alternativas sostenibles",
    impact: "Reducción promedio de 15% en huella de carbono de usuarios",
    teachings:
      "Importancia de UX para adopción de hábitos, escalabilidad de bases de datos ecológicas",
    technologies: [
      { name: "React Native", color: "blue", icon: "" },
      { name: "Node.js", color: "green", icon: "" },
      { name: "MongoDB", color: "green", icon: "" },
    ],
  },
  {
    id: "2",
    name: "MediConnect",
    images: [],
    description: "Plataforma de telemedicina para áreas rurales",
    problem: "Acceso limitado a especialistas médicos en zonas remotas",
    solution: "Sistema de videoconsultas con historial médico integrado",
    impact:
      "3000+ consultas realizadas en primer año, reduciendo tiempos de espera",
    teachings:
      "Desafíos de HIPAA compliance, importancia de baja latencia en video",
    technologies: [
      { name: "Angular", color: "red", icon: "" },
      { name: "Firebase", color: "orange", icon: "" },
      { name: "WebRTC", color: "blue", icon: "" },
    ],
  },
  {
    id: "3",
    name: "SkillSwap",
    description: "Marketplace para intercambio de habilidades entre vecinos",
    images: [],
    problem: "Desperdicio de talento local y falta de conexión comunitaria",
    solution: "Plataforma que permite intercambiar servicios sin dinero",
    impact: "Creación de red local con 5000+ usuarios en 6 meses",
    teachings:
      "Diseño de sistemas de reputación, manejo de transacciones sin dinero",
    technologies: [
      { name: "Vue.js", color: "green", icon: "" },
      { name: "Django", color: "darkgreen", icon: "" },
      { name: "PostgreSQL", color: "blue", icon: "" },
    ],
  },
  {
    id: "4",
    name: "AgroVision",
    description: "Sistema de monitoreo de cultivos con drones e IA",
    images: [],
    problem: "Detección tardía de plagas y enfermedades en cultivos",
    solution: "Análisis automatizado de imágenes multiespectrales",
    impact: "Aumento de 20% en rendimiento para 150 granjas piloto",
    teachings:
      "Procesamiento de imágenes a escala, integración hardware/software",
    technologies: [
      { name: "Python", color: "blue", icon: "" },
      { name: "TensorFlow", color: "orange", icon: "" },
      { name: "OpenCV", color: "lightblue", icon: "" },
    ],
  },
  {
    id: "5",
    name: "EduPlay",
    description:
      "Juegos educativos personalizados para niños con necesidades especiales",
    images: [],
    problem: "Falta de herramientas educativas inclusivas",
    solution: "Plataforma con juegos adaptables a diferentes capacidades",
    impact: "Mejoró engagement educativo en 85% de casos estudiados",
    teachings:
      "Diseño inclusivo, importancia de feedback constante con usuarios finales",
    technologies: [
      { name: "Unity", color: "black", icon: "" },
      { name: "C#", color: "purple", icon: "" },
      { name: "Azure", color: "blue", icon: "" },
    ],
  },
  {
    id: "6",
    name: "CityFlow",
    description: "Optimización de tráfico urbano usando datos en tiempo real",
    images: [],
    problem: "Congestión vehicular en horas pico",
    solution: "Sistema que ajusta semáforos y sugiere rutas basado en patrones",
    impact: "Reducción de 30% en tiempos de viaje en zona de prueba",
    teachings:
      "Procesamiento de streams de datos, coordinación con sistemas legacy",
    technologies: [
      { name: "Kafka", color: "purple", icon: "" },
      { name: "Spark", color: "red", icon: "" },
      { name: "Go", color: "blue", icon: "" },
    ],
  },
  {
    id: "7",
    name: "FoodRescue",
    description:
      "Conecta restaurantes con bancos de alimentos para reducir desperdicio",
    images: [],
    problem: "Desperdicio de alimentos comestibles en sector gastronómico",
    solution: "App para programar recolecciones de excedentes alimentarios",
    impact: "100+ toneladas de comida redirigidas en primer año",
    teachings:
      "Logística en tiempo real, importancia de incentivos para participación",
    technologies: [
      { name: "Flutter", color: "blue", icon: "" },
      { name: "Firebase", color: "orange", icon: "" },
      { name: "Google Maps API", color: "blue", icon: "" },
    ],
  },
];

export default function HomeProyectsSection() {
  return (
    <section id="proyectos" className="py-24">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Proyectos Destacados
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Una selección de proyectos que demuestran mis habilidades técnicas
              y enfoque en la resolución de problemas.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 py-12 xl:grid-cols-2 lg:gap-4">
          {proyects.map((proyect, index) => (
            <ProyectCard key={index} proyect={proyect} />
          ))}
        </div>
      </div>
    </section>
  );
}
