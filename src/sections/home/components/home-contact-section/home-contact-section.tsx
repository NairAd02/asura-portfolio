import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import ContactForm from "./form/contact-form";

export default function HomeContactSection() {
  return (
    <section id="contacto" className="py-24 bg-muted">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl text-primary font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contacto
            </h2>
            <p className="max-w-[900px] text-black font-semibold md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y
              ver cómo puedo ayudarte.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl py-12">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
                <CardDescription>
                  Puedes contactarme a través de cualquiera de estos medios
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
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
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Ubicación</p>
                    <p className="text-muted-foreground">Ciudad, País</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <Button className="w-full" asChild>
                    <Link href="/cv.pdf" target="_blank">
                      <Download className="w-4 h-4 mr-2" />
                      Descargar CV
                    </Link>
                  </Button>
                </div>

                <Separator />

                <div>
                  <p className="text-sm font-medium mb-3">Sígueme en:</p>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" asChild>
                      <Link
                        href="https://github.com/tu-usuario"
                        target="_blank"
                      >
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
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
