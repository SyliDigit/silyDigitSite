export default function Footer() {
    return (
      <footer className="bg-gray-100 py-10 mt-20">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-gradient-sylidigit mb-4">
            SyliDigit
          </h2>
  
          <p className="text-gray-600 mb-4">
            © {new Date().getFullYear()} SyliDigit. Tous droits réservés.
          </p>
  
          <p className="text-sm text-gray-500">
            Digitalisons ensemble l'Afrique 🚀
          </p>
        </div>
      </footer>
    );
  }