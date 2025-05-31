import {CityOffer, OfferList} from "./types/offer";
import {SortOffer} from "./types/sort";
import {SortOffersType} from "./const";

export function getCity(cityName: string, cities: CityOffer[]): CityOffer {
  return <CityOffer>cities.find((city) => city.name === cityName);
}

export function getOffersByCity(cityName: string | undefined, offers: OfferList[]): OfferList[] {
  return offers.filter((offer) => cityName && offer.city.name.toLowerCase() === cityName.toLowerCase());
}

export function sortOffersByType(offers: OfferList[], type: SortOffer): OfferList[] {
  switch (type) {
    case SortOffersType.PriceToHigh:
      return offers.sort((a, b) => a.price - b.price);
    case SortOffersType.PriceToLow:
      return offers.sort((a, b) => b.price - a.price);
    case SortOffersType.TopRated:
      return offers.sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
}