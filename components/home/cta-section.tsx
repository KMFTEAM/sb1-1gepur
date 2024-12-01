import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-6">Comienza tu viaje hacia el bienestar emocional</h2>
        <p className="text-xl mb-8 opacity-90">Únete a miles de personas que ya han mejorado su salud mental con MindfulAI</p>
        <Button size="lg" variant="secondary" asChild>
          <Link href="/signup">Comenzar Ahora</Link>
        </Button>
      </div>
    </section>
  );
}