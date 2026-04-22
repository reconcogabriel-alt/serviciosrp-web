
"use client";

import { CheckCircle2 } from "lucide-react";

const values = [
  { name: "Puntualidad", desc: "Entregamos cada fase del proyecto en los tiempos acordados." },
  { name: "Integridad", desc: "Actuamos con honestidad y transparencia en toda negociación." },
  { name: "Responsabilidad", desc: "Cuidamos la seguridad de nuestro personal y del entorno." },
  { name: "Excelencia", desc: "No nos conformamos con menos que la perfección técnica." },
  { name: "Innovación", desc: "Aplicamos las mejores tecnologías y métodos constructivos." },
  { name: "Compromiso", desc: "Su satisfacción es nuestro principal motor de trabajo." },
];

export function Values() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-headline text-primary mb-4">Valores Institucionales</h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-border/50 flex items-start gap-4 hover:shadow-md transition-shadow duration-300">
              <div className="bg-secondary/10 p-2 rounded-full">
                <CheckCircle2 className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-primary text-lg mb-1">{val.name}</h4>
                <p className="text-muted-foreground leading-relaxed">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
