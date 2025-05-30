import {CityFavorites} from "../types/offer";

export const offersSaved: CityFavorites[] = [
    {
        city: {
            name: 'Paris',
            location: {
                latitude: 48.8566,
                longitude: 2.3522,
                zoom: 12
            }
        },
        offers: [
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
                    avatarUrl: 'img/avatar-angelina.jpg',
                    isPro: true
                },
                images: ['img/apartment-01.jpg', 'img/apartment-02.jpg'],
                maxAdults: 4
            }
        ]
    },
    {
        city: {
            name: 'Amsterdam',
            location: {
                latitude: 52.3676,
                longitude: 4.9041,
                zoom: 12
            }
        },
        offers: [
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
                    avatarUrl: 'img/avatar-sara.jpg',
                    isPro: true
                },
                images: ['img/apartment-03.jpg', 'img/apartment-01.jpg'],
                maxAdults: 2
            }
        ]
    }
];