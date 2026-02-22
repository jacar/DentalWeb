export interface Template {
  id: string;
  name: string;
  description: string;
  category: 'landing' | 'services' | 'team' | 'contact' | 'promo';
  features: string[];
  image: string;
  rating: number;
  downloads: number;
  isNew?: boolean;
  isPopular?: boolean;
}

export const templates: Template[] = [
  {
    id: 'dental-clinic-pro',
    name: 'Clinica Dental Pro',
    description: 'Landing page profesional para clinicas dentales. Incluye secciones de servicios, testimonios de pacientes y formulario de contacto integrado.',
    category: 'landing',
    features: ['Hero con video', 'Servicios destacados', 'Testimonios pacientes', 'Formulario contacto', 'Mapa ubicacion'],
    image: '/templates/dental-clinic-pro.jpg',
    rating: 4.9,
    downloads: 1250,
    isPopular: true
  },
  {
    id: 'sonrisa-perfecta',
    name: 'Sonrisa Perfecta',
    description: 'Diseno elegante especializado en tratamientos esteticos dentales. Galeria de casos de exito y precios transparentes.',
    category: 'landing',
    features: ['Galeria casos clinicos', 'Animaciones elegantes', 'Tabla de precios', 'Blog integrado'],
    image: '/templates/sonrisa-perfecta.jpg',
    rating: 4.8,
    downloads: 890,
    isNew: true
  },
  {
    id: 'servicios-dentales',
    name: 'Servicios Dentales Plus',
    description: 'Pagina completa de servicios dentales con descripciones detalladas de cada tratamiento y especialidad.',
    category: 'services',
    features: ['Tarjetas de servicios', 'Iconos medicos', 'Botones de accion', 'Seccion de precios'],
    image: '/templates/servicios-dentales.jpg',
    rating: 4.7,
    downloads: 654
  },
  {
    id: 'equipo-medico',
    name: 'Equipo Medico Dental',
    description: 'Presentacion profesional del equipo odontologico con perfiles detallados, especialidades y horarios de atencion.',
    category: 'team',
    features: ['Perfiles de doctores', 'Especialidades medicas', 'Horarios de atencion', 'Sistema de citas'],
    image: '/templates/equipo-medico.jpg',
    rating: 4.6,
    downloads: 432
  },
  {
    id: 'contacto-dental',
    name: 'Contacto Dental',
    description: 'Pagina de contacto optimizada con formulario avanzado, mapa interactivo y multiples canales de comunicacion.',
    category: 'contact',
    features: ['Formulario avanzado', 'Mapa interactivo', 'Redes sociales', 'Boton WhatsApp'],
    image: '/templates/contacto-dental.jpg',
    rating: 4.5,
    downloads: 567
  },
  {
    id: 'promociones-dentales',
    name: 'Promociones Dentales',
    description: 'Pagina de ofertas y promociones especiales para atraer nuevos pacientes a tu clinica dental.',
    category: 'promo',
    features: ['Tarjetas de promociones', 'Temporizador ofertas', 'Cupones descuento', 'Llamada a la accion'],
    image: '/templates/promociones-dentales.jpg',
    rating: 4.8,
    downloads: 789,
    isPopular: true
  },
  {
    id: 'ortodoncia-premium',
    name: 'Ortodoncia Premium',
    description: 'Landing page especializada en tratamientos de ortodoncia. Muestra resultados antes y despues de pacientes.',
    category: 'landing',
    features: ['Galeria antes/despues', 'Tipos de brackets', 'Planes de financiamiento', 'Testimonios'],
    image: '/templates/ortodoncia-premium.jpg',
    rating: 4.9,
    downloads: 1100,
    isPopular: true
  },
  {
    id: 'implantes-dentales',
    name: 'Implantes Dentales',
    description: 'Pagina informativa especializada en implantes dentales con explicacion del proceso paso a paso.',
    category: 'services',
    features: ['Proceso explicado', 'Tecnologia avanzada', 'Preguntas frecuentes', 'Videos informativos'],
    image: '/templates/implantes-dentales.jpg',
    rating: 4.7,
    downloads: 654,
    isNew: true
  },
  {
    id: 'pediatria-dental',
    name: 'Pediatria Dental Kids',
    description: 'Diseno colorido y amigable especialmente creado para clinicas dentales infantiles y pediatricas.',
    category: 'landing',
    features: ['Diseno infantil', 'Ilustraciones animadas', 'Seccion para padres', 'Juegos educativos'],
    image: '/templates/pediatria-dental.jpg',
    rating: 4.6,
    downloads: 445
  }
];

export const categories = [
  { id: 'all', name: 'Todas', icon: 'Grid3X3' },
  { id: 'landing', name: 'Landing Pages', icon: 'Layout' },
  { id: 'services', name: 'Servicios', icon: 'Briefcase' },
  { id: 'team', name: 'Equipo', icon: 'Users' },
  { id: 'contact', name: 'Contacto', icon: 'Phone' },
  { id: 'promo', name: 'Promociones', icon: 'Tag' }
];
