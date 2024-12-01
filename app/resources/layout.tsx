import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recursos de Bienestar | MindfulAI',
  description: 'Descubre guías prácticas, consejos y herramientas para mejorar tu salud mental y emocional. Recursos gratuitos y premium para tu desarrollo personal.',
  keywords: 'recursos bienestar, guías salud mental, herramientas terapéuticas, desarrollo personal, mindfulness, meditación',
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}