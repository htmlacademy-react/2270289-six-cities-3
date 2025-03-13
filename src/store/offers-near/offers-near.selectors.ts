import { NameSpaces } from '../../const';
import { TState } from '../../types/state';

export const nearAllOffers = (state: TState) => state[NameSpaces.OffersNear].offersNear;
export const nearAllOffersLoadingStatus = (state: TState) => state[NameSpaces.OffersNear].isLoading;
export const nearAllOffersErrorStatus = (state: TState) => state[NameSpaces.OffersNear].hasError;


