import { Category } from "@/lib/types";
import Image from "next/image";

interface CategoryHeaderProps {
  category: Category;
}

export function CategoryHeader({ category }: CategoryHeaderProps) {
  return (
    <div className="relative h-[200px] rounded-lg overflow-hidden">
      <Image
        src={category.image}
        alt={category.name}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
          <p className="text-lg">{category.description}</p>
        </div>
      </div>
    </div>
  );
}