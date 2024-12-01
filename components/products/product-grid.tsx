"use client";

import { Product } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCart } from "@/components/providers/cart-provider";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const { addItem } = useCart();

  const handleAddToCart = (product: Product) => {
    addItem({ ...product, quantity: 1 });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="group hover:shadow-lg transition-shadow">
          <div className="relative h-48">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-t-lg"
            />
            {product.discount && (
              <Badge className="absolute top-2 right-2">-{product.discount}%</Badge>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-semibold mb-2">{product.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">{product.price}€</span>
              {product.originalPrice && (
                <span className="text-sm line-through text-muted-foreground">
                  {product.originalPrice}€
                </span>
              )}
            </div>
            <Button 
              className="w-full mt-4"
              onClick={() => handleAddToCart(product)}
            >
              Añadir al carrito
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}