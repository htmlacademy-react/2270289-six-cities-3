
import {MockReviewByOffer} from '../mocks/mock-reviews';
import {createReducer} from '@reduxjs/toolkit';
import {setCity,fillOffer,setCardActiveId,setCurrentSort,setReviewByOffer, requireAuthorization, setRequestStatus} from './action';
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

export const initialState = {
  city : cityDefault,
  offers : <OfferPreview[]>[],
  reviewsByOffer: MockReviewByOffer,
  cardActiveId: '',
  currentSort: 'Popular',
  authorizationStatus : AuthorizationStatus.Unknown,
  requestStatus : RequestStatus.Idle,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity,(state,action) => {
      state.city = action.payload;
    })
    .addCase(fillOffer,(state,action) => {
      state.offers = action.payload;
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
      state.authorizationStatus = action.payload;
    })
    .addCase(setRequestStatus,(state,action) => {
      state.requestStatus = action.payload;
    })
});


export {reducer};
