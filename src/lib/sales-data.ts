export interface Service {
  id: string
  name: string
  description: string
  icon: string
  features: string[]
}

export interface PricingPlan {
  id: string
  name: string
  price: number
  priceUSD: number
  period: string
  description: string
  features: string[]
  highlighted: string[]
  recommended: boolean
  buttonText: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  clinic: string
  content: string
  rating: number
  image: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export const services: Service[] = [
  {
    id: 'landing-page',
    name: 'Landing Pages',
    description: 'Páginas de aterrizaje diseñadas para convertir visitantes en pacientes de tu clínica dental.',
    icon: 'Layout',
    features: [
      'Diseño profesional y moderno',
      '100% responsive para móviles',
      'Formulario de contacto',
      'Botón WhatsApp integrado',
      'Panel autoadministrable'
    ]
  },
  {
    id: 'sitio-web',
    name: 'Sitios Web Completos',
    description: 'Sitios web con múltiples páginas para mostrar todos tus servicios dentales.',
    icon: 'Globe',
    features: [
      'Múltiples páginas incluidas',
      'Galería de tratamientos',
      'Sistema de citas online',
      'Blog para pacientes',
      'Panel de administración'
    ]
  },
  {
    id: 'ecommerce',
    name: 'Tienda Online',
    description: 'Vende productos dentales y gestiona reservas directamente desde tu web.',
    icon: 'ShoppingCart',
    features: [
      'Catálogo de productos',
      'Pasarela de pagos',
      'Sistema de inventario',
      'Reservas automáticas',
      'Facturación digital'
    ]
  },
  {
    id: 'soporte',
    name: 'Asesoría Incluida',
    description: 'Te enseñamos a usar tu panel y te asesoramos por todo un año.',
    icon: 'Headphones',
    features: [
      'Capacitación personalizada',
      'Videos tutoriales',
      'Soporte por WhatsApp',
      'Actualizaciones gratis',
      'Sin costos adicionales'
    ]
  }
]

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basico',
    name: 'Básico',
    price: 400000,
    priceUSD: 100,
    period: 'Un solo pago anual',
    description: 'Ideal para dentistas que quieren empezar a tener presencia online.',
    features: [
      'Landing page profesional',
      'Dominio .com incluido 1 año',
      'Hosting incluido 1 año',
      'Panel autoadministrable',
      'Formulario de contacto',
      'Botón WhatsApp flotante',
      'Certificado SSL de seguridad',
      'Mantenimiento gratis 1 año',
      'Asesoría por 1 año'
    ],
    highlighted: ['Dominio .com incluido', 'Hosting incluido', 'Mantenimiento gratis'],
    recommended: false,
    buttonText: 'Lo Quiero'
  },
  {
    id: 'profesional',
    name: 'Profesional',
    price: 650000,
    priceUSD: 165,
    period: 'Un solo pago anual',
    description: 'Perfecto para clínicas que quieren destacar y conseguir más pacientes.',
    features: [
      'Sitio web hasta 5 páginas',
      'Dominio .com incluido 1 año',
      'Hosting incluido 1 año',
      'Panel autoadministrable',
      'Sistema de citas online',
      'Galería de tratamientos',
      'Blog integrado',
      'SEO optimizado para Google',
      'Formulario de contacto',
      'Botón WhatsApp flotante',
      'Certificado SSL de seguridad',
      'Mantenimiento gratis 1 año',
      'Asesoría por 1 año'
    ],
    highlighted: ['Sistema de citas online', 'SEO optimizado', 'Hasta 5 páginas'],
    recommended: true,
    buttonText: 'Más Popular'
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 1000000,
    priceUSD: 250,
    period: 'Un solo pago anual',
    description: 'Solución completa para clínicas grandes que quieren dominar su mercado.',
    features: [
      'Sitio web páginas ilimitadas',
      'Dominio .com incluido 1 año',
      'Hosting incluido 1 año',
      'Panel autoadministrable',
      'Tienda online integrada',
      'Sistema de reservas',
      'Galería de casos de éxito',
      'Blog completo',
      'SEO avanzado',
      'Marketing digital básico',
      'Pasarela de pagos',
      'Facturación automática',
      'Certificado SSL de seguridad',
      'Mantenimiento gratis 1 año',
      'Asesoría por 1 año'
    ],
    highlighted: ['Tienda online', 'Páginas ilimitadas', 'Marketing digital'],
    recommended: false,
    buttonText: 'Contactar'
  }
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Carlos Martínez',
    role: 'Director',
    clinic: 'Clínica Dental Sonrisa',
    content: 'Desde que tengo mi página web, mis citas han aumentado un 40%. Los pacientes me encuentran fácilmente en Google y confían más en mi trabajo. El panel es muy fácil de usar.',
    rating: 5,
    image: '/testimonials/dr-martinez.jpg'
  },
  {
    id: '2',
    name: 'Dra. María González',
    role: 'Ortodoncista',
    clinic: 'Ortodoncia Premium',
    content: 'Excelente servicio y atención personalizada. La página web quedó exactamente como la imaginé. Mis pacientes pueden agendar citas fácilmente y yo administro todo desde el panel.',
    rating: 5,
    image: '/testimonials/dra-gonzalez.jpg'
  },
  {
    id: '3',
    name: 'Dr. Roberto Sánchez',
    role: 'Propietario',
    clinic: 'Dental Care Center',
    content: 'Invertir en una página web fue la mejor decisión para mi clínica. Ahora compito con clínicas más grandes y atraigo pacientes de toda la ciudad. No necesito agencia, yo mismo la administro.',
    rating: 5,
    image: '/testimonials/dr-sanchez.jpg'
  }
]

export const faqs: FAQ[] = [
  {
    id: '1',
    question: '¿Qué incluye el dominio y hosting?',
    answer: 'Incluimos tu dominio .com por un año y el hosting donde estará alojada tu página web. No tienes que preocuparte por nada técnico, nosotros nos encargamos de todo.'
  },
  {
    id: '2',
    question: '¿Qué significa que es autoadministrable?',
    answer: 'Tu página web tiene un panel de control fácil de usar. Puedes cambiar textos, imágenes, agregar servicios, publicar en el blog y gestionar reservas sin conocimientos técnicos. No necesitas contratar una agencia.'
  },
  {
    id: '3',
    question: '¿Cómo funciona el mantenimiento gratis?',
    answer: 'Durante el primer año, nosotros nos encargamos de las actualizaciones de seguridad, respaldos automáticos y cualquier corrección técnica. Tu página siempre funcionará correctamente.'
  },
  {
    id: '4',
    question: '¿En qué consiste la asesoría por un año?',
    answer: 'Te enseñamos a usar tu panel, creamos videos tutoriales para ti, y estaremos disponibles por WhatsApp para resolver cualquier duda. También te damos tips para conseguir más pacientes.'
  },
  {
    id: '5',
    question: '¿Puedo agregar más páginas después?',
    answer: 'Sí, desde tu panel puedes crear nuevas páginas fácilmente. Si tienes el plan Básico y necesitas más páginas, puedes actualizar al plan Profesional pagando la diferencia.'
  },
  {
    id: '6',
    question: '¿Qué pasa después del primer año?',
    answer: 'Después del primer año, la renovación del dominio y hosting tiene un costo muy bajo (aproximadamente $80.000 COP al año). El mantenimiento continúa siendo gratis para ti.'
  }
]
