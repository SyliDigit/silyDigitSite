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
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container-custom flex items-center justify-between py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="SyliDigit" width={40} height={40} />
          <span className="font-bold text-xl text-gradient-sylidigit">
            SyliDigit
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[var(--color-vert-fonce)] transition"
            >
              {link.name}
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
        <div className="md:hidden bg-white border-t shadow-lg animate-fade-in">
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