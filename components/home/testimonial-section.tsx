import { TestimonialCard } from "@/components/testimonial-card";

export function TestimonialSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros usuarios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            name="María G."
            text="MindfulAI me ha ayudado enormemente con mi ansiedad. Es increíble tener apoyo disponible en cualquier momento."
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2574"
          />
          <TestimonialCard
            name="Carlos R."
            text="La capacidad de la IA para entender mis preocupaciones y ofrecer perspectivas útiles es sorprendente."
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2574"
          />
          <TestimonialCard
            name="Ana P."
            text="Gracias a MindfulAI he desarrollado mejores hábitos de autocuidado y manejo del estrés."
            image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2574"
          />
        </div>
      </div>
    </section>
  );
}