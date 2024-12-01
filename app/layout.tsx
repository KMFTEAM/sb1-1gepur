import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { CartProvider } from '@/components/providers/cart-provider';
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MindfulAI - Tu Terapeuta Personal con IA',
  description: 'Terapia personalizada con inteligencia artificial. Conversaciones confidenciales, apoyo emocional 24/7 y orientación profesional basada en IA.',
  keywords: 'terapia online, IA terapéutica, salud mental, apoyo emocional, consejería virtual, bienestar mental, terapia con IA',
  openGraph: {
    title: 'MindfulAI - Terapia Personal con Inteligencia Artificial',
    description: 'Encuentra apoyo emocional y orientación profesional con nuestro terapeuta virtual disponible 24/7',
    images: ['/og-therapy.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
        >
          <CartProvider>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <Toaster />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}