import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-white via-gray-50 to-white border-t mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between gap-10">

        {/* Logo + Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <Link href="/" className="relative h-24 w-[280px] md:w-[340px]">
            <Image
              src="/logo.png"
              alt="Logo SyliDigit"
              fill
              className="object-contain"
              priority
            />
          </Link>

          <p className="text-gray-600 max-w-sm leading-relaxed">
            Nous accompagnons les entreprises et organisations dans leur transformation digitale en Afrique.
          </p>

          {/* Réseaux sociaux */}
          <div className="flex gap-4 mt-2">
            <Link href="https://www.linkedin.com" target="_blank" className="hover:text-green-700 transition">
              <i className="fab fa-linkedin fa-lg"></i>
            </Link>
            <Link href="https://wa.me/123456789" target="_blank" className="hover:text-green-700 transition">
              <i className="fab fa-whatsapp fa-lg"></i>
            </Link>
            <Link href="https://github.com" target="_blank" className="hover:text-green-700 transition">
              <i className="fab fa-github fa-lg"></i>
            </Link>
          </div>
        </div>

        {/* Navigation rapide */}
        <div className="flex flex-col items-center md:items-end gap-3 text-gray-600">
          <Link href="/" className="hover:text-green-700 transition">Accueil</Link>
          <Link href="/services" className="hover:text-green-700 transition">Services</Link>
          <Link href="/projects" className="hover:text-green-700 transition">Projets</Link>
          <Link href="/contact" className="hover:text-green-700 transition">Contact</Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SyliDigit. Tous droits réservés.
        <div className="mt-1 text-gray-400">
          Digitalisons ensemble l'Afrique 🚀
        </div>
      </div>
    </footer>
  );
}