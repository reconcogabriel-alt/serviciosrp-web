
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Servicios y Construcciones RP | Comayagua, Honduras',
  description: 'Obras que perduran, soluciones que transforman. Empresa de construcción líder en Comayagua.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="font-body antialiased selection:bg-secondary/30 selection:text-primary">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
