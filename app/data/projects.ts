export interface Project {
    id: number;
    name: string;
    description: string;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      name: "App Restaurant",
      description: "Solution digitale pour restaurants.",
    },
    {
      id: 2,
      name: "Plateforme E-learning",
      description: "Système de formation en ligne.",
    },
  ];