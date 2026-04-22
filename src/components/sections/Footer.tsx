
"use client";

import { Home } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-secondary p-1.5 rounded-md">
              <Home className="w-5 h-5 text-primary" />
            </div>
            <span className="text-lg font-bold font-headline uppercase tracking-tight">
              Servicios y Construcciones <span className="text-secondary">RP</span>
            </span>
          </div>
          
          <p className="max-w-md text-slate-400 mb-8 leading-relaxed">
            Especialistas en construcción y servicios integrales en la zona central de Honduras. 
            Calidad que construye el futuro.
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium text-slate-300 mb-8">
            <span>Comayagua, Honduras</span>
            <span>+504 9739-4593</span>
            <span>reconco.gabriel@gmail.com</span>
          </div>
          
          <div className="w-full h-px bg-white/5 mb-8"></div>
          
          <p className="text-slate-500 text-sm">
            &copy; {year} <strong>Servicios y Construcciones RP</strong>. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
