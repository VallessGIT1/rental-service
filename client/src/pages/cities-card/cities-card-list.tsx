import {OffersList} from "../../types/offer";
import {CitiesCard} from "./cities-card";


type CitiesCardListProps = {
    offersList: OffersList[];
};

function CitiesCardList({ offersList }: CitiesCardListProps) {
    return (
        <div className="cities__places-list places__list tabs__content">
            {Array.from(offersList, (item) =>
                <CitiesCard key={item.id} id={item.id}
                            title={item.title} type={item.type}
                            price={item.price} isPremium={item.isPremium}
                            previewImage={item.previewImage} rating={item.rating} />
            )}
        </div>
    );
}

export { CitiesCardList };
