
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission or link to Formspree
    // In production, use the actual endpoint: https://formspree.io/f/your-id
    const formData = new FormData(event.currentTarget);
    
    try {
      // Mocking submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarnos. Le responderemos pronto.",
      });
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudo enviar el mensaje. Intente de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-24 bg-white" id="contacto">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-headline text-primary mb-4">Solicite un Presupuesto</h2>
            <p className="text-muted-foreground">
              Déjenos sus datos y detalles de su proyecto. Nos comunicaremos con usted a la brevedad posible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-muted/20 p-8 rounded-2xl border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre Completo</Label>
                <Input id="name" name="name" placeholder="Ej. Juan Pérez" required className="bg-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono / WhatsApp</Label>
                <Input id="phone" name="phone" placeholder="+504 9999-9999" required className="bg-white" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input id="email" name="email" type="email" placeholder="juan@ejemplo.com" required className="bg-white" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Detalles del Proyecto</Label>
              <Textarea 
                id="message" 
                name="message" 
                placeholder="Cuéntenos sobre su obra o necesidad de servicio..." 
                className="min-h-[150px] bg-white"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary text-white font-bold py-6 text-lg hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
