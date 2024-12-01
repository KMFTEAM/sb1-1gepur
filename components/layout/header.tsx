"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageSquare, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="bg-primary text-primary-foreground py-1">
        <div className="container text-sm flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span>Teléfono: 900 500 400</span>
            <span>Email: info@mindfulai.com</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/about">Sobre nosotros</Link>
            <Link href="/help">Ayuda</Link>
          </div>
        </div>
      </div>

      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4">
                <Link href="/chat">Chat Terapéutico</Link>
                <Link href="/resources">Recursos</Link>
                <Link href="/pricing">Precios</Link>
                <Link href="/blog">Blog</Link>
              </nav>
            </SheetContent>
          </Sheet>
          
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">MindfulAI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/chat" className="text-sm font-medium hover:text-primary">Chat Terapéutico</Link>
            <Link href="/resources" className="text-sm font-medium hover:text-primary">Recursos</Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-primary">Precios</Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary">Blog</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {isSearchOpen ? (
            <div className="flex items-center gap-2">
              <Input
                type="search"
                placeholder="Buscar recursos..."
                className="w-[200px] md:w-[300px]"
              />
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                ×
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
            </Button>
          )}
          
          <Link href="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          
          <Link href="/chat">
            <Button>
              <MessageSquare className="h-5 w-5 mr-2" />
              Iniciar Chat
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}