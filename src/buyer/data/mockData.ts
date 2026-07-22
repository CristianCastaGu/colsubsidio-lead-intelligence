import { Project, CategoryCard, CityCard, AlliedConstructor } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'ciudadela-maipore',
    name: 'Ciudadela Maiporé',
    region: 'Cundinamarca',
    city: 'Soacha',
    zone: 'Autopista Sur',
    priceFrom: 149182800,
    priceFormatted: '$149.182.800',
    areaFrom: 34.94,
    areaFormatted: '34,94 m²',
    subsidioVisEligible: true,
    badge: 'Subsidio VIS',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    description: 'Macroproyecto residencial autosostenible en Soacha con más de 10.000 m² de parques, zonas deportivas, colegios y ciclorrutas.',
    features: ['Ascensor', 'Salón Comunitario', 'Parque Infantil', 'Cancha Múltiple', 'Zona BBQ'],
    bedrooms: '2 a 3 hab.',
    bathrooms: '1 a 2 baños',
    address: 'Autopista Sur Km 14, Soacha',
    deliveryDate: 'Entrega Inmediata y 2026'
  },
  {
    id: 'calia',
    name: 'Calia - Fontibón',
    region: 'Bogotá',
    city: 'Bogotá',
    zone: 'Occidente (Fontibón)',
    priceFrom: 175500000,
    priceFormatted: '$175.500.000',
    areaFrom: 38.00,
    areaFormatted: '38,00 m²',
    subsidioVisEligible: true,
    badge: 'Subsidio VIS',
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
    description: 'Vive cerca a las principales vías de Bogotá Occidente (Calle 13, Av. Esperanza y Av. Cali). Torrelatitud con acabados modernos.',
    features: ['Gimnasio Equipado', 'Coworking Space', 'Terraza Verde', 'Zona Mascotas', 'Salón Social'],
    bedrooms: '2 a 3 hab.',
    bathrooms: '1 a 2 baños',
    address: 'Calle 13 con Carrera 100, Bogotá',
    deliveryDate: 'Primer Trimestre 2027'
  },
  {
    id: 'nuva-park',
    name: 'Nuva Park Suba',
    region: 'Bogotá',
    city: 'Bogotá',
    zone: 'Norte (Suba)',
    priceFrom: 195000000,
    priceFormatted: '$195.000.000',
    areaFrom: 42.15,
    areaFormatted: '42,15 m²',
    subsidioVisEligible: true,
    badge: 'Subsidio VIS',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    description: 'Exclusivo proyecto de apartamentos VIS en el Norte de Bogotá con parque privado, zonas de recreación y cercanía al Portal de Suba.',
    features: ['Piscina Cubierta', 'Gimnasio', 'Juegos Infantiles', 'Salón de Juegos', 'Bicicletero'],
    bedrooms: '2 hab. + Estudio',
    bathrooms: '2 baños',
    address: 'Av. Suba con Calle 145, Bogotá',
    deliveryDate: 'Segundo Semestre 2026'
  },
  {
    id: 'lumina-77',
    name: 'Lúmina 77',
    region: 'Bogotá',
    city: 'Bogotá',
    zone: 'Chapinero / Barrios Unidos',
    priceFrom: 210000000,
    priceFormatted: '$210.000.000',
    areaFrom: 45.30,
    areaFormatted: '45,30 m²',
    subsidioVisEligible: false,
    badge: 'Proyecto Urbano Premium',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Ubicación privilegiada cerca al distrito financiero de la Calle 72. Diseño bioclimático y amenidades de alta categoría.',
    features: ['Rooftop Barbecue', 'Lobby Tipo Hotel', 'Zona de Meditación', 'Lavandería Común'],
    bedrooms: '1 a 2 hab.',
    bathrooms: '1 a 2 baños',
    address: 'Calle 77 con Carrera 24, Bogotá',
    deliveryDate: 'Entrega en 2026'
  },
  {
    id: 'reserva-de-guayacan',
    name: 'Reserva de Guayacán',
    region: 'Cundinamarca',
    city: 'Girardot',
    zone: 'Girardot',
    priceFrom: 138000000,
    priceFormatted: '$138.000.000',
    areaFrom: 40.50,
    areaFormatted: '40,50 m²',
    subsidioVisEligible: true,
    badge: 'Subsidio VIS',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    description: 'Tu vivienda vacacional y de descanso en Girardot. Complejo de apartamentos en clima cálido con piscinas tipo club y jacuzzis.',
    features: ['Piscina de Adultos y Niños', 'Parque Acuático Infantil', 'Kioscos BBQ', 'Canchas de Vóley Playa'],
    bedrooms: '2 a 3 hab.',
    bathrooms: '2 baños',
    address: 'Vía Girardot - Nariño Km 2',
    deliveryDate: 'Entrega Inmediata'
  },
  {
    id: 'senderos-de-sopo',
    name: 'Senderos de Sopó',
    region: 'Cundinamarca',
    city: 'Sopó',
    zone: 'Sabana Norte (Sopó)',
    priceFrom: 165000000,
    priceFormatted: '$165.000.000',
    areaFrom: 44.00,
    areaFormatted: '44,00 m²',
    subsidioVisEligible: true,
    badge: 'Subsidio VIS',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    description: 'Naturaleza y tranquilidad en la Sabana de Bogotá. Apartamentos rodeados de montañas, senderos verdes y aire puro.',
    features: ['Senderos Ecológicos', 'Zona de Fogatas', 'Gimnasio al Aire Libre', 'Dog Park'],
    bedrooms: '2 a 3 hab.',
    bathrooms: '2 baños',
    address: 'Vía Sopó - Briceño Km 1.5',
    deliveryDate: 'Primer Semestre 2027'
  },
  {
    id: 'torres-de-cajica',
    name: 'Torres de Cajicá',
    region: 'Cundinamarca',
    city: 'Cajicá',
    zone: 'Sabana Norte (Cajicá)',
    priceFrom: 182000000,
    priceFormatted: '$182.000.000',
    areaFrom: 46.20,
    areaFormatted: '46,20 m²',
    subsidioVisEligible: true,
    badge: 'Subsidio VIS',
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    description: 'Proyecto residencial en el corazón de Cajicá. Excelente acceso a centros comerciales como Fontanar y transporte directo a Bogotá.',
    features: ['Piscina Climatizada', 'Sauna y Turco', 'Salón de Eventos', 'Zona Infantil'],
    bedrooms: '2 a 3 hab.',
    bathrooms: '2 baños',
    address: 'Carrera 6 con Calle 3, Cajicá',
    deliveryDate: 'Diciembre 2026'
  },
  {
    id: 'villeta-sun',
    name: 'Villeta Sun Resort',
    region: 'Cundinamarca',
    city: 'Villeta',
    zone: 'Villeta',
    priceFrom: 155000000,
    priceFormatted: '$155.000.000',
    areaFrom: 41.80,
    areaFormatted: '41,80 m²',
    subsidioVisEligible: true,
    badge: 'Subsidio VIS',
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
    description: 'Disfruta del mejor clima de Cundinamarca a solo 1.5 horas de Bogotá. Proyecto con piscina, zonas campestres y ambiente tropical.',
    features: ['Piscina Estilo Playa', 'Kiosco Social', 'Zona de Camping', 'Mirador'],
    bedrooms: '2 hab.',
    bathrooms: '2 baños',
    address: 'Vía Bogotá - Villeta Km 78',
    deliveryDate: 'Entrega en 2026'
  }
];

export const CATEGORY_CARDS: CategoryCard[] = [
  {
    id: 'los-nogales',
    title: 'Los Nogales — Bogotá Occidente',
    subtitle: 'Nuevas etapas con subsidio VIS disponible',
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
    linkQuery: 'Occidente'
  },
  {
    id: 'bogota-31',
    title: 'Bogotá — 31 proyectos',
    subtitle: 'Encuentra en el Norte, Occidente y Sur de la capital',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    linkQuery: 'Bogotá'
  },
  {
    id: 'vis-43',
    title: 'VIS — 43 proyectos',
    subtitle: 'Viviendas con subsidio de compensación Colsubsidio',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    linkQuery: 'VIS'
  },
  {
    id: 'cundinamarca-33',
    title: 'Cundinamarca — 33 proyectos',
    subtitle: 'En Soacha, Girardot, Cajicá, Villeta y Sopó',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    linkQuery: 'Cundinamarca'
  },
  {
    id: 'reserva-guayacan-card',
    title: 'Reserva de Guayacán — Girardot',
    subtitle: 'Tu apartamento vacacional en clima cálido',
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
    badge: '$ Subsidio VIS',
    linkQuery: 'Girardot'
  }
];

export const CITY_CARDS: CityCard[] = [
  {
    id: 'city-bogota',
    name: 'Bogotá',
    projectCount: 31,
    imageUrl: 'https://images.unsplash.com/photo-1583531172005-814191b8b6c0?auto=format&fit=crop&w=400&q=80',
    region: 'Bogotá'
  },
  {
    id: 'city-girardot',
    name: 'Girardot',
    projectCount: 8,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',
    region: 'Cundinamarca'
  },
  {
    id: 'city-cajica',
    name: 'Cajicá',
    projectCount: 12,
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=400&q=80',
    region: 'Cundinamarca'
  },
  {
    id: 'city-tocancipa',
    name: 'Tocancipá',
    projectCount: 7,
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80',
    region: 'Cundinamarca'
  },
  {
    id: 'city-villeta',
    name: 'Villeta',
    projectCount: 5,
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80',
    region: 'Cundinamarca'
  }
];

export const ALLIED_CONSTRUCTORS: AlliedConstructor[] = [
  { id: 'amarilo', name: 'Amarilo', tagline: 'Creamos entornos', accentColor: '#002878' },
  { id: 'ambientti', name: 'Ambientti', tagline: 'Constructora & Diseño', accentColor: '#008855' },
  { id: 'md', name: 'M+D', tagline: 'Mobiliario y Desarrollos', accentColor: '#D9251D' },
  { id: 'oikos', name: 'Oikos', tagline: 'Construyendo futuro', accentColor: '#003DA5' },
  { id: 'bolivar', name: 'Bolívar', tagline: 'Constructora Bolívar', accentColor: '#E60000' },
  { id: 'capital', name: 'Capital', tagline: 'Constructora Capital', accentColor: '#FF6B00' },
];
