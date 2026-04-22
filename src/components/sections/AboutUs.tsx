
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, PhoneCall } from "lucide-react";

export function AboutUs() {
  return (
    <section className="py-24 bg-white" id="nosotros">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold font-headline text-primary">Nuestra Trayectoria</h2>
            <div className="w-20 h-1.5 bg-secondary mb-6"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong>Servicios y Construcciones RP</strong> nació en Comayagua con la misión de elevar los estándares de construcción en la región. 
              Nos especializamos en brindar soluciones eficientes y de alta calidad para proyectos de cualquier escala.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestro compromiso con la excelencia nos ha permitido consolidarnos como un socio confiable para empresas y familias hondureñas. 
              Contamos con un equipo de profesionales apasionados por el detalle y la seguridad en cada obra.
            </p>
            
            <div className="pt-4 grid grid-cols-2 gap-6">
              <div className="border-l-4 border-secondary pl-4">
                <h4 className="font-bold text-primary mb-1">Visión</h4>
                <p className="text-sm text-muted-foreground">Ser referentes en construcción sostenible e innovación técnica.</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h4 className="font-bold text-primary mb-1">Misión</h4>
                <p className="text-sm text-muted-foreground">Transformar ideas en realidades sólidas y duraderas.</p>
              </div>
            </div>
          </div>

          {/* Contact Box */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl -z-10 transform rotate-2"></div>
            <Card className="bg-primary text-white border-none shadow-2xl rounded-2xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-2xl font-bold font-headline mb-8 border-b border-white/10 pb-4 text-secondary">Canales Directos</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <PhoneCall className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200 uppercase tracking-wider font-semibold mb-1">Teléfonos</p>
                      <p className="text-lg font-bold">+504 9739-4593</p>
                      <p className="text-lg font-bold">+504 9368-0727</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200 uppercase tracking-wider font-semibold mb-1">Correos Electrónicos</p>
                      <p className="text-lg font-medium">reconco.gabriel@gmail.com</p>
                      <p className="text-lg font-medium opacity-80">Gabriel_reconco@hotmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200 uppercase tracking-wider font-semibold mb-1">Ubicación</p>
                      <p className="text-lg font-medium">Comayagua, Col. Brisas de Altamira</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <a 
                    href="https://wa.me/50497394593" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-secondary text-primary font-bold py-4 rounded-xl hover:bg-white transition-colors duration-300"
                  >
                    Hablar por WhatsApp
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
