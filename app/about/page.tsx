import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Brain, Heart, Users, Trophy } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Sobre MindfulAI</h1>
        <p className="text-xl text-muted-foreground">
          Transformando el acceso a la salud mental a través de la tecnología y la empatía
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="relative h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2500"
            alt="Equipo MindfulAI"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Nuestra Misión</h2>
          <p className="text-muted-foreground">
            En MindfulAI, creemos que todos merecen acceso a apoyo emocional de calidad. 
            Nuestra misión es democratizar el acceso a la salud mental combinando la última 
            tecnología en IA con principios terapéuticos probados.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 text-center">
              <Users className="h-8 w-8 mx-auto text-primary mb-2" />
              <h3 className="font-semibold">+50,000</h3>
              <p className="text-sm text-muted-foreground">Usuarios Activos</p>
            </Card>
            <Card className="p-4 text-center">
              <Trophy className="h-8 w-8 mx-auto text-primary mb-2" />
              <h3 className="font-semibold">98%</h3>
              <p className="text-sm text-muted-foreground">Satisfacción</p>
            </Card>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <Card className="p-6 text-center">
          <Brain className="h-12 w-12 mx-auto text-primary mb-4" />
          <h3 className="font-semibold mb-2">Tecnología Avanzada</h3>
          <p className="text-sm text-muted-foreground">
            IA de última generación para un apoyo personalizado
          </p>
        </Card>
        <Card className="p-6 text-center">
          <Heart className="h-12 w-12 mx-auto text-primary mb-4" />
          <h3 className="font-semibold mb-2">Enfoque Humano</h3>
          <p className="text-sm text-muted-foreground">
            Combinamos tecnología con empatía y comprensión
          </p>
        </Card>
      </div>
    </div>
  );
}