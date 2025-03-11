import { Link } from 'react-router-dom';
import FavoriteCardItemGroup from '../../components/favorite-card-item-group/favorite-card-item-group.tsx';
import Header from '../../components/header/header.tsx';

import { AppRoute } from '../../const.ts';
import { Helmet } from 'react-helmet-async';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty.tsx';
import { favoritesOffers } from '../../store/favorites/favorites.selectors.ts';
import { TVariantCard } from '../../types/types.ts';
import { useAppSelector } from '../../hooks/index.ts';

type ListOfferProps = {
  variantCard: TVariantCard;
}

export default function Favorites({ variantCard }: ListOfferProps): JSX.Element {

  const offersFavorite = useAppSelector(favoritesOffers);
  const countOffersFavorite = offersFavorite.length;

  return (
    <div className="page">
      <Helmet>
        <title>6 cities - Favorites Page</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {
            !countOffersFavorite ?
            <FavoritesEmpty />:
            <FavoriteCardItemGroup listOffer={offersFavorite} variantCard={variantCard} />
          }
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
