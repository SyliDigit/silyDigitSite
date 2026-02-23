import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-10">

          {/* Logo + Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="relative h-20 w-[260px] mb-4">
              <Image
                src="/logo.png"
                alt="Logo SyliDigit"
                fill
                className="object-contain"
              />
            </Link>

            <p className="text-gray-600 max-w-sm">
              Nous accompagnons les entreprises et organisations 
              dans leur transformation digitale en Afrique.
            </p>
          </div>

          {/* Navigation rapide */}
          <div className="flex flex-col items-center md:items-end gap-3 text-gray-600">
            <Link href="/" className="hover:text-black transition">
              Accueil
            </Link>
            <Link href="/services" className="hover:text-black transition">
              Services
            </Link>
            <Link href="/projects" className="hover:text-black transition">
              Projets
            </Link>
            <Link href="/contact" className="hover:text-black transition">
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} SyliDigit. Tous droits réservés.
          <div className="mt-2 text-gray-400">
            Digitalisons ensemble l'Afrique 🚀
          </div>
        </div>

      </div>
    </footer>
  );
}