import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { ResourceType } from "@/lib/types";
import Image from "next/image";

export function ResourceCard({ title, description, image, downloadUrl, type }: ResourceType) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button className="w-full" variant={type === "premium" ? "default" : "outline"}>
          <Download className="mr-2 h-4 w-4" />
          {type === "premium" ? "Descargar Pro" : "Descargar Gratis"}
        </Button>
      </div>
    </Card>
  );
}