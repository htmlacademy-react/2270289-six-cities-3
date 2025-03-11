import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../routes/history-router.tsx';
import browserHistory from '../browser-history.ts';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/index.ts';
import { AppRoute, AuthorizationStatus } from '../../src/const.ts';
import Main from '../pages/main/main.tsx';
import Login from '../pages/login/login.tsx';
import Offer from '../pages/offer/offer.tsx';
import Favorites from '../pages/favorites/favorites.tsx';
import Page404 from '../pages/404/page-404.tsx';
import PrivateRoute from '../components/private-route/private-route.tsx';
import { checkAuthAction } from '../store/api-actions.ts';
import { userAuthorizationStatus } from '../store/user/user.selectors.ts';

export default function App(): JSX.Element {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
  }, []);

  const isAuth = useAppSelector(userAuthorizationStatus) === AuthorizationStatus.Auth;

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>

        <Routes>
          <Route path={AppRoute.Main} element={<Main />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Offer} element={<Offer variantPlace='offer'/>} />
          <Route path={AppRoute.Favorites}
            element={
              <PrivateRoute isAuth = {isAuth}>
                <Favorites variantCard='favorites' />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Page404} element={<Page404 />} />
          <Route path='*' element={<Page404 />} />
        </Routes>

      </HistoryRouter>
    </HelmetProvider>
  );

}
