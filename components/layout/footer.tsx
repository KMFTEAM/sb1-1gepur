import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4">Sobre Nosotros</h3>
          <ul className="space-y-2">
            <li><Link href="/sobre-nosotros">Quiénes somos</Link></li>
            <li><Link href="/trabaja-con-nosotros">Trabaja con nosotros</Link></li>
            <li><Link href="/tiendas">Nuestras tiendas</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold mb-4">Atención al Cliente</h3>
          <ul className="space-y-2">
            <li><Link href="/ayuda">Centro de ayuda</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
            <li><Link href="/devoluciones">Devoluciones</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold mb-4">Información Legal</h3>
          <ul className="space-y-2">
            <li><Link href="/privacidad">Política de privacidad</Link></li>
            <li><Link href="/cookies">Política de cookies</Link></li>
            <li><Link href="/condiciones">Condiciones de uso</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold mb-4">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-4">
            <h4 className="font-bold mb-2">Newsletter</h4>
            <p className="text-sm mb-2">Recibe nuestras ofertas y novedades</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-3 py-2 border rounded-md"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
                Suscribir
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="border-t">
        <div className="container py-6 text-center text-sm">
          <p>© 2024 BonMarket. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}