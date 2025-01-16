
import { mockOffers } from "../mocks/mock-offers-many";
import { createReducer } from "@reduxjs/toolkit";
import { nextCity, setCity } from "./action";
//import { ActionType } from "../const";
//import type { OfferPreview } from "../types";
/*
interface OffersState {
  city: string;
  offers: OfferPreview[];
}
*/
//const cityNameDefault = mockOffers.listOffers[0].city.name;

const cityNameDefault = 'Paris';

export const initialState =  {
  city : cityNameDefault,
  offers : mockOffers.listOffers,
};

/*
// reducer на голом redux;
function reducerReduxDefault (state: OffersState = initialState, action: {payload: unknown, type: ActionType}) : OffersState
{
  switch (action.type) {
    case ActionType.SetCity :
      return {
      ...state,
      city : action.payload as string
    }
    break;
    default :
      return state;
  }
}
*/

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity,(state,action) => {
      state.city = action.payload;
    })
} );

export {reducer}
