import { createSelector } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const';
import { TState } from '../../types/state';
import { getSortedListOffer } from '../../utils';

export const allOffers = (state: TState) => state[NameSpaces.AllOffers].offers;
export const allOffersLoadingStatus = (state: TState) => state[NameSpaces.AllOffers].isLoading;
export const allOffersErrorStatus = (state: TState) => state[NameSpaces.AllOffers].hasError;
export const currentCity = (state: TState) => state[NameSpaces.AllOffers].currentCity;
export const currentSort = (state: TState) => state[NameSpaces.AllOffers].currentSort;
export const activeOfferId = (state: TState) => state[NameSpaces.AllOffers].activeOfferId;

export const selectorCurrentOffersByCity = createSelector(
  [allOffers, currentCity],
  (offers, city) => offers ? offers.filter((offer) => offer.city.name === city.name) : []
);

export const selectorSortedListOffer = createSelector(
  [selectorCurrentOffersByCity,currentSort],
  (items,sortOption) => items ? getSortedListOffer(sortOption,items) : []
);
