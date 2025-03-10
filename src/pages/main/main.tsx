import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/index.ts';
import Header from '../../components/header/header.tsx';
import ListOffer from '../../components/card-offer-list/card-offer-list.tsx';
import SortOffer from '../../components/sort-offer/sort-offer.tsx';
import Map from '../../components/map/map.tsx';
import ListCity from '../../components/list-city/list-city.tsx';
import LoadingScreen from '../loading-screen/loading-screen.tsx';

import { selectorCurrentOffersByCity, selectorSortedListOffer } from '../../store/all-offers/all-offers.selectors.ts';
import { fetchFavoriteOffersAction, fetchOffersAction } from '../../store/api-actions.ts';

import { typeMap } from '../../const.ts';
import { Helmet } from 'react-helmet-async';
import MainEmpty from '../../components/main-empty/main-empty.tsx';
import { allOffers, currentCity } from '../../store/all-offers/all-offers.selectors.ts';
import { useSelector } from 'react-redux';

export default function Main(): JSX.Element {

  const dispatch = useAppDispatch();
  const hasAllOffers = Boolean(useSelector(allOffers));

  useEffect(() => {
    if (!hasAllOffers) {
      dispatch(fetchOffersAction());
      dispatch(fetchFavoriteOffersAction());
    }
  }, []);

  const activeCity = useSelector(currentCity);
  const cityName = activeCity.name;
  const currentOffersByCity = useSelector(selectorCurrentOffersByCity);
  const countOffers = currentOffersByCity.length;
  const sortedListOffer = useSelector(selectorSortedListOffer);

  const [isVisibleLoadingScreen, setIsVisibleLoadingScreen] = useState(false);
  useEffect(() => {
    if ((!hasAllOffers)) {
      setIsVisibleLoadingScreen(true);
      setTimeout(() => {
        setIsVisibleLoadingScreen(false);
      }, 1200);
    }
  }, []);

  if (isVisibleLoadingScreen) {
    return (
      <LoadingScreen />
    );
  }

  if (!countOffers) {
    return (
      <MainEmpty cityName = {cityName} />
    );
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <ListCity />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{countOffers} place{countOffers > 1 && 's'} to stay in {cityName}</b>

              <SortOffer />

              <div className="cities__places-list places__list tabs__content">

                <ListOffer listOffer={sortedListOffer} variantCard='cities' variantPlace='place-card' />

              </div>
            </section>
            <div className="cities__right-section">

              <Map currentCity={activeCity} offers={currentOffersByCity} currentOffer={null} typeMap={typeMap.cities} />

            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
