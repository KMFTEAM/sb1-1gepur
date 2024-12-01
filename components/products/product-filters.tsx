"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { categories } from "@/lib/data";

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Categorías</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedCategories([...selectedCategories, category.id]);
                  } else {
                    setSelectedCategories(
                      selectedCategories.filter((id) => id !== category.id)
                    );
                  }
                }}
              />
              <label htmlFor={category.id}>{category.name}</label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Precio</h3>
        <Slider
          value={priceRange}
          min={0}
          max={100}
          step={1}
          onValueChange={setPriceRange}
        />
        <div className="flex justify-between mt-2">
          <span>{priceRange[0]}€</span>
          <span>{priceRange[1]}€</span>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Ofertas</h3>
        <div className="flex items-center space-x-2">
          <Checkbox id="discounted" />
          <label htmlFor="discounted">En oferta</label>
        </div>
      </div>
    </div>
  );
}