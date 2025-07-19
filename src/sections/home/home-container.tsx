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
import Link from "next/link";
import HomeHeroSection from "./components/home-hero-section/home-hero-section";
import HomeAboutSection from "./components/home-about-section/home-about-section";
import HomeProyectsSection from "./components/home-proyects-section/home-proyects-section";
import HomeExperienceSection from "./components/home-experience-section/home-experience-section";
import HomeSkillsSection from "./components/home-skills-section/home-skills-section";
import HomeEducationAndCertificationsSection from "./components/home-education-and-certifications-section/home-education-and-certifications-section";
import HomeBlogsSection from "./components/home-blogs-section/home-blogs-section";

export default function HomeContainer() {
  return (
    <div className="flex flex-col bg-background">
      {/* Hero Section */}
      <HomeHeroSection />

      {/* About Section */}
      <HomeAboutSection />

      {/* Projects Section */}
      <HomeProyectsSection />

      {/* Experience Section */}
      <HomeExperienceSection />

      {/* Skills Section */}
      <HomeSkillsSection />

      {/* Education Section */}
      <HomeEducationAndCertificationsSection />

      {/* Blog Section (Optional) */}
      <HomeBlogsSection />

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
