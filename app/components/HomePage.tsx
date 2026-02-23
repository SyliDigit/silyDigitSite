export default function HomePage() {
    return (
      <main>
        {/* HERO */}
        <section className="section-padding text-center bg-gradient-to-br from-green-50 to-yellow-50">
          <div className="container-custom">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gradient-sylidigit">
              Construisons le futur digital de l'Afrique
            </h1>
  
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              SyliDigit accompagne les entreprises dans leur transformation
              digitale avec des solutions modernes, performantes et évolutives.
            </p>
  
            <div className="flex justify-center gap-6">
              <a
                href="/services"
                className="px-8 py-3 rounded-xl text-white font-semibold shadow-lg transition hover:scale-105"
                style={{ background: "var(--gradient-primary)" }}
              >
                Nos Services
              </a>
  
              <a
                href="/contact"
                className="px-8 py-3 rounded-xl border-2 font-semibold transition hover:bg-yellow-100"
                style={{ borderColor: "var(--color-jaune-dore)" }}
              >
                Nous contacter
              </a>
            </div>
          </div>
        </section>
  
        {/* SECTION VALEURS */}
        <section className="section-padding">
          <div className="container-custom grid md:grid-cols-3 gap-10 text-center">
            <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-vert-fonce)]">
                Innovation
              </h3>
              <p className="text-gray-600">
                Nous développons des solutions digitales innovantes adaptées aux
                réalités africaines.
              </p>
            </div>
  
            <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-vert-fonce)]">
                Performance
              </h3>
              <p className="text-gray-600">
                Nos applications sont rapides, sécurisées et évolutives.
              </p>
            </div>
  
            <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-vert-fonce)]">
                Excellence
              </h3>
              <p className="text-gray-600">
                Nous visons toujours la qualité premium dans chaque projet.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }