import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {PrivateRoute} from "../private-route/private-route"
import {PageNotFound} from '../not-found/not-found'
import {Favorites} from '../../pages/favorites/favorites'
import {MainPage} from "../../pages/main-page/main-page"
import {Login} from '../../pages/login/login'
import {Offer} from '../../pages/offer/offer'
import {AppRoute} from "../../const"
import {useContext} from "react";
import {AuthContext} from "../../hooks/auth-provider";

function App() {

  const {status} = useContext(AuthContext)

  console.log(status)

  return (
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage/>}/>
          <Route path={AppRoute.Login} element={<Login/>}/>
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute authorizationStatus={status}>
              <Favorites/>
            </PrivateRoute>
          }/>
          <Route path={AppRoute.Offer} element={<Offer/>}/>
          <Route path={`${AppRoute.Offer}/:id`} element={<Offer/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export {App}
