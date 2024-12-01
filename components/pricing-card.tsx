import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  href: string;
  highlighted?: boolean;
}

export function PricingCard({ title, price, features, href, highlighted = false }: PricingCardProps) {
  return (
    <Card className={`p-6 ${highlighted ? 'border-primary shadow-lg' : ''}`}>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-3xl font-bold">{price}€</span>
        <span className="text-muted-foreground">/mes</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full" variant={highlighted ? "default" : "outline"} asChild>
        <Link href={href}>
          Comenzar
        </Link>
      </Button>
    </Card>
  );
}