
import { FullOffer } from '../types/offer';

export const offers: FullOffer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Paris',
      location: { latitude: 48.8566, longitude: 2.3522, zoom: 12 }
    },
    location: { latitude: 48.857, longitude: 2.351, zoom: 12 },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    description: 'A quiet cozy and picturesque apartment.',
    bedrooms: 3,
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine'],
    host: {
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg'],
    maxAdults: 4
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'house',
    price: 250,
    city: {
      name: 'Cologne',
      location: { latitude: 50.9375, longitude: 6.9603, zoom: 12 }
    },
    location: { latitude: 50.938, longitude: 6.959, zoom: 12 },
    isFavorite: false,
    isPremium: false,
    rating: 4.3,
    description: 'Spacious house in a quiet neighborhood.',
    bedrooms: 4,
    goods: ['Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    images: ['img/room.jpg', 'img/studio-01.jpg'],
    maxAdults: 5
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'room',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.3676, longitude: 4.9041, zoom: 12 }
    },
    location: { latitude: 52.368, longitude: 4.905, zoom: 12 },
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    description: 'Cozy room with canal view.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Fridge', 'Towels'],
    host: {
      name: 'Sara',
      avatarUrl: 'img/avatar-sara.jpg',
      isPro: true
    },
    images: ['img/apartment-03.jpg', 'img/apartment-01.jpg'],
    maxAdults: 2
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    price: 180,
    city: {
      name: 'Brussels',
      location: { latitude: 50.8503, longitude: 4.3517, zoom: 12 }
    },
    location: { latitude: 50.851, longitude: 4.352, zoom: 12 },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    description: 'Comfortable apartment near the city center.',
    bedrooms: 2,
    goods: ['Heating', 'Kitchen', 'Wi-Fi', 'TV'],
    host: {
      name: 'Tom',
      avatarUrl: 'img/avatar-tom.jpg',
      isPro: false
    },
    images: ['img/studio-01.jpg', 'img/apartment-02.jpg'],
    maxAdults: 3
  }
];
