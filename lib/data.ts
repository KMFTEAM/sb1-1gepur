import { Product, Category } from './types';

export const categories: Category[] = [
  {
    id: "frescos",
    name: "Frescos",
    href: "/categorias/frescos",
    image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2574",
    description: "Productos frescos de temporada"
  },
  {
    id: "despensa",
    name: "Despensa",
    href: "/categorias/despensa",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=2574",
    description: "Productos básicos para tu despensa"
  },
  {
    id: "bebidas",
    name: "Bebidas",
    href: "/categorias/bebidas",
    image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?q=80&w=2574",
    description: "Refrescos, agua y bebidas alcohólicas"
  },
  {
    id: "limpieza",
    name: "Limpieza",
    href: "/categorias/limpieza",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=2574",
    description: "Productos de limpieza para el hogar"
  }
];

export const products: Product[] = [
  {
    id: "platanos",
    name: "Plátanos de Canarias",
    description: "Plátanos frescos de origen canario",
    price: 1.99,
    originalPrice: 2.49,
    discount: 20,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=2574",
    category: "frescos",
    stock: 100
  },
  {
    id: "leche",
    name: "Leche Entera 1L",
    description: "Leche fresca de primera calidad",
    price: 0.89,
    originalPrice: 1.19,
    discount: 25,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=2574",
    category: "frescos",
    stock: 200
  },
  {
    id: "arroz",
    name: "Arroz Redondo 1kg",
    description: "Arroz de grano redondo",
    price: 1.29,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2574",
    category: "despensa",
    stock: 150
  },
  {
    id: "detergente",
    name: "Detergente Líquido 3L",
    description: "Detergente concentrado para lavadora",
    price: 5.99,
    originalPrice: 7.49,
    discount: 20,
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=2574",
    category: "limpieza",
    stock: 75
  },
  {
    id: "refresco-cola",
    name: "Refresco de Cola 2L",
    description: "Refresco de cola sin azúcar",
    price: 1.49,
    image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?q=80&w=2574",
    category: "bebidas",
    stock: 120
  }
];