import { getSortedListOffer } from '../utils';
import type { State } from '../hooks';


export const selectorCurrentOffersByCity = (state : State) => {
  const currentCityName = state.city.name;
  const offers = state.offers;
  return offers.filter((itemOffer) => itemOffer.city.name === currentCityName);
}

export const selectorSortedListOffer = (state: State) => {
  const currentSort = state.currentSort;
  //const currentCity = state.city;
  //const offers = state.offers;
  //const currentOffersByCity = offers.filter((itemOffer) => itemOffer.city.name === currentCity);
  return getSortedListOffer(currentSort,selectorCurrentOffersByCity(state));
}

export const selectorNearListOffer = (state: State) => {
  //const currentSort = state.currentSort;
  //const currentCity = state.city;
  //const offers = state.offers;
  //const currentOffersByCity = offers.filter((itemOffer) => itemOffer.city.name === currentCity);
  //const offersNear = currentOffersByCity.slice(0,3);
  //const offersNear = selectorSortedListOffer(state).slice(0,3);
  //return getSortedListOffer(currentSort,currentOffersByCity);
  return selectorSortedListOffer(state).slice(0,3);
}


//export const sortedListOffer = getSortedListOffer(selectorCurrentSort,currentOffersByCity);
