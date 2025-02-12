import {MockReviewByOffer} from '../mocks/mock-reviews';
import {createReducer} from '@reduxjs/toolkit';
import {setCity,setCardActiveId,setCurrentSort,setReviewByOffer, requireAuthorization, setRequestStatus, setError, fillActiveOffer} from './action';
import {fillOffers,fillOffersNear,fillFavoriteOffer,setFavoriteOfferStatus} from './action';
import type {Offer,OfferPreview } from '../types';
import { AuthorizationStatus } from '../const';
import { RequestStatus } from '../const';
import { isCSSRequest } from 'vite';

const cityDefault = {
  name: 'Paris',
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  }
};

const userDefault = {
  name: '',
  email: '',
  avatarUrl: '',
  token :'',
  isPro: false,
  authorizationStatus: <string>AuthorizationStatus.Unknown,
};

// const dataAuthorization = {
//   authorizationStatus : <string>AuthorizationStatus.Unknown,
//   user: userDefault,
// };

export const initialState = {
  city : cityDefault,
  activeOffer: <Offer>{},
  offers : <OfferPreview[]>[],
  offersNear: <OfferPreview[]>[],
  favoriteOffers: <OfferPreview[]>[],
  isDownloadFavoriteOffers: false,
  reviewsByOffer: MockReviewByOffer,
  cardActiveId: '',
  currentSort: 'Popular',
  requestStatus : RequestStatus.Idle,
  error: '',
  user: userDefault,
  isRequestAuth: false,
  isRequestActiveOffer: false,
  isRequestOffersNear: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity,(state,action) => {
      state.city = action.payload;
    })

    .addCase(fillActiveOffer,(state,action) => {
      state.activeOffer = action.payload;
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
    .addCase(setReviewByOffer,(state,action) => {
      state.reviewsByOffer = action.payload;
    })
    .addCase(requireAuthorization,(state,action) => {
      state.user = action.payload;
    })
    .addCase(setRequestStatus,(state,action) => {
      state.requestStatus = action.payload;
    })
    .addCase(setError,(state,action) => {
      state.error = action.payload;
    });
});

export {reducer};
