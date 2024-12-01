// Existing types remain...

export interface ResourceType {
  id: string;
  title: string;
  description: string;
  image: string;
  downloadUrl: string;
  type: "free" | "premium";
}

export interface GuideType {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  downloadUrl: string;
  featured?: boolean;
}