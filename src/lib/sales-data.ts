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
    description: 'Paginas de aterrizaje disenadas para convertir visitantes en pacientes de tu clinica dental.',
    icon: 'Layout',
    features: [
      'Diseno profesional y moderno',
      '100% responsive para moviles',
      'Formulario de contacto',
      'Boton WhatsApp integrado',
      'Panel autoadministrable'
    ]
  },
  {
    id: 'sitio-web',
    name: 'Sitios Web Completos',
    description: 'Sitios web con multiples paginas para mostrar todos tus servicios dentales.',
    icon: 'Globe',
    features: [
      'Multiples paginas incluidas',
      'Galeria de tratamientos',
      'Sistema de citas online',
      'Blog para pacientes',
      'Panel de administracion'
    ]
  },
  {
    id: 'ecommerce',
    name: 'Tienda Online',
    description: 'Vende productos dentales y gestiona reservas directamente desde tu web.',
    icon: 'ShoppingCart',
    features: [
      'Catalogo de productos',
      'Pasarela de pagos',
      'Sistema de inventario',
      'Reservas automaticas',
      'Facturacion digital'
    ]
  },
  {
    id: 'soporte',
    name: 'Asesoria Incluida',
    description: 'Te ensenamos a usar tu panel y te asesoramos por todo un ano.',
    icon: 'Headphones',
    features: [
      'Capacitacion personalizada',
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
    name: 'Basico',
    price: 400000,
    period: 'Un solo pago anual',
    description: 'Ideal para dentistas que quieren empezar a tener presencia online.',
    features: [
      'Landing page profesional',
      'Dominio .com incluido 1 ano',
      'Hosting incluido 1 ano',
      'Panel autoadministrable',
      'Formulario de contacto',
      'Boton WhatsApp flotante',
      'Certificado SSL de seguridad',
      'Mantenimiento gratis 1 ano',
      'Asesoria por 1 ano'
    ],
    highlighted: ['Dominio .com incluido', 'Hosting incluido', 'Mantenimiento gratis'],
    recommended: false,
    buttonText: 'Lo Quiero'
  },
  {
    id: 'profesional',
    name: 'Profesional',
    price: 650000,
    period: 'Un solo pago anual',
    description: 'Perfecto para clinicas que quieren destacar y conseguir mas pacientes.',
    features: [
      'Sitio web hasta 5 paginas',
      'Dominio .com incluido 1 ano',
      'Hosting incluido 1 ano',
      'Panel autoadministrable',
      'Sistema de citas online',
      'Galeria de tratamientos',
      'Blog integrado',
      'SEO optimizado para Google',
      'Formulario de contacto',
      'Boton WhatsApp flotante',
      'Certificado SSL de seguridad',
      'Mantenimiento gratis 1 ano',
      'Asesoria por 1 ano'
    ],
    highlighted: ['Sistema de citas online', 'SEO optimizado', 'Hasta 5 paginas'],
    recommended: true,
    buttonText: 'Mas Popular'
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 1000000,
    period: 'Un solo pago anual',
    description: 'Solucion completa para clinicas grandes que quieren dominar su mercado.',
    features: [
      'Sitio web paginas ilimitadas',
      'Dominio .com incluido 1 ano',
      'Hosting incluido 1 ano',
      'Panel autoadministrable',
      'Tienda online integrada',
      'Sistema de reservas',
      'Galeria de casos de exito',
      'Blog completo',
      'SEO avanzado',
      'Marketing digital basico',
      'Pasarela de pagos',
      'Facturacion automatica',
      'Certificado SSL de seguridad',
      'Mantenimiento gratis 1 ano',
      'Asesoria por 1 ano'
    ],
    highlighted: ['Tienda online', 'Paginas ilimitadas', 'Marketing digital'],
    recommended: false,
    buttonText: 'Contactar'
  }
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Carlos Martinez',
    role: 'Director',
    clinic: 'Clinica Dental Sonrisa',
    content: 'Desde que tengo mi pagina web, mis citas han aumentado un 40%. Los pacientes me encuentran facilmente en Google y confian mas en mi trabajo. El panel es muy facil de usar.',
    rating: 5,
    image: '/testimonials/dr-martinez.jpg'
  },
  {
    id: '2',
    name: 'Dra. Maria Gonzalez',
    role: 'Ortodoncista',
    clinic: 'Ortodoncia Premium',
    content: 'Excelente servicio y atencion personalizada. La pagina web quedo exactamente como la imagine. Mis pacientes pueden agendar citas facilmente y yo administro todo desde el panel.',
    rating: 5,
    image: '/testimonials/dra-gonzalez.jpg'
  },
  {
    id: '3',
    name: 'Dr. Roberto Sanchez',
    role: 'Propietario',
    clinic: 'Dental Care Center',
    content: 'Invertir en una pagina web fue la mejor decision para mi clinica. Ahora compito con clinicas mas grandes y atraigo pacientes de toda la ciudad. No necesito agencia, yo mismo la administro.',
    rating: 5,
    image: '/testimonials/dr-sanchez.jpg'
  }
]

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Que incluye el dominio y hosting?',
    answer: 'Incluimos tu dominio .com por un ano y el hosting donde estara alojada tu pagina web. No tienes que preocuparte por nada tecnico, nosotros nos encargamos de todo.'
  },
  {
    id: '2',
    question: 'Que significa que es autoadministrable?',
    answer: 'Tu pagina web tiene un panel de control facil de usar. Puedes cambiar textos, imagenes, agregar servicios, publicar en el blog y gestionar reservas sin conocimientos tecnicos. No necesitas contratar una agencia.'
  },
  {
    id: '3',
    question: 'Como funciona el mantenimiento gratis?',
    answer: 'Durante el primer ano, nosotros nos encargamos de las actualizaciones de seguridad, respaldos automaticos y cualquier correccion tecnica. Tu pagina siempre funcionara correctamente.'
  },
  {
    id: '4',
    question: 'En que consiste la asesoria por un ano?',
    answer: 'Te ensenamos a usar tu panel, creamos videos tutoriales para ti, y estaremos disponibles por WhatsApp para resolver cualquier duda. Tambien te damos tips para conseguir mas pacientes.'
  },
  {
    id: '5',
    question: 'Puedo agregar mas paginas despues?',
    answer: 'Si, desde tu panel puedes crear nuevas paginas facilmente. Si tienes el plan Basico y necesitas mas paginas, puedes actualizar al plan Profesional pagando la diferencia.'
  },
  {
    id: '6',
    question: 'Que pasa despues del primer ano?',
    answer: 'Despues del primer ano, la renovacion del dominio y hosting tiene un costo muy bajo (aproximadamente $80.000 COP al ano). El mantenimiento continua siendo gratis para ti.'
  }
]
