export interface Project {
  id: string;
  name: string;
  region: 'Bogotá' | 'Cundinamarca';
  zone: string;
  city: string;
  priceFrom: number; // in COP
  priceFormatted: string; // e.g. "$149.182.800"
  areaFrom: number; // in m²
  areaFormatted: string; // e.g. "34,94 m²"
  subsidioVisEligible: boolean;
  badge?: string; // e.g. "Subsidio VIS"
  imageUrl: string;
  description: string;
  features: string[];
  bedrooms: string;
  bathrooms: string;
  address: string;
  deliveryDate?: string;
}

export interface CategoryCard {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  badge?: string;
  linkQuery?: string;
}

export interface CityCard {
  id: string;
  name: string;
  projectCount: number;
  imageUrl: string;
  region: string;
}

export interface AlliedConstructor {
  id: string;
  name: string;
  tagline: string;
  accentColor: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  suggestedChips?: string[];
  relatedProjectIds?: string[];
}

export interface FilterState {
  region: string; // "Todos" | "Bogotá" | "Cundinamarca"
  zone: string; // "Todas" | "Norte" | "Occidente" | "Sur" | "Girardot" | "Cajicá" | "Tocancipá" | "Villeta" | "Soacha" | "Sopó"
  searchName: string;
  visOnly: boolean;
}
