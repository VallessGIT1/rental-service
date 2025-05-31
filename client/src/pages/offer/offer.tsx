import {useParams} from 'react-router-dom';
import {FullOffer, mapFullOfferToOffersList} from '../../types/offer';
import {PageNotFound} from "../../components/not-found/not-found";
import {CommentForm} from "../../components/comment-form/comment-form";
import CityMap from "../../components/map/map";
import {CitiesList} from "../../components/cities-list/cities-list";
import {Header} from "../../components/header/header";
import {CitiesCardList} from "../../components/cities-card-list/cities-card-list";

type OfferProps = {
    offers: FullOffer[];
};

function Offer({offers}: OfferProps) {
    const params = useParams();
    const offer = offers.find((item) => item.id === params.id);

    if (!offer) {
        return <PageNotFound/>;
    }

    const mapPoints = [
        {
            id: offer.id,
            latitude: offer.location.latitude,
            longitude: offer.location.longitude,
            title: offer.title,
        },
        ...offers
            .filter(o => o.id !== offer.id && o.city.name === offer.city.name)
            .map(o => ({
                id: o.id,
                latitude: o.location.latitude,
                longitude: o.location.longitude,
                title: o.title,
            }))
    ];

    const otherOffers = mapFullOfferToOffersList(offers)
    .filter(other => other.id !== offer.id && other.city.name === offer.city.name)


    return (
        <div className="page">
            <Header/>
            <main className="page__main page__main--offer">
                <section className="offer">
                    <div className="offer__gallery-container container">
                        <div className="offer__gallery">
                            {offer.images.map((item) => (
                                <div key={item} className="offer__image-wrapper">
                                    <img className="offer__image" src={item} alt="Photo studio"/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="offer__container container">
                        <div className="offer__wrapper">
                            {offer.isPremium ? (
                                <div className="offer__mark">
                                    <span>Premium</span>
                                </div>
                            ) : null}
                            <div className="offer__name-wrapper">
                                <h1 className="offer__name">{offer.title}</h1>
                                <button className="offer__bookmark-button button" type="button">
                                    <svg className="offer__bookmark-icon" width="31" height="33">
                                        <use href="#icon-bookmark"></use>
                                    </svg>
                                    <span className="visually-hidden">To bookmarks</span>
                                </button>
                            </div>
                            <div className="offer__rating rating">
                                <div className="offer__stars rating__stars">
                                    <span style={{width: "80%"}}></span>
                                    <span className="visually-hidden">Rating</span>
                                </div>
                                <span className="offer__rating-value rating__value">{offer.rating}</span>
                            </div>
                            <ul className="offer__features">
                                <li className="offer__feature offer__feature--entire">
                                    {offer.type}
                                </li>
                            </ul>
                            <div className="offer__price">
                                <b className="offer__price-value">€{offer.price}</b>
                                <span className="offer__price-text"> night</span>
                            </div>
                            <div className="offer__inside">
                                <h2 className="offer__inside-title">What's inside</h2>
                                <ul className="offer__inside-list">
                                    {offer.goods.map((good) => (
                                        <li className='offer__inside-item' key={good}>{good}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="offer__host">
                                <h2 className="offer__host-title">Meet the host</h2>
                                <div className="offer__host-user user">
                                    <div
                                        className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                                        <img
                                            className="offer__avatar user__avatar"
                                            src={offer.host.avatarUrl}
                                            width="74"
                                            height="74"
                                            alt="Host avatar"
                                        />
                                    </div>
                                    <span className="offer__user-name">{offer.host.name}</span>
                                    <span className="offer__user-status">{offer.host.isPro ? 'PRO' : 'Normal'}</span>
                                </div>
                                <div className="offer__description">
                                    <p className="offer__text">
                                        {offer.description}
                                    </p>
                                </div>
                            </div>

                            <section className="offer__reviews reviews">
                                <h2 className="reviews__title">
                                    Reviews &middot; <span className="reviews__amount">1</span>
                                </h2>
                                <ul className="reviews__list">
                                    <li className="reviews__item">
                                        <div className="reviews__user user">
                                            <div className="reviews__avatar-wrapper user__avatar-wrapper">
                                                <img
                                                    className="reviews__avatar user__avatar"
                                                    src="img/avatar-max.jpg"
                                                    width="54"
                                                    height="54"
                                                    alt="Reviews avatar"
                                                />
                                            </div>
                                            <span className="reviews__user-name">Max</span>
                                        </div>
                                        <div className="reviews__info">
                                            <div className="reviews__rating rating">
                                                <div className="reviews__stars rating__stars">
                                                    <span style={{width: "80%"}}></span>
                                                    <span className="visually-hidden">Rating</span>
                                                </div>
                                            </div>
                                            <p className="reviews__text">
                                                A quiet cozy and picturesque that hides behind a a river
                                                by the unique lightness of Amsterdam. The building is
                                                green and from 18th century.
                                            </p>
                                            <time className="reviews__time" dateTime="2019-04-24">
                                                April 2019
                                            </time>
                                        </div>
                                    </li>
                                </ul>
                                <CommentForm/>
                            </section>
                        </div>
                    </div>
                    <section className="offer__map map" style={{height: '579px'}}>
                        <CityMap cityLocation={offer.location} points={mapPoints}/>
                    </section>
                </section>
                <div className="container">
                    <section className="near-places places">
                        <h2 className="near-places__title">
                            Other places in the neighbourhood
                        </h2>

                        <div className="near-places__list places__list">
                           <CitiesCardList offerList={otherOffers} onListItemHover={() => {}}/>
                        </div>

                    </section>
                </div>
            </main>
        </div>
    );
}

export {Offer}
