export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: 'apartment' | 'house' | 'villa' | 'condo';
  images: string[];
  description: string;
  amenities: string[];
  listingDate: string;
  agent: {
    name: string;
    phone: string;
    email: string;
    image: string;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'builder' | 'broker';
  phone?: string;
  avatar?: string;
}

export interface SearchFilters {
  location: string;
  priceRange: {
    min: number;
    max: number;
  };
  propertyType: string;
  bedrooms: number;
}