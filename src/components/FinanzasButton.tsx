"use client";

import { Wallet } from "lucide-react";

const FINANZAS_URL = "http://l8wgsgsc4ss0w48sog0oc40s.144.91.101.156.sslip.io";

export function FinanzasButton() {
  return (
    
      href={FINANZAS_URL}
      target="_blank"
      rel="noopener noreferrer"
      title="Finanzas Personales (acceso interno)"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center h-14 w-14 rounded-full shadow-2xl bg-primary hover:bg-primary/90 transition-colors"
    >
      <Wallet className="w-6 h-6 text-white" />
    </a>
  );
}
