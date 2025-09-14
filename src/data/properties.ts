import { Property } from '../types';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Apartment',
    price: 450000,
    location: 'Downtown, New York',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    type: 'apartment',
    images: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2047451/pexels-photo-2047451.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Stunning modern apartment in the heart of downtown with panoramic city views. Features high-end finishes, stainless steel appliances, and floor-to-ceiling windows.',
    amenities: ['Gym', 'Pool', 'Parking', 'Balcony', 'Concierge'],
    listingDate: '2025-01-10',
    agent: {
      name: 'Sarah Johnson',
      phone: '+1 (555) 123-4567',
      email: 'sarah@realestate.com',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  },
  {
    id: '2',
    title: 'Luxury Family Villa',
    price: 850000,
    location: 'Westfield, California',
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    type: 'villa',
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Spacious family villa with beautiful landscaping and modern amenities. Perfect for families looking for luxury and comfort in a peaceful neighborhood.',
    amenities: ['Garden', 'Pool', 'Garage', 'Study Room', 'Fireplace'],
    listingDate: '2025-01-08',
    agent: {
      name: 'Michael Chen',
      phone: '+1 (555) 987-6543',
      email: 'michael@realestate.com',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  },
  {
    id: '3',
    title: 'Cozy Suburban House',
    price: 320000,
    location: 'Maple Street, Texas',
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    type: 'house',
    images: [
      'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Charming suburban house perfect for first-time buyers. Features a spacious backyard, updated kitchen, and close proximity to schools and shopping.',
    amenities: ['Backyard', 'Garage', 'Updated Kitchen', 'Near Schools'],
    listingDate: '2025-01-05',
    agent: {
      name: 'Emily Rodriguez',
      phone: '+1 (555) 456-7890',
      email: 'emily@realestate.com',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  },
  {
    id: '4',
    title: 'Penthouse with City View',
    price: 1200000,
    location: 'Manhattan, New York',
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    type: 'condo',
    images: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2029671/pexels-photo-2029671.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Exclusive penthouse with breathtaking city views. Features premium finishes, private terrace, and access to building amenities.',
    amenities: ['Terrace', 'City View', 'Concierge', 'Gym', 'Valet Parking'],
    listingDate: '2025-01-12',
    agent: {
      name: 'David Kim',
      phone: '+1 (555) 234-5678',
      email: 'david@realestate.com',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  },
  {
    id: '5',
    title: 'Waterfront Condo',
    price: 675000,
    location: 'Miami Beach, Florida',
    bedrooms: 2,
    bathrooms: 2,
    area: 1600,
    type: 'condo',
    images: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Beautiful waterfront condo with stunning ocean views. Perfect for those seeking a coastal lifestyle with modern amenities.',
    amenities: ['Ocean View', 'Beach Access', 'Pool', 'Spa', 'Marina'],
    listingDate: '2025-01-07',
    agent: {
      name: 'Lisa Martinez',
      phone: '+1 (555) 345-6789',
      email: 'lisa@realestate.com',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  },
  {
    id: '6',
    title: 'Historic Townhouse',
    price: 550000,
    location: 'Boston, Massachusetts',
    bedrooms: 3,
    bathrooms: 2,
    area: 2000,
    type: 'house',
    images: [
      'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Charming historic townhouse with original details and modern updates. Located in a desirable neighborhood with tree-lined streets.',
    amenities: ['Historic Character', 'Updated Kitchen', 'Hardwood Floors', 'Parking'],
    listingDate: '2025-01-03',
    agent: {
      name: 'Robert Taylor',
      phone: '+1 (555) 567-8901',
      email: 'robert@realestate.com',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  }
];