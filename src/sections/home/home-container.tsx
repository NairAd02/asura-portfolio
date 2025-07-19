import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Calendar,
  MapPin,
  Phone,
  Code,
  Database,
  Cloud,
  TestTube,
  Cpu,
  Brain,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HomeHeroSection from "./components/home-hero-section/home-hero-section";
import { principalPlaceHolder } from "@/lib/place-holders";

export default function HomeContainer() {
  return (
    <div className="flex flex-col bg-background">
      {/* Hero Section */}
      <HomeHeroSection />

      {/* About Section */}
      <section className="py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Sobre Mí
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Soy un desarrollador apasionado por crear soluciones tecnológicas
              que impacten positivamente en la vida de las personas. Con más de
              X años de experiencia, me especializo en desarrollo full-stack con
              un enfoque particular en la arquitectura escalable y las mejores
              prácticas de desarrollo.
            </p>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Mi filosofía de trabajo se basa en la colaboración, el aprendizaje
              continuo y la entrega de código limpio y mantenible. Disfruto
              enfrentando desafíos complejos y transformándolos en soluciones
              elegantes.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Proyectos Destacados
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Una selección de proyectos que demuestran mis habilidades
                técnicas y enfoque en la resolución de problemas.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            {/* Project 1 */}
            <Card className="overflow-hidden">
              <div className="aspect-video">
                <Image
                  src={principalPlaceHolder}
                  alt="Proyecto 1"
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>Sistema de Gestión Empresarial</CardTitle>
                <CardDescription>
                  Plataforma completa para la gestión de recursos empresariales
                  con dashboard interactivo y reportes en tiempo real.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Problema:</strong> La empresa necesitaba centralizar
                  la gestión de inventario, ventas y recursos humanos.
                  <br />
                  <strong>Solución:</strong> Desarrollé una SPA con arquitectura
                  modular que redujo el tiempo de procesamiento en un 60%.
                  <br />
                  <strong>Mi rol:</strong> Full-stack developer y arquitecto de
                  la solución.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://github.com" target="_blank">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="https://demo.com" target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="overflow-hidden">
              <div className="aspect-video">
                <Image
                  src={principalPlaceHolder}
                  alt="Proyecto 2"
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>E-commerce Mobile App</CardTitle>
                <CardDescription>
                  Aplicación móvil para comercio electrónico con integración de
                  pagos y sistema de recomendaciones.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">React Native</Badge>
                  <Badge variant="secondary">Firebase</Badge>
                  <Badge variant="secondary">Stripe</Badge>
                  <Badge variant="secondary">Redux</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Problema:</strong> Cliente necesitaba expandir su
                  negocio al móvil con experiencia nativa.
                  <br />
                  <strong>Solución:</strong> App híbrida con performance nativa
                  y sincronización offline.
                  <br />
                  <strong>Aprendizaje:</strong> Optimización de rendimiento en
                  dispositivos de gama baja.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://github.com" target="_blank">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="https://demo.com" target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="overflow-hidden">
              <div className="aspect-video">
                <Image
                  src={principalPlaceHolder}
                  alt="Proyecto 3"
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>Plataforma de Analytics</CardTitle>
                <CardDescription>
                  Dashboard de análisis de datos con visualizaciones
                  interactivas y reportes automatizados.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Vue.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">D3.js</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Problema:</strong> Empresa necesitaba visualizar
                  grandes volúmenes de datos de manera intuitiva.
                  <br />
                  <strong>Solución:</strong> Dashboard con gráficos interactivos
                  y filtros dinámicos en tiempo real.
                  <br />
                  <strong>Impacto:</strong> Redujo el tiempo de análisis de
                  datos de horas a minutos.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://github.com" target="_blank">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="https://demo.com" target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 4 */}
            <Card className="overflow-hidden">
              <div className="aspect-video">
                <Image
                  src={principalPlaceHolder}
                  alt="Proyecto 4"
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>Chatbot con IA</CardTitle>
                <CardDescription>
                  Asistente virtual inteligente para atención al cliente con
                  procesamiento de lenguaje natural.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">OpenAI</Badge>
                  <Badge variant="secondary">Supabase</Badge>
                  <Badge variant="secondary">Tailwind</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Problema:</strong> Alto volumen de consultas
                  repetitivas en atención al cliente.
                  <br />
                  <strong>Solución:</strong> Chatbot que resuelve el 80% de
                  consultas automáticamente.
                  <br />
                  <strong>Tecnología:</strong> Integración con GPT-4 y base de
                  conocimientos personalizada.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://github.com" target="_blank">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="https://demo.com" target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
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
          <div className="mx-auto max-w-3xl py-12">
            <div className="space-y-8">
              {/* Experience 1 */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Senior Full Stack Developer</CardTitle>
                      <CardDescription className="text-base">
                        TechCorp Solutions
                      </CardDescription>
                    </div>
                    <Badge variant="outline">2022 - Presente</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Lidero el desarrollo de aplicaciones web escalables para
                    clientes enterprise. Responsable de la arquitectura técnica
                    y mentoría del equipo junior.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong>Logros clave:</strong>
                    </p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li>
                        Redujo el tiempo de carga de aplicaciones en un 40%
                        mediante optimizaciones
                      </li>
                      <li>
                        Implementó CI/CD que redujo bugs en producción en un 60%
                      </li>
                      <li>Mentoré a 5 desarrolladores junior</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Experience 2 */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Frontend Developer</CardTitle>
                      <CardDescription className="text-base">
                        StartupXYZ
                      </CardDescription>
                    </div>
                    <Badge variant="outline">2020 - 2022</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Desarrollé interfaces de usuario modernas y responsivas para
                    productos SaaS. Colaboré estrechamente con el equipo de
                    UX/UI para implementar diseños pixel-perfect.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong>Logros clave:</strong>
                    </p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li>
                        Migré aplicación legacy a React, mejorando performance
                        en 50%
                      </li>
                      <li>
                        Implementé design system que aceleró desarrollo en 30%
                      </li>
                      <li>
                        Lideré adopción de TypeScript en el equipo frontend
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Sass</Badge>
                    <Badge variant="secondary">Jest</Badge>
                    <Badge variant="secondary">Figma</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Freelance Experience */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Desarrollador Freelance</CardTitle>
                      <CardDescription className="text-base">
                        Proyectos Independientes
                      </CardDescription>
                    </div>
                    <Badge variant="outline">2018 - 2020</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Trabajé con múltiples clientes desarrollando soluciones web
                    personalizadas, desde landing pages hasta aplicaciones
                    complejas de gestión.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong>Proyectos destacados:</strong>
                    </p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li>E-commerce para tienda local (Vue.js + Stripe)</li>
                      <li>
                        Sistema de reservas para restaurante (React + Firebase)
                      </li>
                      <li>Portfolio interactivo para agencia creativa</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">Vue.js</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Firebase</Badge>
                    <Badge variant="secondary">Stripe</Badge>
                    <Badge variant="secondary">WordPress</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Tecnologías y Habilidades
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Las herramientas y tecnologías que domino para crear soluciones
                excepcionales.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Frontend */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    Frontend
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">React/Next.js</span>
                      <Badge variant="default">Avanzado</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">TypeScript</span>
                      <Badge variant="default">Avanzado</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Vue.js</span>
                      <Badge variant="secondary">Intermedio</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Tailwind CSS</span>
                      <Badge variant="default">Avanzado</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Backend */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5" />
                    Backend
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Node.js</span>
                      <Badge variant="default">Avanzado</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Python</span>
                      <Badge variant="secondary">Intermedio</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">PostgreSQL</span>
                      <Badge variant="default">Avanzado</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">MongoDB</span>
                      <Badge variant="secondary">Intermedio</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* DevOps */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cloud className="h-5 w-5" />
                    DevOps & Cloud
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">AWS</span>
                      <Badge variant="secondary">Intermedio</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Docker</span>
                      <Badge variant="default">Avanzado</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Vercel</span>
                      <Badge variant="default">Avanzado</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">GitHub Actions</span>
                      <Badge variant="secondary">Intermedio</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testing */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TestTube className="h-5 w-5" />
                    Testing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Jest</span>
                      <Badge variant="default">Avanzado</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Cypress</span>
                      <Badge variant="secondary">Intermedio</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">React Testing Library</span>
                      <Badge variant="default">Avanzado</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tools */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cpu className="h-5 w-5" />
                    Herramientas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Git</span>
                      <Badge variant="default">Avanzado</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Figma</span>
                      <Badge variant="secondary">Intermedio</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Postman</span>
                      <Badge variant="default">Avanzado</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AI/ML */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    IA & Emerging Tech
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">OpenAI API</span>
                      <Badge variant="secondary">Intermedio</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">LangChain</span>
                      <Badge variant="outline">Básico</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Web3</span>
                      <Badge variant="outline">Básico</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="educacion" className="py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Educación y Certificaciones
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Mi formación académica y certificaciones profesionales.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl py-12">
            <div className="space-y-6">
              {/* Degree */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>
                        Ingeniería en Sistemas Computacionales
                      </CardTitle>
                      <CardDescription className="text-base">
                        Universidad Tecnológica
                      </CardDescription>
                    </div>
                    <Badge variant="outline">2014 - 2018</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Formación integral en desarrollo de software, algoritmos,
                    estructuras de datos y arquitectura de sistemas. Proyecto de
                    tesis enfocado en aplicaciones web escalables.
                  </p>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card>
                <CardHeader>
                  <CardTitle>Certificaciones Profesionales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">AWS Certified Developer</p>
                        <p className="text-sm text-muted-foreground">
                          Amazon Web Services
                        </p>
                      </div>
                      <Badge variant="secondary">2023</Badge>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">
                          React Developer Certification
                        </p>
                        <p className="text-sm text-muted-foreground">Meta</p>
                      </div>
                      <Badge variant="secondary">2022</Badge>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Google Cloud Professional</p>
                        <p className="text-sm text-muted-foreground">
                          Google Cloud Platform
                        </p>
                      </div>
                      <Badge variant="secondary">2022</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Courses */}
              <Card>
                <CardHeader>
                  <CardTitle>Cursos y Bootcamps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">
                          Full Stack Web Development Bootcamp
                        </p>
                        <p className="text-sm text-muted-foreground">Platzi</p>
                      </div>
                      <Badge variant="outline">2021</Badge>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Advanced React Patterns</p>
                        <p className="text-sm text-muted-foreground">
                          Epic React
                        </p>
                      </div>
                      <Badge variant="outline">2021</Badge>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">
                          Machine Learning Fundamentals
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Coursera
                        </p>
                      </div>
                      <Badge variant="outline">2023</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section (Optional) */}
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
              <Card>
                <CardHeader>
                  <CardTitle>Optimización de Performance en React</CardTitle>
                  <CardDescription>15 de Enero, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Técnicas avanzadas para mejorar el rendimiento de
                    aplicaciones React, incluyendo memoización, lazy loading y
                    optimización de re-renders.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#" target="_blank">
                      Leer más
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Arquitectura Serverless con Next.js</CardTitle>
                  <CardDescription>8 de Diciembre, 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Cómo construir aplicaciones escalables usando Next.js y
                    funciones serverless, con ejemplos prácticos y mejores
                    prácticas.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#" target="_blank">
                      Leer más
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contacto
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y
                ver cómo puedo ayudarte.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-2xl py-12">
            <Card>
              <CardContent className="p-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">tu@email.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Teléfono</p>
                        <p className="text-muted-foreground">
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Ubicación</p>
                        <p className="text-muted-foreground">Ciudad, País</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Button className="w-full" asChild>
                      <Link href="mailto:tu@email.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Enviar Email
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent"
                      asChild
                    >
                      <Link href="/cv.pdf" target="_blank">
                        <Download className="w-4 h-4 mr-2" />
                        Descargar CV
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent"
                      asChild
                    >
                      <Link
                        href="https://calendly.com/tu-usuario"
                        target="_blank"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Agendar Reunión
                      </Link>
                    </Button>
                  </div>
                </div>
                <Separator className="my-6" />
                <div className="flex justify-center space-x-4">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://github.com/tu-usuario" target="_blank">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link
                      href="https://linkedin.com/in/tu-usuario"
                      target="_blank"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="mailto:tu@email.com">
                      <Mail className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
