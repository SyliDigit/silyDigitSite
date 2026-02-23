import Image from "next/image";
import { members } from "../data/members";

export default function MembersPage() {
  return (
    <main className="section-padding bg-gray-50">
      <div className="container-custom">

      <h1 className="text-5xl font-bold text-center mb-16">
  L’Équipe SyliDigit
</h1>

        <div className="grid md:grid-cols-3 gap-12">
          {members.map((member) => (
            <div
              key={member.id}
              className="card-premium text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>

              <h3 className="text-2xl font-semibold">
                {member.name}
              </h3>

              <p className="text-[var(--color-jaune-dore)] font-medium mt-2">
                {member.role}
              </p>

              <p className="text-gray-600 mt-4 text-sm">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}