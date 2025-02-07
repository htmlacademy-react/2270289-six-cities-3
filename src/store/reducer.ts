import {MockReviewByOffer} from '../mocks/mock-reviews';
import {createReducer} from '@reduxjs/toolkit';
import {setCity,setCardActiveId,setCurrentSort,setReviewByOffer, requireAuthorization, setRequestStatus, setError} from './action';
import {fillOffer,fillOffersNear,fillFavoriteOffer,setFavoriteOfferStatus} from './action';
import type { OfferPreview } from '../types';
import { AuthorizationStatus } from '../const';
import { RequestStatus } from '../const';

const cityDefault = {
  name: 'Paris',
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  }
};

const userDefault = {
  email: '',
  password: '',
};

const dataAuthorization = {
  authorizationStatus : <string>AuthorizationStatus.Unknown,
  user: userDefault,
}

export const initialState = {
  city : cityDefault,
  offers : <OfferPreview[]>[],
  favoriteOffers: <OfferPreview[]>[],
  isDownloadFavoriteOffers: false,
  offersNear: <OfferPreview[]>[],
  reviewsByOffer: MockReviewByOffer,
  cardActiveId: '',
  currentSort: 'Popular',
  requestStatus : RequestStatus.Idle,
  error: '',
  dataAuthorization: dataAuthorization,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity,(state,action) => {
      state.city = action.payload;
    })
    .addCase(fillOffer,(state,action) => {
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
      console.log('устанавливаем статус авторизации, payload = ',action.payload);
      state.dataAuthorization.authorizationStatus = action.payload.authorizationStatus;
      state.dataAuthorization.user.email = action.payload.userAuthData.email;
      state.dataAuthorization.user.password = action.payload.userAuthData.password;
    })
    .addCase(setRequestStatus,(state,action) => {
      state.requestStatus = action.payload;
    })
    .addCase(setError,(state,action) => {
      state.error = action.payload;
    });
});

export {reducer};
