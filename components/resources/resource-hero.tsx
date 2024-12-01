import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function ResourceHero() {
  return (
    <div className="bg-primary/5 py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Recursos para tu Bienestar</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Descubre guías prácticas, consejos y herramientas para mejorar tu salud mental y emocional
          </p>
          <Button size="lg">
            <Download className="mr-2 h-5 w-5" />
            Descargar Guía Completa
          </Button>
        </div>
      </div>
    </div>
  );
}