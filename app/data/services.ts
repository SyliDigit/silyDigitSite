export interface Service {
    id: number;
    title: string;
    description: string;
  }
  
  export const services: Service[] = [
    {
      id: 1,
      title: "Développement Web",
      description: "Création de sites et applications modernes.",
    },
    {
      id: 2,
      title: "Applications Mobile",
      description: "Applications Android et iOS performantes.",
    },
    {
      id: 3,
      title: "Solutions SaaS",
      description: "Plateformes digitales pour entreprises.",
    },
  ];