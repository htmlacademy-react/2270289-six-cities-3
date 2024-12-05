import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {AppRoute} from '../../src/const.ts';
import Main from '../pages/main/main';
import Login from '../pages/login/login.tsx';
import Offer from '../pages/offer/offer.tsx';
import Favorites from '../pages/favorites/favorites.tsx';
import Page404 from '../pages/404/page-404.tsx';

type AppCountArendaProps = {
  countArenda : number;
}

export default function App ({countArenda}: AppCountArendaProps) : JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main countArenda = {countArenda} />}/>
        <Route path={AppRoute.Login} element={<Login />}/>
        <Route path={AppRoute.Offer} element={<Offer />}/>
        <Route path={AppRoute.Favorites} element={<Favorites />}/>
        <Route path={AppRoute.Page404} element={<Page404 />}/>
      </Routes>
    </BrowserRouter>

  );
}
