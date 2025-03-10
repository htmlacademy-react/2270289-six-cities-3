import {getSortedListOffer} from '../utils';
import type {State} from '../hooks';

export const selectorCurrentOffersByCity = (state : State) => {
  const currentCityName = state.city.name;
  const offers = state.offers;
  return offers.filter((itemOffer: { city: { name: string } }) => itemOffer.city.name === currentCityName);
};

export const selectorSortedListOffer = (state: State) => {
  const currentSort = state.currentSort;
  return getSortedListOffer(currentSort,selectorCurrentOffersByCity(state));
};

export const selectorNearListOffer = (state: State) => selectorSortedListOffer(state).slice(0,3);
