import { Helmet } from 'next/head';

interface ResourceMetaProps {
  title: string;
  description: string;
  type: string;
}

export function ResourceMeta({ title, description, type }: ResourceMetaProps) {
  return (
    <Helmet>
      <title>{title} | MindfulAI Resources</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="keywords" content={`mindfulness, bienestar, salud mental, ${type}, recursos, guías`} />
    </Helmet>
  );
}