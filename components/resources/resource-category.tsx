import { Card } from "@/components/ui/card";
import { ResourceType } from "@/lib/types";
import { ResourceCard } from "./resource-card";

interface ResourceCategoryProps {
  title: string;
  description: string;
  resources: ResourceType[];
}

export function ResourceCategory({ title, description, resources }: ResourceCategoryProps) {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-3">{title}</h2>
        <p className="text-muted-foreground text-lg">{description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} {...resource} />
        ))}
      </div>
    </section>
  );
}