import {mockOffers} from '../mocks/mock-offers-many';
import {createReducer} from '@reduxjs/toolkit';
import {setCity,fillOffer,setCardActiveId, setCurrentSort} from './action';

const cityNameDefault = 'Paris';

export const initialState = {
  city : cityNameDefault,
  offers : mockOffers.listOffers,
  cardActiveId: '',
  currentSort: 'Popular'
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
});

export {reducer};
