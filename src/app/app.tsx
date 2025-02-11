import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {useAppSelector} from '../hooks/index.ts';
import {AppRoute} from '../../src/const.ts';
import Main from '../pages/main/main.tsx';
import Login from '../pages/login/login.tsx';
import Offer from '../pages/offer/offer.tsx';
import Favorites from '../pages/favorites/favorites.tsx';
import Page404 from '../pages/404/page-404.tsx';
import PrivateRoute from '../components/private-route/private-route.tsx';


export default function App () : JSX.Element {

  const authorizationStatus = useAppSelector((state) => state.dataAuthorization.authorizationStatus);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />}/>
        <Route path={AppRoute.Login} element={<Login />}/>
        <Route path={AppRoute.Offer} element={<Offer />}/>
        <Route path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Favorites variantCard='favorite'/>
            </PrivateRoute>
          }
        />
        <Route path='*' element={<Page404 />}/>
      </Routes>
    </BrowserRouter>
  );
}
