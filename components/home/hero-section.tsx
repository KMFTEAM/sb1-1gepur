import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-[600px]">
      <Image
        src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?q=80&w=2574"
        alt="Peaceful meditation scene"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      <div className="relative container h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6 leading-tight">Tu Compañero Terapéutico Personal con IA</h1>
          <p className="text-xl mb-8 opacity-90">Encuentra apoyo emocional, orientación y crecimiento personal con nuestro terapeuta virtual impulsado por IA, disponible 24/7.</p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/chat">Comenzar Terapia</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
              <Link href="/about">Conocer más</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}