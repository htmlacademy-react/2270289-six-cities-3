import {createReducer} from '@reduxjs/toolkit';
import {setCity,setCardActiveId,setCurrentSort,setFavoriteOfferStatus,setError, setRequestCommentsByOffer, fillCommentsByOffer, changeStatusFavoriteInFavoriteOffers, setStatusFormSending} from './action';
import {requireAuthorization,setRequestStatus,setAuthStatus, setRequestOffersNear, setRequestActiveOffer} from './action';
import {changeStatusFavoriteInOffers, changeStatusFavoriteInOffersNear, changeStatusFavoriteInCurrentOffer} from './action';
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
  isAuth: false,
  isDownloadFavoriteOffers: false,
  isRequestActiveOffer: false,
  isRequestOffersNear: false,
  isRequestCommentsByOffer: false,
  isFormCommentSending: false,
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
    .addCase(setAuthStatus,(state,action) => {
      state.isAuth = action.payload;
    })
    .addCase(setRequestActiveOffer,(state,action) => {
      state.isRequestActiveOffer = action.payload;
    })
    .addCase(setRequestOffersNear ,(state,action) => {
      state.isRequestOffersNear = action.payload;
    })
    .addCase(setRequestCommentsByOffer ,(state,action) => {
      state.isRequestCommentsByOffer = action.payload;
    })

    .addCase(changeStatusFavoriteInOffers ,(state,action) => {
      if (state.offers) {
        const index = state.offers.findIndex((item) => item.id === action.payload.id)
        const status = Boolean(action.payload.status);
        if (index !== -1) {
          state.offers[index].isFavorite = status;
        }
      }
    })
    .addCase(changeStatusFavoriteInOffersNear ,(state,action) => {
      if (state.offersNear) {
        const index = state.offersNear.findIndex((item) => item.id === action.payload.id)
        const status = Boolean(action.payload.status);
        if (index !== -1) {
          state.offersNear[index].isFavorite = status;
        }
      }
    })
    .addCase(changeStatusFavoriteInCurrentOffer ,(state,action) => {
      if (state.activeOffer) {
        const idOffer = state.activeOffer.id;
        const status = Boolean(action.payload.status);
        if (idOffer === action.payload.id) {
          state.activeOffer.isFavorite = status;
        }
      }
    })
    .addCase(changeStatusFavoriteInFavoriteOffers ,(state,action) => {
      if (state.favoriteOffers) {
        const index = state.favoriteOffers.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.favoriteOffers = [...state.favoriteOffers.filter((item) => item.id !== action.payload.id)];
        } else {
          state.favoriteOffers = [...state.favoriteOffers,action.payload];
        }
      }
    })

    .addCase(setStatusFormSending ,(state,action) => {
      state.isFormCommentSending = action.payload;
    });

});

export {reducer};
