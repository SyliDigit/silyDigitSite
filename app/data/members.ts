export interface Member {
    id: number;
    name: string;
    role: string;
    bio: string;
    image: string;
  }
  
  export const members: Member[] = [
    {
      id: 1,
      name: "Sow Mamadou",
      role: "Founder & CEO",
      bio: "Passionate about digital transformation and innovation in Africa.",
      image: "/menbre.jpg",
    },
    {
      id: 2,
      name: "Jane Doe",
      role: "Lead Developer",
      bio: "Full-stack engineer specialized in scalable web applications.",
      image: "/menbre.jpg",
    },
    {
      id: 3,
      name: "John Smith",
      role: "Product Designer",
      bio: "Designing elegant and intuitive user experiences.",
      image: "/menbre.jpg",
    },
  ];