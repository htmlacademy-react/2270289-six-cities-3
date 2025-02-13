import {createReducer} from '@reduxjs/toolkit';
import {setCity,setCardActiveId,setCurrentSort,setReviewByOffer,setFavoriteOfferStatus,setError, setRequestCommentsByOffer, fillCommentsByOffer}  from './action';
import {requireAuthorization,setRequestStatus,setRequestAuthStatus, setRequestOffersNear, setRequestActiveOffer} from './action';
import {fillOffers,fillActiveOffer,fillOffersNear,fillFavoriteOffer} from './action';
import {userDefault,RequestStatus} from '../const';
import type {CommentForOffer, Offer,OfferPreview } from '../types';

const cityDefault = {
  name: 'Paris',
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  }
};

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
  error: '',
  user: userDefault,
  isRequestAuth: false,
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
    // .addCase(setReviewByOffer,(state,action) => {
    //   state.reviewsByOffer = action.payload;
    // })
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
