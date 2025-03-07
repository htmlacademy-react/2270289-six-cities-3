// import {getSortedListOffer} from '../utils';
// import type { TInitialState } from '../types/types';

// export const selectorCurrentOffersByCity = (state : TInitialState) => {
//   const currentCityName = state.city.name;
//   const offers = (state.offers) ? state.offers : [];
//   return offers.filter((itemOffer) => itemOffer.city.name === currentCityName);
// };

// export const selectorSortedListOffer = (state: TInitialState) => {
//   const currentSort = (state.currentSort) ? state.currentSort : '';
//   return getSortedListOffer(currentSort,selectorCurrentOffersByCity(state));
// };

// export const selectorNearListOffer = (state: TInitialState) => selectorSortedListOffer(state).slice(0,3);
