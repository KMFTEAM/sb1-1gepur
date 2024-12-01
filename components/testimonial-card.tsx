import { Card } from "@/components/ui/card";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  text: string;
  image: string;
}

export function TestimonialCard({ name, text, image }: TestimonialCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="font-semibold">{name}</h3>
      </div>
      <p className="text-muted-foreground">{text}</p>
    </Card>
  );
}