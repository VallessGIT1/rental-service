import {FavoriteCard} from '../favorite-card/favorite-card';
import {FullOffer} from '../../types/offer';

type FavoriteCardListProps = {
    offers: FullOffer[],
    city: string
};

function FavoriteCardList({city, offers}: FavoriteCardListProps) {
    return (
        <li className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                    <a className="locations__item-link" href="#">
                        <span>{city}</span>
                    </a>
                </div>
            </div>
            <div className="favorites__places">
                {offers.map((offer) => (
                    <FavoriteCard key={offer.id} offer={offer}/>
                ))}
            </div>
        </li>
    );
}

export {FavoriteCardList}
