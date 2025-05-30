import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {PrivateRoute} from "../private-route/private-route"
import {PageNotFound} from '../not-found/not-found'
import {Favorites} from '../../pages/favorites/favorites'
import {MainPage} from "../../pages/main-page/main-page"
import {Login} from '../../pages/login/login'
import {Offer} from '../../pages/offer/offer'
import {CityFavorites, FullOffer, OffersList} from "../../types/offer"
import {AuthorizationStatus} from "../../const"
import {AppRoute} from "../../const"

type AppMainPageProps = {
    offers: FullOffer[],
    offersList: OffersList[],
    savedOffers: CityFavorites[]
}

function App({offers, offersList, savedOffers}: AppMainPageProps) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRoute.Main} element={<MainPage offersList={offersList}/>}/>
                <Route path={AppRoute.Login} element={<Login/>}/>
                {/*<Route path={AppRoute.Favorites} element={*/}
                {/*    <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>*/}
                {/*        <Favorites/>*/}
                {/*    </PrivateRoute>*/}
                {/*}/>*/}
                <Route path={AppRoute.Favorites} element={<Favorites offers={savedOffers}/>}/>
                <Route path={AppRoute.Offer} element={<Offer offers={offers}/>}/>
                <Route path={`${AppRoute.Offer}/:id`} element={<Offer offers={offers}/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export {App}
