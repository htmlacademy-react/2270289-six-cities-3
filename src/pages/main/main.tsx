import {Link } from 'react-router-dom';
import {useState} from 'react';
import {useAppSelector } from '../../hooks/index.ts';
import ListOffer from '../../components/card-offer-list/card-offer-list.tsx';
import Map from '../../components/map/map.tsx';
import MainCityMenu from '../../components/main-city-menu/main-city-menu.tsx';

export default function Main () : JSX.Element {

  const offers = useAppSelector((state) => state.offers);
  const cityName = useAppSelector((state) => state.city);
  const currentOffersByCity = offers.filter((itemCard) => itemCard.city.name === cityName);
  const currentCity = currentOffersByCity[0].city;
  const countOffers = currentOffersByCity.length;

  const [cardActiveId, setCardActiveId] = useState<string|null>(null);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to='/'>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <MainCityMenu />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{countOffers} places to stay in {cityName}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <ListOffer listOffer={currentOffersByCity} variantCard='cities' mouseMove={setCardActiveId} />
              </div>
            </section>
            <div className="cities__right-section">

              <Map currentCity={currentCity} currentOffers={currentOffersByCity} selectedPointId={cardActiveId} />

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
