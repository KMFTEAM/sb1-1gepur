import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function HelpPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Centro de Ayuda</h1>

      <div className="max-w-2xl mx-auto mb-12">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">¿Cómo podemos ayudarte?</h2>
          <div className="flex gap-2">
            <Input placeholder="Buscar en la ayuda..." className="flex-1" />
            <Button>Buscar</Button>
          </div>
        </Card>
      </div>

      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Preguntas Frecuentes</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>¿Cómo funciona la terapia con IA?</AccordionTrigger>
            <AccordionContent>
              Nuestra IA utiliza tecnología avanzada para mantener conversaciones terapéuticas, 
              ofreciendo apoyo emocional y orientación basada en principios terapéuticos establecidos.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>¿Es confidencial mi información?</AccordionTrigger>
            <AccordionContent>
              Sí, toda la información compartida es completamente confidencial y está protegida 
              con encriptación de extremo a extremo.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>¿Puedo cancelar mi suscripción en cualquier momento?</AccordionTrigger>
            <AccordionContent>
              Sí, puedes cancelar tu suscripción en cualquier momento sin compromisos adicionales.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-8 p-6 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold mb-4">¿Necesitas más ayuda?</h2>
          <p className="mb-4">Nuestro equipo de soporte está disponible 24/7 para ayudarte.</p>
          <Button asChild>
            <Link href="/contact">Contactar Soporte</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}