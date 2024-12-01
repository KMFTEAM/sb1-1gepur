import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    title: "Cómo Manejar la Ansiedad en el Día a Día",
    excerpt: "Descubre técnicas prácticas y efectivas para gestionar la ansiedad y mantener la calma en situaciones estresantes.",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2500",
    category: "Salud Mental",
    date: "2024-02-15"
  },
  {
    title: "La Importancia del Autocuidado",
    excerpt: "Aprende por qué el autocuidado es fundamental para tu bienestar mental y cómo incorporarlo en tu rutina diaria.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2500",
    category: "Bienestar",
    date: "2024-02-10"
  },
  {
    title: "Mindfulness para Principiantes",
    excerpt: "Una guía completa para comenzar tu práctica de mindfulness y mejorar tu consciencia presente.",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2500",
    category: "Mindfulness",
    date: "2024-02-05"
  }
];

export default function BlogPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Blog de Bienestar Mental</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <Badge className="mb-2">{post.category}</Badge>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <Link href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`} className="text-primary hover:underline">
                  Leer más
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}