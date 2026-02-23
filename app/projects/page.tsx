import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <main className="section-padding">
      <div className="container-custom">

        <h1 className="text-4xl font-bold text-center text-gradient-sylidigit mb-16">
          Nos Projets
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl p-8 bg-white shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-jaune-dore)]">
                {project.name}
              </h3>

              <p className="text-gray-600 mb-6">
                {project.description}
              </p>

              <button
                className="px-6 py-2 rounded-lg text-white font-semibold"
                style={{ background: "var(--gradient-primary)" }}
              >
                Voir le projet
              </button>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}