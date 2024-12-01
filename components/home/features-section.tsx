import { Card } from "@/components/ui/card";
import { Brain, Shield, Clock } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir MindfulAI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6">
            <Brain className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">IA Avanzada</h3>
            <p className="text-muted-foreground">Tecnología de vanguardia para proporcionar respuestas empáticas y personalizadas.</p>
          </Card>
          <Card className="p-6">
            <Shield className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">100% Confidencial</h3>
            <p className="text-muted-foreground">Tus conversaciones están encriptadas y son completamente privadas.</p>
          </Card>
          <Card className="p-6">
            <Clock className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Disponible 24/7</h3>
            <p className="text-muted-foreground">Accede a apoyo emocional en cualquier momento que lo necesites.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}