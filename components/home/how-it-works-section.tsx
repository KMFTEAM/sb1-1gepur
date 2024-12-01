export function HowItWorksSection() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Cómo Funciona</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Step number={1} title="Regístrate" description="Crea tu cuenta en segundos" />
          <Step number={2} title="Elige un Plan" description="Selecciona el plan que mejor se adapte a ti" />
          <Step number={3} title="Inicia el Chat" description="Comienza tu conversación terapéutica" />
          <Step number={4} title="Crece y Mejora" description="Recibe apoyo continuo en tu desarrollo personal" />
        </div>
      </div>
    </section>
  );
}

function Step({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <span className="text-2xl font-bold text-primary">{number}</span>
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}