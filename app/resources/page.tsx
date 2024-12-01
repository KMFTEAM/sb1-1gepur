import { ResourceCategory } from "@/components/resources/resource-category";
import { DownloadableGuides } from "@/components/resources/downloadable-guides";
import { ResourceHero } from "@/components/resources/resource-hero";
import { categories } from "@/lib/resources-data";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      <ResourceHero />
      
      <div className="container py-12">
        <div className="grid gap-12">
          {categories.map((category) => (
            <ResourceCategory key={category.id} {...category} />
          ))}
        </div>
        
        <div className="mt-16">
          <DownloadableGuides />
        </div>
      </div>
    </div>
  );
}