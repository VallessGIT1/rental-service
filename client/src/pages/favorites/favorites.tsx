import {CityFavorites} from '../../types/offer';
import {FavoriteCardList} from '../../components/favorite-card-list/favorite-card-list';

type FavoritesProps = {
    offers: CityFavorites[];
};

function Favorites({offers}: FavoritesProps) {
    return (
        <div>
            <main className="page__main page__main--favorites">
                <div className="page__favorites-container container">
                    <section className="favorites">
                        <h1 className="favorites__title">Saved listing</h1>
                        <ul className="favorites__list">
                            {offers.map((cityBlock) => (
                                <FavoriteCardList city={cityBlock.city.name} offers={cityBlock.offers}/>
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