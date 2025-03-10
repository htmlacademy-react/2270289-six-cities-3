import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/index.ts';
import FavoriteCardItemGroup from '../../components/favorite-card-item-group/favorite-card-item-group.tsx';
import Header from '../../components/header/header.tsx';

import { AppRoute } from '../../const.ts';
import { fetchFavoriteOffersAction } from '../../store/api-actions.ts';
import { setFavoriteOfferStatus } from '../../store/action.ts';


type ListOfferProps = {
  variantCard: 'cities' | 'favorite' | 'near-places';
}

export default function Favorites({ variantCard }: ListOfferProps): JSX.Element {

  const isDownloadFavoriteOffers = useAppSelector((state) => state.isDownloadFavoriteOffers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isDownloadFavoriteOffers) {
      dispatch(fetchFavoriteOffersAction());
      dispatch(setFavoriteOfferStatus(true));
    }
  },[]);

  const offersFavorite = useAppSelector((state) => state.favoriteOffers);

  return (
    <div className="page">

      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">

              <FavoriteCardItemGroup listOffer={offersFavorite} variantCard={variantCard} />

            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}
