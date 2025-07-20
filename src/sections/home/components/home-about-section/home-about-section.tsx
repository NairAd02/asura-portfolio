import React from "react";

export default function HomeAboutSection() {
  return (
    <section id="acerca" className="py-24 bg-muted">
      <div className="px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl text-primary font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Sobre Mí
          </h2>
          <p className="mt-4 text-black font-semibold md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Soy un desarrollador apasionado por crear soluciones tecnológicas
            que impacten positivamente en la vida de las personas. Con más de X
            años de experiencia, me especializo en desarrollo full-stack con un
            enfoque particular en la arquitectura escalable y las mejores
            prácticas de desarrollo.
          </p>
          <p className="mt-4 md:text-xl/relaxed text-black font-semibold lg:text-base/relaxed xl:text-xl/relaxed">
            Mi filosofía de trabajo se basa en la colaboración, el aprendizaje
            continuo y la entrega de código limpio y mantenible. Disfruto
            enfrentando desafíos complejos y transformándolos en soluciones
            elegantes.
          </p>
        </div>
      </div>
    </section>
  );
}
