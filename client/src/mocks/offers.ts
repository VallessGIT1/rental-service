import {FullOffer} from '../types/offer';

export const offers: FullOffer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Paris',
      location: {latitude: 48.8566, longitude: 2.3522, zoom: 12}
    },
    location: {latitude: 48.857, longitude: 2.351, zoom: 12},
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    description: 'A quiet cozy and picturesque apartment.',
    bedrooms: 3,
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine'],
    host: {
      name: 'Angelina',
      avatarUrl: '/img/avatar-angelina.jpg',
      isPro: true
    },
    images: ['/img/apartment-01.jpg', '/img/apartment-02.jpg'],
    maxAdults: 4
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'house',
    price: 250,
    city: {
      name: 'Cologne',
      location: {latitude: 50.9375, longitude: 6.9603, zoom: 12}
    },
    location: {latitude: 50.938, longitude: 6.959, zoom: 12},
    isFavorite: false,
    isPremium: false,
    rating: 4.3,
    description: 'Spacious house in a quiet neighborhood.',
    bedrooms: 4,
    goods: ['Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      name: 'Max',
      avatarUrl: '/img/avatar-max.jpg',
      isPro: false
    },
    images: ['/img/room.jpg', '/img/studio-01.jpg'],
    maxAdults: 5
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'room',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {latitude: 52.3676, longitude: 4.9041, zoom: 12}
    },
    location: {latitude: 52.368, longitude: 4.905, zoom: 12},
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    description: 'Cozy room with canal view.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Fridge', 'Towels'],
    host: {
      name: 'Sara',
      avatarUrl: '/img/avatar-sara.jpg',
      isPro: true
    },
    images: ['/img/apartment-03.jpg', '/img/apartment-01.jpg'],
    maxAdults: 2
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    price: 180,
    city: {
      name: 'Brussels',
      location: {latitude: 50.8503, longitude: 4.3517, zoom: 12}
    },
    location: {latitude: 50.851, longitude: 4.352, zoom: 12},
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    description: 'Comfortable apartment near the city center.',
    bedrooms: 2,
    goods: ['Heating', 'Kitchen', 'Wi-Fi', 'TV'],
    host: {
      name: 'Tom',
      avatarUrl: '/img/avatar-tom.jpg',
      isPro: false
    },
    images: ['/img/studio-01.jpg', '/img/apartment-02.jpg'],
    maxAdults: 3
  },
  {
    id: '9',
    title: 'Жилье с видом на воду в Амстердаме',
    type: 'apartment',
    price: 130,
    city: {
      name: 'Amsterdam',
      location: {latitude: 52.37403, longitude: 4.88969, zoom: 13}
    },
    location: {latitude: 52.3909553943508, longitude: 4.85309666406198, zoom: 13},
    isFavorite: false,
    isPremium: false,
    rating: 4.4,
    description: 'Комфортные апартаменты рядом с каналом.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Кухня'],
    host: {
      name: 'Иван',
      avatarUrl: '/img/avatar-ivan.jpg',
      isPro: false
    },
    images: [
      '/img/apartment-01.jpg',
      '/img/apartment-02.jpg'
    ],
    maxAdults: 3
  },
  {
    id: '10',
    title: 'Современные апартаменты в Амстердаме',
    type: 'apartment',
    price: 110,
    city: {
      name: 'Amsterdam',
      location: {latitude: 52.37403, longitude: 4.88969, zoom: 13}
    },
    location: {latitude: 52.3609553943508, longitude: 4.85309666406198, zoom: 13},
    isFavorite: false,
    isPremium: false,
    rating: 4.2,
    description: 'Современный дизайн и удобства в центре города.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Телевизор'],
    host: {
      name: 'Мария',
      avatarUrl: '/img/avatar-maria.jpg',
      isPro: true
    },
    images: [
      '/img/apartment-small-04.jpg',
      '/img/apartment-01.jpg'
    ],
    maxAdults: 2
  },
  {
    id: '11',
    title: 'Апартаменты с балконом в Амстердаме',
    type: 'apartment',
    price: 150,
    city: {
      name: 'Amsterdam',
      location: {latitude: 52.37403, longitude: 4.88969, zoom: 13}
    },
    location: {latitude: 52.3909553943508, longitude: 4.929309666406198, zoom: 13},
    isFavorite: true,
    isPremium: true,
    rating: 4.9,
    description: 'Апартаменты с балконом и видом на город.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Кофемашина', 'Парковка'],
    host: {
      name: 'Алексей',
      avatarUrl: '/img/avatar-max.jpg',
      isPro: true
    },
    images: [
      '/img/studio-01.jpg',
      '/img/apartment-01.jpg'
    ],
    maxAdults: 4
  },
  {
    id: '12',
    title: 'Стильная студия в Амстердаме',
    type: 'studio',
    price: 95,
    city: {
      name: 'Amsterdam',
      location: {latitude: 52.37403, longitude: 4.88969, zoom: 13}
    },
    location: {latitude: 52.3809553943508, longitude: 4.939309666406198, zoom: 13},
    isFavorite: false,
    isPremium: false,
    rating: 4.0,
    description: 'Стильная студия с современным интерьером.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Мини-кухня'],
    host: {
      name: 'Олег',
      avatarUrl: '/img/avatar-oleg.jpg',
      isPro: false
    },
    images: [
      '/img/apartment-02.jpg',
      '/img/studio-07.jpg'
    ],
    maxAdults: 2
  }
]