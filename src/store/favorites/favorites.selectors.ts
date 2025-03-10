import { NameSpaces } from '../../const';
import { TState } from '../../types/state';

export const favoritesOffers = (state: TState) => state[NameSpaces.Favorites].favoriteOffers;
export const favoritesOffersLoadingStatus = (state: TState) => state[NameSpaces.Favorites].isLoading;
export const favoritesOffersErrorStatus = (state: TState) => state[NameSpaces.Favorites].hasError;
