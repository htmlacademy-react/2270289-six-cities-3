import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/index.ts';
import { AppRoute } from '../../src/const.ts';
import Main from '../pages/main/main.tsx';
import Login from '../pages/login/login.tsx';
import Offer from '../pages/offer/offer.tsx';
import Favorites from '../pages/favorites/favorites.tsx';
import Page404 from '../pages/404/page-404.tsx';
import PrivateRoute from '../components/private-route/private-route.tsx';
import { checkAuthAction } from '../store/api-actions.ts';
import { useEffect } from 'react';

export default function App(): JSX.Element {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [])

  const checkedAuth = useAppSelector((state) => state.isRequestAuth);

  if (checkedAuth) {

    const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);

    return (
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<Main />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Offer} element={<Offer />} />
          <Route path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <Favorites variantCard='favorite' />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <></>
    )
  }
}
