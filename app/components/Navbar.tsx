"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projets", href: "/projects" },
    { name: "Membres", href: "/members" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center shrink-0">
  <div className="relative h-20 md:h-24 w-[280px] md:w-[380px]">
    <Image
      src="/logo.png"
      alt="Logo SyliDigit"
      fill
      className="object-contain"
      priority
    />
  </div>
</Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group transition"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[var(--color-vert-fonce)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col items-center py-6 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-[var(--color-vert-fonce)] transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}