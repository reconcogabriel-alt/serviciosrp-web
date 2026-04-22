
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Services } from "@/components/sections/Services";
import { AboutUs } from "@/components/sections/AboutUs";
import { Values } from "@/components/sections/Values";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import { AiCopywriterTool } from "@/components/AiCopywriterTool";

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
    </main>
  );
}
