import { ResourceType, GuideType } from "./types";

export const categories = [
  {
    id: "habitos",
    title: "Hábitos Saludables",
    description: "Desarrolla rutinas positivas para mejorar tu bienestar diario",
    resources: [
      {
        id: "morning-routine",
        title: "Rutina Matutina para el Éxito",
        description: "Establece una rutina matutina que potencie tu productividad y bienestar",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2500",
        downloadUrl: "/guides/morning-routine.pdf",
        type: "free"
      },
      {
        id: "sleep-hygiene",
        title: "Guía del Sueño Reparador",
        description: "Mejora tu calidad de sueño con técnicas probadas",
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=2500",
        downloadUrl: "/guides/sleep-guide.pdf",
        type: "premium"
      },
      {
        id: "meditation-guide",
        title: "Meditación para Principiantes",
        description: "Aprende a meditar con esta guía paso a paso",
        image: "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=2500",
        downloadUrl: "/guides/meditation.pdf",
        type: "free"
      }
    ]
  },
  {
    id: "alimentacion",
    title: "Alimentación Consciente",
    description: "Aprende a nutrir tu cuerpo y mente con una alimentación balanceada",
    resources: [
      {
        id: "mindful-eating",
        title: "Guía de Alimentación Consciente",
        description: "Transforma tu relación con la comida",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2500",
        downloadUrl: "/guides/mindful-eating.pdf",
        type: "free"
      },
      {
        id: "meal-planning",
        title: "Planificación de Comidas Saludables",
        description: "Organiza tus comidas para una mejor nutrición",
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2500",
        downloadUrl: "/guides/meal-planning.pdf",
        type: "premium"
      },
      {
        id: "mood-food",
        title: "Alimentos para el Estado de Ánimo",
        description: "Descubre cómo la alimentación afecta tu bienestar emocional",
        image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=2500",
        downloadUrl: "/guides/mood-food.pdf",
        type: "free"
      }
    ]
  },
  {
    id: "emocional",
    title: "Gestión Emocional",
    description: "Herramientas y técnicas para manejar tus emociones efectivamente",
    resources: [
      {
        id: "stress-management",
        title: "Manual Anti-Estrés",
        description: "Técnicas efectivas para manejar el estrés diario",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2500",
        downloadUrl: "/guides/stress.pdf",
        type: "free"
      },
      {
        id: "anxiety-toolkit",
        title: "Kit de Herramientas para la Ansiedad",
        description: "Recursos prácticos para momentos de ansiedad",
        image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2500",
        downloadUrl: "/guides/anxiety.pdf",
        type: "premium"
      },
      {
        id: "emotional-intelligence",
        title: "Desarrollo de Inteligencia Emocional",
        description: "Mejora tu comprensión y gestión emocional",
        image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2500",
        downloadUrl: "/guides/emotional-intelligence.pdf",
        type: "free"
      }
    ]
  }
];

export const guides: GuideType[] = [
  {
    id: "complete-wellness",
    title: "Guía Completa de Bienestar",
    description: "Un manual exhaustivo para transformar tu vida hacia un estado de bienestar integral",
    highlights: [
      "Plan de 30 días para desarrollar hábitos saludables",
      "Técnicas de meditación y mindfulness",
      "Recetas nutritivas y planificación de comidas",
      "Ejercicios de gestión emocional"
    ],
    downloadUrl: "/guides/complete-wellness.pdf",
    featured: true
  },
  {
    id: "stress-mastery",
    title: "Domina el Estrés",
    description: "Aprende a manejar el estrés y la ansiedad con técnicas probadas científicamente",
    highlights: [
      "Ejercicios de respiración y relajación",
      "Estrategias de afrontamiento",
      "Rutinas anti-estrés",
      "Plan de acción personalizable"
    ],
    downloadUrl: "/guides/stress-mastery.pdf"
  },
  {
    id: "emotional-balance",
    title: "Equilibrio Emocional",
    description: "Guía práctica para alcanzar y mantener la estabilidad emocional",
    highlights: [
      "Diario de emociones guiado",
      "Técnicas de autorregulación",
      "Ejercicios de mindfulness",
      "Estrategias de comunicación efectiva"
    ],
    downloadUrl: "/guides/emotional-balance.pdf",
    featured: true
  },
  {
    id: "healthy-habits",
    title: "Hábitos para una Vida Mejor",
    description: "Transforma tu vida desarrollando hábitos positivos y sostenibles",
    highlights: [
      "Sistema de seguimiento de hábitos",
      "Plantillas de planificación diaria",
      "Técnicas de productividad",
      "Rituales de autocuidado"
    ],
    downloadUrl: "/guides/healthy-habits.pdf"
  }
];