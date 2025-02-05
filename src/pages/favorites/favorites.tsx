import FavoriteCardItemGroup from '../../components/favorite-card-item-group/favorite-card-item-group.tsx';
import type {OfferPreview} from '../../types.ts';
import { useAppSelector } from '../../hooks/index.ts';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const.ts';

type ListOfferProps = {
  variantCard : 'cities'|'favorite'|'near-places';
}

export default function Favorites({ variantCard}:ListOfferProps) : JSX.Element {

  //store.dispatch(fetchOffersAction());

  const offers = useAppSelector((state) => state.offers);
  const offersFavorite : OfferPreview[] = offers.filter((itemCard: {isFavorite: boolean}) => itemCard.isFavorite);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Main}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.Login}>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
