import { useAppSelector } from '../hooks';
import { getSortedListOffer } from '../utils';

export const selectorCurrentSort = useAppSelector((State) => State.currentSort);
export const selectorCurrentCity = useAppSelector((state) => state.city);
export const selectorOffers = useAppSelector((state) => state.offers);
export const currentOffersByCity = selectorOffers.filter((itemOffer) => itemOffer.city.name === selectorCurrentCity);
export const sortedListOffer = getSortedListOffer(selectorCurrentSort,currentOffersByCity);
