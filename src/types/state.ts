import { store } from '../store/index';
import type { TCity, TCommentForOffer, TOffer, TOfferPreview, TUserData } from './types';

type TInitialStateAllOffers = {
  currentCity : TCity;
  currentSort: string;
  activeOfferId: string | null;
  offers : TOfferPreview[] | null;
  isLoading: boolean;
  hasError: boolean;
};

type TInitialStateOffersNear = {
  offersNear: TOfferPreview[];
  isLoading: boolean;
  hasError: boolean;
};

type TInitialStateFavorites = {
  favoriteOffers: TOfferPreview [];
  isLoading: boolean;
  hasError: boolean;
  isLoadingStatusChange : boolean;
  hasErrorStatusChange: boolean;
};

type TInitialStateOffer = {
  currentOffer: TOffer | null;
  isLoading: boolean;
  hasError: boolean;
};

type TInitialStateReview = {
  reviewsByOffer: TCommentForOffer[];
  isLoading: boolean;
  hasError: boolean;
  isFormCommentSending: boolean;
  hasErrorFormCommentSending: boolean;
}

export type TInitialStateUser = {
  userData: TUserData;
  authorizationStatus: 'AUTH' | 'NO_AUTH' | 'UNKNOWN';
};

export type TState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
export type {TInitialStateAllOffers,TInitialStateOffersNear,TInitialStateFavorites,TInitialStateOffer,TInitialStateReview};
