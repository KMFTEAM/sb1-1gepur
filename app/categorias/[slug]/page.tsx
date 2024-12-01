import { notFound } from "next/navigation";
import { categories, products } from "@/lib/data";
import ProductGrid from "@/components/products/product-grid";
import { ProductFilters } from "@/components/products/product-filters";
import { CategoryHeader } from "@/components/categories/category-header";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.id,
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find((cat) => cat.id === params.slug);
  
  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter(
    (product) => product.category === category.id
  );

  return (
    <div className="container py-8">
      <CategoryHeader category={category} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <aside className="md:col-span-1">
          <ProductFilters />
        </aside>
        <div className="md:col-span-3">
          <ProductGrid products={categoryProducts} />
        </div>
      </div>
    </div>
  );
}