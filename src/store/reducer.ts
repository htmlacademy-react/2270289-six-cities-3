import {createReducer} from '@reduxjs/toolkit';
import {setCity,setCardActiveId,setCurrentSort,setFavoriteOfferStatus,setError, setRequestCommentsByOffer, fillCommentsByOffer} from './action';
import {requireAuthorization,setRequestStatus,setRequestAuthStatus, setRequestOffersNear, setRequestActiveOffer} from './action';
import {fillOffers,fillActiveOffer,fillOffersNear,fillFavoriteOffer} from './action';
import {userDefault,RequestStatus, errorEmpty} from '../const';
import type {TInitialState} from '../types';

const cityDefault = {
  name: 'Paris',
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  }
};

/*
export const initialState = {
  city : cityDefault,
  activeOffer: <Offer>{},
  offers : <OfferPreview[]>[],
  offersNear: <OfferPreview[]>[],
  favoriteOffers: <OfferPreview[]>[],
  isDownloadFavoriteOffers: false,
  reviewsByOffer: <CommentForOffer[]>[],
  cardActiveId: '',
  currentSort: 'Popular',
  requestStatus : RequestStatus.Idle,
  error: errorEmpty,
  user: userDefault,
  isRequestAuth: false,
  isRequestActiveOffer: false,
  isRequestOffersNear: false,
  isRequestCommentsByOffer: false,
};
*/
/*
type TInitialState = {
  city : TCity,
  activeOffer: Offer | null,
  offers : OfferPreview[] | null,
  offersNear: OfferPreview[] | null,
  favoriteOffers: OfferPreview | null,
  reviewsByOffer: CommentForOffer[] | null,
  cardActiveId: string | null,
  currentSort: 'Popular',
  requestStatus : 'idle' | 'loading' | 'success' | 'failed',
  error: TErrorRequest | null,
  user: TUser | null,
  isRequestAuth: false,
  isDownloadFavoriteOffers: false,
  isRequestActiveOffer: false,
  isRequestOffersNear: false,
  isRequestCommentsByOffer: false,
};
*/

export const initialState : TInitialState = {
  city : cityDefault,
  activeOffer: null,
  offers : null,
  offersNear: null,
  favoriteOffers: null,
  reviewsByOffer: null,
  cardActiveId: null,
  currentSort: 'Popular',
  requestStatus : RequestStatus.Idle,
  error: errorEmpty,
  user: userDefault,
  isRequestAuth: false,
  isDownloadFavoriteOffers: false,
  isRequestActiveOffer: false,
  isRequestOffersNear: false,
  isRequestCommentsByOffer: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity,(state,action) => {
      state.city = action.payload;
    })
    .addCase(fillActiveOffer,(state,action) => {
      state.activeOffer = action.payload;
    })
    .addCase(fillCommentsByOffer,(state,action) => {
      state.reviewsByOffer = action.payload;
    })
    .addCase(fillOffers,(state,action) => {
      state.offers = action.payload;
    })
    .addCase(fillFavoriteOffer,(state,action) => {
      state.favoriteOffers = action.payload;
    })
    .addCase(setFavoriteOfferStatus,(state,action) => {
      state.isDownloadFavoriteOffers = action.payload;
    })
    .addCase(fillOffersNear,(state,action) => {
      state.offersNear = action.payload;
    })
    .addCase(setCardActiveId,(state,action) => {
      state.cardActiveId = action.payload;
    })
    .addCase(setCurrentSort,(state,action) => {
      state.currentSort = action.payload;
    })
    .addCase(requireAuthorization,(state,action) => {
      state.user = action.payload;
    })
    .addCase(setRequestStatus,(state,action) => {
      state.requestStatus = action.payload;
    })
    .addCase(setError,(state,action) => {
      state.error = action.payload;
    })
    .addCase(setRequestAuthStatus,(state,action) => {
      state.isRequestAuth = action.payload;
    })
    .addCase(setRequestActiveOffer,(state,action) => {
      state.isRequestActiveOffer = action.payload;
    })
    .addCase(setRequestOffersNear ,(state,action) => {
      state.isRequestOffersNear = action.payload;
    })
    .addCase(setRequestCommentsByOffer ,(state,action) => {
      state.isRequestCommentsByOffer = action.payload;
    });
});

export {reducer};
