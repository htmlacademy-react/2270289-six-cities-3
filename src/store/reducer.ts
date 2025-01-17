import {mockOffers} from '../mocks/mock-offers-many';
import {createReducer} from '@reduxjs/toolkit';
import {setCity,fillOffer} from './action';

const cityNameDefault = 'Paris';

export const initialState = {
  city : cityNameDefault,
  offers : mockOffers.listOffers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity,(state,action) => {
      state.city = action.payload;
    })
    .addCase(fillOffer,(state,action) => {
      state.offers = action.payload;
    });
});

export {reducer};
