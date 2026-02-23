import { services } from "../data/services";

export default function ServicesPage() {
  return (
    <main className="section-padding bg-gray-50">
      <div className="container-custom">

        <h1 className="text-4xl font-bold text-center text-gradient-sylidigit mb-16">
          Nos Services
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold mb-4 text-[var(--color-vert-fonce)]">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}