
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Paintbrush, Hammer, Ruler } from "lucide-react";

const services = [
  {
    title: "Construcción Civil",
    desc: "Desarrollo de infraestructuras sólidas y edificaciones de alto estándar, desde cimientos hasta acabados finales.",
    icon: Building2,
  },
  {
    title: "Remodelaciones",
    desc: "Transformamos sus espacios existentes en entornos modernos y funcionales con acabados de primera calidad.",
    icon: Paintbrush,
  },
  {
    title: "Mantenimiento General",
    desc: "Servicios preventivos y correctivos para asegurar la longevidad y buen estado de sus instalaciones corporativas y residenciales.",
    icon: Hammer,
  },
  {
    title: "Diseño y Planificación",
    desc: "Asesoría experta en planos, presupuestos y gestión de proyectos para materializar su visión con precisión.",
    icon: Ruler,
  },
];

export function Services() {
  return (
    <section className="py-24 bg-background" id="servicios">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-headline text-primary mb-4">Nuestros Servicios</h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Ofrecemos soluciones integrales en el sector de la construcción, 
            adaptándonos a las necesidades específicas de cada cliente con profesionalismo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <Card key={idx} className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
              <CardHeader className="pt-8 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-headline text-primary text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <p className="text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
