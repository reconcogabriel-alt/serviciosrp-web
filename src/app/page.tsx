
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Services } from "@/components/sections/Services";
import { AboutUs } from "@/components/sections/AboutUs";
import { Values } from "@/components/sections/Values";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import { AiCopywriterTool } from "@/components/AiCopywriterTool";
import { FinanzasButton } from "@/components/FinanzasButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StatsBar />
      <Services />
      <AboutUs />
      <Values />
      <ContactForm />
      <Footer />
      
      {/* Admin/Internal Tool: AI Copywriter */}
      <AiCopywriterTool />
       {/* Admin/Internal Tool: Acceso a Finanzas Personales */}
      <FinanzasButton />
Baja y dale Commit changes (directo a main).

Eso dispara el despliegue automático en Firebase App Hosting. En unos minutos entra a serviciosrp.com y deberías ver un botón redondo azul (ícono de billetera) flotando abajo a la izquierda. Avísame cuando lo veas o si algo no aparece.
    </main>
  );
}
