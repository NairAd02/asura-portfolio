import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Download, Github, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { ContactSectionInfo } from "@/lib/types/portfolio-info";
import NavigationComponent from "@/components/navigation-component/navigation-component";
import Link from "next/link";
import ContactFormContainer from "./form/contact-form-container";

interface Props {
  contactSectionInfo: ContactSectionInfo;
}

export default function HomeContactSection({ contactSectionInfo }: Props) {
  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl text-primary font-bold font-cormorant sm:text-4xl md:text-5xl">
              Contacto
            </h2>
            <p className="max-w-[900px] text-black font-lora md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {contactSectionInfo.contact_text}
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
                    <p className="text-muted-foreground">
                      {contactSectionInfo.contact_email}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-muted-foreground">
                      {contactSectionInfo.contact_phone}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Ubicación</p>
                    <p className="text-muted-foreground">
                      {contactSectionInfo.location}
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  {contactSectionInfo.cv_doc && (
                    <NavigationComponent
                      inAnotherTab
                      href={contactSectionInfo.cv_doc}
                    >
                      <Button className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Descargar CV
                      </Button>
                    </NavigationComponent>
                  )}
                </div>
                <Separator />

                <div>
                  <p className="text-sm font-medium mb-3">Sígueme en:</p>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://github.com/NairAd02" target="_blank">
                        <Github className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <ContactFormContainer
              emailToSend={contactSectionInfo.contact_email}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
