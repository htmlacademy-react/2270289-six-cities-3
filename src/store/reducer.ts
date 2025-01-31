import {mockOffers} from '../mocks/mock-offers-many';
import {MockReviewByOffer} from '../mocks/mock-reviews';
import {createReducer} from '@reduxjs/toolkit';
import {setCity,fillOffer,setCardActiveId,setCurrentSort,setReviewByOffer} from './action';
import type { OfferPreview } from '../types';

//import { getData } from '../services/api';

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
  offers : mockOffers.listOffers,
  reviewsByOffer: MockReviewByOffer,
  cardActiveId: '',
  currentSort: 'Popular'
};
*/

export const initialState = {
  city : cityDefault,
  offers : <OfferPreview[]>[],
  reviewsByOffer: MockReviewByOffer,
  cardActiveId: '',
  currentSort: 'Popular'
};

/*
const dataFromServer = getData(URL_API_OFFERS, 5000)
console.log('dataFromServer',dataFromServer);
*/

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
    });
});


export {reducer};
