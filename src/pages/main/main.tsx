import { shallowEqual } from 'react-redux';
import { useAppSelector } from '../../hooks/index.ts';
import Header from '../../components/header/header.tsx';
import ListOffer from '../../components/card-offer-list/card-offer-list.tsx';
import SortOffer from '../../components/sort-offer/sort-offer.tsx';
import Map from '../../components/map/map.tsx';
import ListCity from '../../components/list-city/list-city.tsx';
import ErrorMessage from '../../components/error-message/error-message.tsx';

import { selectorSortedListOffer } from '../../store/selectors.ts';

import { fetchOffersAction } from '../../store/api-actions.ts';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/index.ts';

import LoadingScreen from '../loading-screen/loading-screen.tsx';
import { RequestStatus } from '../../const.ts';


export default function Main(): JSX.Element {

  const requestStatus = useAppSelector((state) => state.requestStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (requestStatus !== RequestStatus.Success) {
      dispatch(fetchOffersAction());
    }
  }, []);

  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.city);
  const cityName = currentCity.name;
  const currentOffersByCity = offers.filter((itemCard: { city: { name: string } }) => itemCard.city.name === cityName);
  const countOffers = currentOffersByCity.length;

  const sortedListOffer = useAppSelector(selectorSortedListOffer, shallowEqual);

  return (
    <div className="page page--gray page--main">

      <Header />

      {
        (requestStatus === RequestStatus.Loading) ?
          <LoadingScreen /> :
          (
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

                      <ListOffer listOffer={sortedListOffer} variantCard='cities' />

                    </div>
                  </section>
                  <div className="cities__right-section">

                    <Map currentCity={currentCity} currentOffers={currentOffersByCity} />

                  </div>
                </div>
              </div>
            </main>
          )
      }

    </div>
  );
}
//<ErrorMessage />
