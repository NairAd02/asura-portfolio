"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormDataSchema,
  ContactFormDataSchema,
} from "./schemas/contact-form-data-schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "./contact-form";
import { Button } from "@/components/ui/button";
import { Loader2, Mail } from "lucide-react";

interface Props {
  emailToSend: string;
}

export default function ContactFormContainer({ emailToSend }: Props) {
  const form = useForm<ContactFormDataSchema>({
    resolver: zodResolver(contactFormDataSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      subject: "",
    },
  });

  function onSubmit(contactFormData: ContactFormDataSchema) {
    const encodedSubject = encodeURIComponent(contactFormData.subject);
    const encodedBody = encodeURIComponent(
      `Hola, soy ${contactFormData.name} (${contactFormData.email}).\n\n${contactFormData.message}`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailToSend}&su=${encodedSubject}&body=${encodedBody}`;

    window.open(gmailUrl, "_blank");
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Envíame un Mensaje</CardTitle>
        <CardDescription>
          Completa el formulario y me pondré en contacto contigo pronto
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4 h-full"
          >
            <ContactForm />

            <div className="flex flex-col gap-4">
              <Button
                type="submit"
                className="w-full"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Preparando...
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar Mensaje
                  </>
                )}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                * Campos obligatorios
              </p>
            </div>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
}
