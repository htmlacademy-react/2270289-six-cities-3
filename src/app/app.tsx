import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {AppRoute,AuthorizationStatus} from '../../src/const.ts';
import Main from '../pages/main/main';
import Login from '../pages/login/login.tsx';
import Offer from '../pages/offer/offer.tsx';
import Favorites from '../pages/favorites/favorites.tsx';
import Page404 from '../pages/404/page-404.tsx';
import PrivateRoute from '../components/private-route/private-route.tsx';
import {mockPreviewCard} from '../mocks/mock-card.ts';
import {mockOffers} from '../mocks/mock-offers-many.ts';

const favoritesCard = mockPreviewCard.listPreviewCards.filter((itemCard) => itemCard.isFavorite);
const cardFilteredByCity = mockOffers.listOffers.filter((itemCard) => itemCard.city.name === 'Amsterdam');
const currentCity = cardFilteredByCity[0].city;
const offersNear = cardFilteredByCity.slice(0,3);

export default function App () : JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />}/>
        <Route path={AppRoute.Login} element={<Login />}/>
        <Route path={AppRoute.Offer} element={<Offer />}/>
        <Route path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <Favorites listOffer={favoritesCard} variantCard='favorite' mouseMove={() => {}}/>
            </PrivateRoute>
          }
        />
        <Route path='*' element={<Page404 />}/>
      </Routes>
    </BrowserRouter>
  );
}

//city = {currentCity} offersNear = {offersNear}
