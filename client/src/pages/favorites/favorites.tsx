import {OfferList} from '../../types/offer';
import {FavoriteCardList} from '../../components/favorite-card-list/favorite-card-list';
import {useEffect, useState} from "react";
import apiClient from "../../api/api";
import {groupOffersByCity} from "../../utils";

function Favorites() {

  const [groupedOffers, setGroupedOffers] = useState<{ city: string; offers: OfferList[] }[]>([]);


  useEffect(() => {
    apiClient.get<OfferList[]>("/offers/favorite")
    .then(response => setGroupedOffers(groupOffersByCity(response.data)));
  }, [])

  return (
      <div>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {groupedOffers.map((cityBlock) => (
                    <FavoriteCardList city={cityBlock.city} offers={cityBlock.offers}/>
                ))}
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img
                className="footer__logo"
                src="img/logo.svg"
                alt="Rent service logo"
                width="64"
                height="33"
            />
          </a>
        </footer>
      </div>
  );
}

export {Favorites};