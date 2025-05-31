import {CityOffer} from "./types/offer";

export const BASE_API_URL = 'http://localhost:5001'

export const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer'
} as const

export const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN'
}

export const SortOffersType = {
  Popular: 'Popular',
  PriceToHigh: 'Price: low to high',
  PriceToLow: 'Price: high to low',
  TopRated: 'Top rated first',
}

export const CITIES_LOCATION: CityOffer[] = [{
  name: 'Paris',
  location: {
    latitude: 48.8556,
    longitude: 2.3482,
    zoom: 11
  }
}, {
  name: 'Cologne',
  location: {
    latitude: 50.9375,
    longitude: 6.9603,
    zoom: 11
  }
}, {
  name: 'Brussels',
  location: {
    latitude: 50.8503,
    longitude: 4.3517,
    zoom: 11
  }
}, {
  name: 'Amsterdam',
  location: {
    latitude: 52.3669,
    longitude: 4.9014,
    zoom: 11
  }
}, {
  name: 'Hamburg',
  location: {
    latitude: 53.5511,
    longitude: 9.9937,
    zoom: 11
  }
}, {
  name: 'Dusseldorf',
  location: {
    latitude: 51.2277,
    longitude: 6.7735,
    zoom: 11
  }
}]
