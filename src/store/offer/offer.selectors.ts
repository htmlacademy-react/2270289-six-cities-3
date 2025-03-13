import { NameSpaces } from '../../const';
import { TState } from '../../types/state';

export const currentOffer = (state: TState) => state[NameSpaces.Offer].currentOffer;
export const currentOffersLoadingStatus = (state: TState) => state[NameSpaces.Offer].isLoading;
export const currentOffersErrorStatus = (state: TState) => state[NameSpaces.Offer].hasError;
