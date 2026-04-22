
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Copy, RefreshCw } from "lucide-react";
import { aiCopywriterForLandingPageContent, AiCopywriterInput } from "@/ai/flows/ai-copywriter-for-landing-page-content-flow";
import { useToast } from "@/hooks/use-toast";

export function AiCopywriterTool() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState<Partial<AiCopywriterInput>>({
    contentType: "headline",
    companyFocus: "Construcción civil y servicios generales en Comayagua, Honduras",
  });

  async function handleGenerate() {
    if (!formData.contentType || !formData.companyFocus) return;
    
    setLoading(true);
    try {
      const output = await aiCopywriterForLandingPageContent({
        contentType: formData.contentType as any,
        companyFocus: formData.companyFocus,
        keywords: formData.keywords,
        existingContent: formData.existingContent,
      });
      setResult(output.copy);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error de IA",
        description: "No se pudo generar el texto. Intente de nuevo.",
      });
    } finally {
      setLoading(false);
    }
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(result);
    toast({
      title: "Copiado",
      description: "El texto ha sido copiado al portapapeles.",
    });
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Dialog>
        <DialogTrigger asChild>
          <Button size="lg" className="rounded-full h-14 w-14 shadow-2xl bg-accent hover:bg-accent/90">
            <Sparkles className="w-6 h-6 text-white" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              Asistente de Copywriting (IA)
            </DialogTitle>
            <DialogDescription>
              Genera textos atractivos para tu landing page utilizando Inteligencia Artificial.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>¿Qué quieres generar?</Label>
              <Select 
                value={formData.contentType} 
                onValueChange={(v) => setFormData(prev => ({...prev, contentType: v as any}))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="headline">Título Principal (Headline)</SelectItem>
                  <SelectItem value="slogan">Slogan Corporativo</SelectItem>
                  <SelectItem value="service description">Descripción de Servicio</SelectItem>
                  <SelectItem value="company value">Valor Empresarial</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Palabras Clave (opcional)</Label>
              <Input 
                placeholder="Ej. confiable, rápido, moderno" 
                value={formData.keywords || ""}
                onChange={(e) => setFormData(prev => ({...prev, keywords: e.target.value}))}
              />
            </div>

            {result && (
              <div className="mt-6 p-4 bg-muted rounded-lg relative border border-accent/20">
                <p className="text-sm font-medium text-primary mb-2">Resultado Sugerido:</p>
                <p className="italic text-lg text-primary/80">{result}</p>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-2 right-2 h-8 w-8"
                  onClick={copyToClipboard}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button 
              className="w-full bg-accent hover:bg-accent/90" 
              onClick={handleGenerate}
              disabled={loading}
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin mr-2" />
              ) : (
                <Sparkles className="w-4 h-4 mr-2" />
              )}
              {result ? "Generar otro" : "Generar Texto"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
