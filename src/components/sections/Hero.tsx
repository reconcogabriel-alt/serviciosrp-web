
"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, Home, Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center hero-pattern text-white overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-8 flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="bg-secondary p-3 rounded-lg shadow-lg">
            <Home className="w-8 h-8 text-primary" strokeWidth={2.5} />
          </div>
          <span className="text-2xl font-bold tracking-tight font-headline uppercase">
            Servicios y Construcciones <span className="text-secondary">RP</span>
          </span>
        </div>

        {/* Tagline */}
        <div className="mb-4 inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold tracking-widest uppercase animate-in fade-in slide-in-from-bottom-2 duration-500 delay-150">
          Calidad · Compromiso · Innovación
        </div>

        {/* Headline */}
        <h1 className="max-w-4xl text-5xl md:text-7xl font-bold font-headline mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          Obras que <span className="text-secondary">perduran</span>, soluciones que transforman
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-lg md:text-xl text-blue-100/80 mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500">
          Líderes en construcción y servicios integrales en Comayagua. 
          Garantizamos excelencia en cada proyecto con un equipo altamente calificado.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 h-12">
            Conocer servicios
            <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 h-12 bg-transparent">
            Contáctenos
            <Phone className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
    </section>
  );
}
