export const emotionalPatterns = {
  anxiety: {
    keywords: ['ansiedad', 'nervios', 'preocupación', 'inquietud', 'estrés'],
    techniques: [
      'respiración diafragmática',
      'mindfulness',
      'ejercicio físico',
      'reestructuración cognitiva'
    ],
    responses: [
      'Entiendo que la ansiedad puede ser abrumadora. ¿Podrías decirme más sobre qué te está causando esta sensación?',
      'Es normal sentir ansiedad. Vamos a explorar juntos algunas técnicas que pueden ayudarte a manejarla.',
      'La ansiedad es una respuesta natural del cuerpo. ¿Te gustaría aprender algunas técnicas de respiración que pueden ayudarte?'
    ]
  },
  depression: {
    keywords: ['tristeza', 'depresión', 'desánimo', 'desmotivación', 'apatía'],
    techniques: [
      'activación conductual',
      'establecimiento de rutinas',
      'conexión social',
      'terapia cognitiva'
    ],
    responses: [
      'Siento que estés pasando por este momento difícil. ¿Hace cuánto tiempo te sientes así?',
      'Es importante que sepas que no estás solo/a en esto. ¿Hay algo específico que haya desencadenado estos sentimientos?',
      'A veces, dar pequeños pasos puede ayudar mucho. ¿Qué te parece si exploramos algunas actividades que podrían ayudarte?'
    ]
  },
  anger: {
    keywords: ['enojo', 'ira', 'rabia', 'frustración', 'molestia'],
    techniques: [
      'tiempo fuera',
      'técnicas de relajación',
      'expresión asertiva',
      'análisis de pensamientos'
    ],
    responses: [
      'El enojo es una emoción válida. ¿Puedes identificar qué lo ha provocado?',
      'Vamos a trabajar juntos en encontrar formas constructivas de manejar esta emoción.',
      'Es importante aprender a expresar el enojo de manera saludable. ¿Te gustaría conocer algunas técnicas?'
    ]
  }
};

export const therapeuticPhrases = {
  validation: [
    'Entiendo cómo te sientes',
    'Es completamente normal sentirse así',
    'Tu experiencia es válida',
    'Gracias por compartir esto conmigo'
  ],
  exploration: [
    '¿Podrías contarme más sobre eso?',
    '¿Cómo te hace sentir esa situación?',
    '¿Qué pensamientos vienen a tu mente cuando ocurre?',
    '¿Has notado algún patrón en estos momentos?'
  ],
  support: [
    'Estoy aquí para escucharte',
    'Vamos a trabajar juntos en esto',
    'No estás solo/a en este proceso',
    'Tu bienestar es importante'
  ]
};

export const emergencyResponses = {
  crisis: 'Si estás en crisis o tienes pensamientos de hacerte daño, es importante que busques ayuda profesional inmediata. Puedes llamar al 024 (línea de atención a la conducta suicida) disponible 24/7.',
  emergency: 'En caso de emergencia, por favor contacta inmediatamente con el 112 o acude a tu centro de emergencias más cercano.',
  resources: 'También puedes contactar con estos recursos de ayuda profesional:'
};