import {FullOffer, OffersList} from '../types/offer';

export const offersList: OffersList[] = [
    {
        id: '1',
        title: 'Wood and stone place',
        type: 'apartment',
        price: 370,
        previewImage: '1.jpg',
        city: {
            name: 'Paris',
            location: {
                latitude: 48.8561,
                longitude: 2.351499,
                zoom: 13
            }
        },
        location: {
            latitude: 48.868610000000004,
            longitude: 2.324299,
            zoom: 16
        },
        isFavorite: true,
        isPremium: false,
        rating: 4.9
    }
]
