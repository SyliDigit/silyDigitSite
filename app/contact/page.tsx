export default function ContactPage() {
    return (
      <main className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl">
  
          <h1 className="text-4xl font-bold text-center text-gradient-sylidigit mb-12">
            Contactez-nous
          </h1>
  
          <form className="bg-white p-10 rounded-3xl shadow-lg space-y-6">
            
            <div>
              <label className="block mb-2 font-medium">Nom</label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Votre nom"
              />
            </div>
  
            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Votre email"
              />
            </div>
  
            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                rows={4}
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Votre message"
              />
            </div>
  
            <button
              type="submit"
              className="w-full py-3 rounded-xl text-white font-semibold transition hover:scale-105"
              style={{ background: "var(--gradient-primary)" }}
            >
              Envoyer le message
            </button>
  
          </form>
  
        </div>
      </main>
    );
  }