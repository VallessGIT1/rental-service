import {FullOffer, OfferList} from '../types/offer';
import {offers} from "./offers";

export const offersList: OfferList[] = offers.map((offer: FullOffer): OfferList => ({
    id: offer.id,
    title: offer.title,
    type: offer.type,
    price: offer.price,
    city: offer.city,
    location: offer.location,
    isFavorite: offer.isFavorite,
    isPremium: offer.isPremium,
    rating: offer.rating,
    previewImage: offer.images[0],
}));
