export default function AboutPage() {
    return (
      <main className="section-padding">
        <div className="container-custom">
  
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-sylidigit mb-10 text-center">
            À propos de SyliDigit
          </h1>
  
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[var(--color-vert-fonce)]">
                Notre Mission
              </h2>
              <p className="text-gray-600 mb-6">
                Accompagner les entreprises africaines dans leur transformation
                digitale grâce à des solutions modernes, sécurisées et évolutives.
              </p>
  
              <h2 className="text-2xl font-semibold mb-4 text-[var(--color-vert-fonce)]">
                Notre Vision
              </h2>
              <p className="text-gray-600">
                Devenir un acteur majeur du digital en Afrique en proposant
                des solutions innovantes adaptées aux réalités locales.
              </p>
            </div>
  
            <div className="p-10 rounded-3xl shadow-xl bg-gradient-to-br from-green-50 to-yellow-50">
              <h3 className="text-xl font-bold mb-4">
                Pourquoi choisir SyliDigit ?
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>✔ Solutions modernes</li>
                <li>✔ Développement sécurisé</li>
                <li>✔ Performance & scalabilité</li>
                <li>✔ Support professionnel</li>
              </ul>
            </div>
  
          </div>
        </div>
      </main>
    );
  }