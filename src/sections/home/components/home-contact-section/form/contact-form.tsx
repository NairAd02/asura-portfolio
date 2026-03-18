"use client";

import type React from "react";
import { RHFTextField } from "@/components/form/rhf-components/rhf-text-field/rhf-text-field";
import { RHFTextAreaField } from "@/components/form/rhf-components/rhf-text-area-field/rhf-text-area-field";

export default function ContactForm() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RHFTextField name="name" label="Name *" placeholder="Your name" />
        <RHFTextField name="email" label="Email *" placeholder="tu@email.com" />
      </div>

      <RHFTextField
        name="subject"
        label="Subject *"
        placeholder="What do you want to talk about?"
      />

      <RHFTextAreaField
        name="message"
        label="Message *"
        placeholder="Tell me about your project or inquiry..."
        textAreaClassName="min-h-[120px]"
      />
    </div>
  );
}
