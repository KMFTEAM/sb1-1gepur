import { PricingCard } from "@/components/pricing-card";

export function PricingSection() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Planes y Precios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Básico"
            price="9.99"
            features={[
              "Acceso básico al chat terapéutico",
              "Respuestas personalizadas",
              "Disponibilidad 24/7",
              "Soporte por email"
            ]}
            href="/signup"
          />
          <PricingCard
            title="Premium"
            price="19.99"
            features={[
              "Todo lo del plan Básico",
              "Análisis de patrones emocionales",
              "Ejercicios personalizados",
              "Soporte prioritario"
            ]}
            href="/signup"
            highlighted
          />
          <PricingCard
            title="Empresas"
            price="49.99"
            features={[
              "Todo lo del plan Premium",
              "Múltiples usuarios",
              "Reportes de bienestar",
              "Soporte dedicado"
            ]}
            href="/contact"
          />
        </div>
      </div>
    </section>
  );
}