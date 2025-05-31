import {CitiesCardList} from "../../components/cities-card-list/cities-card-list"
import {SortOptions} from "../../components/sort-options/sort-options"
import {CitiesList} from "../../components/cities-list/cities-list"
import {Logo} from "../../components/logo/logo"
import CityMap from "../../components/map/map"
import {OfferList} from "../../types/offer"
import {getOffersByCity, sortOffersByType} from "../../utils"
import {useAppSelector} from "../../hooks"
import {SortOffer} from "../../types/sort"
import {useState} from "react"
import {Header} from "../../components/header/header";


function MainPage() {

  const selectedCity = useAppSelector((state) => state.city)
  const [selectedSort, setSelectedSort] = useState<SortOffer>('Popular')

  const offers = useAppSelector((state) => state.offers)

  const selectedCityOffers = getOffersByCity(selectedCity?.name, offers)
  const [selectedOffer, setSelectedOffer] = useState<OfferList | undefined>()

  const handleListItemHover = (offerId: string | null) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);
    setSelectedOffer(currentOffer);
  }

  const points =
      (selectedOffer ? [selectedOffer] : selectedCityOffers)
      .map(offer => ({
        id: offer.id.toString(),
        latitude: offer.location.latitude,
        longitude: offer.location.longitude,
        title: offer.title,
      }))

  return (
      <div className="page page--gray page--main">
        <Header/>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList selectedCity={selectedCity}/>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{selectedCityOffers.length} places to stay
                  in {selectedCity.name}</b>
                <SortOptions activeSorting={selectedSort} onChange={(newSorting) => setSelectedSort(newSorting)}/>
                <CitiesCardList offerList={sortOffersByType(selectedCityOffers, selectedSort)} onListItemHover={handleListItemHover}/>
              </section>
              <div className="cities__right-section">
                <CityMap cityLocation={selectedCity.location} points={points}/>
              </div>
            </div>
          </div>
        </main>
      </div>
  );
}

export {MainPage};
