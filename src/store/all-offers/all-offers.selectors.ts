import { createSelector } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const';
import { TState } from '../../types/state';
import { getSortedListOffer } from '../../utils';

export const allOffers = (state: TState) => state[NameSpaces.AllOffers].allOffers
export const allOffersLoadingStatus = (state: TState) => state[NameSpaces.AllOffers].isLoading;
export const allOffersErrorStatus = (state: TState) => state[NameSpaces.AllOffers].hasError;
export const currentCity = (state: TState) => state[NameSpaces.AllOffers].currentCity;
export const currentSort = (state: TState) => state[NameSpaces.AllOffers].currentSort;
export const activeOfferId = (state: TState) => state[NameSpaces.AllOffers].activeOfferId;

export const selectorCurrentOffersByCity = createSelector(
  [allOffers, currentCity],
  (offers, city) => offers.filter((offer) => offer.city.name === city)
);

  // export const selectorCurrentOffersByCity = (state : TState) => {
  //   const currentCityName = state.city.name;
  //   const offers = (state.offers) ? state.offers : [];
  //   return offers.filter((itemOffer) => itemOffer.city.name === currentCityName);
  // };

  export const selectorSortedListOffer = (state: TState) => {
    const currentSort = (state.currentSort) ? state.currentSort : '';
    return getSortedListOffer(currentSort,selectorCurrentOffersByCity(state));
  };

  export const selectorNearListOffer = (state: TState) => selectorSortedListOffer(state).slice(0,3);
