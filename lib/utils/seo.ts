export function generateMetadata(title: string, description: string) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'es_ES',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export function generateCanonicalUrl(path: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mindfulai.com';
  return `${baseUrl}${path}`;
}

export function generateStructuredData(type: string, data: any) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };
}