
import { mockOffers } from "../mocks/mock-offers-many";
import { createReducer } from "@reduxjs/toolkit";
import { nextCity } from "./action";

const cityNameDefault = mockOffers.listOffers[0].city.name;

const initialState =  {
  city : cityNameDefault,
  offers : mockOffers.listOffers.filter((item) => item.city.name === cityNameDefault)
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(nextCity,(state) => {
      state.city ='';
    })
} );

export {reducer}
