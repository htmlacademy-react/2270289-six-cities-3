import { combineReducers } from "@reduxjs/toolkit";
import { NameSpaces } from "../const";
import { userSlice } from './user/user.slice';
import { allOffersSlice } from "./all-offers/all-offers.slice";
import { offerSlice } from "./offer/offer.slice";
import { offersNearSlice } from "./offers-near/offers-near.slice";
import { favoritesSlice } from "./favorites/favorites.slice";
import { reviewSlice } from "./reviews/reviews.slice";

export const rootReducer = combineReducers({
  [NameSpaces.User]: userSlice.reducer,
  [NameSpaces.AllOffers]: allOffersSlice.reducer,
  [NameSpaces.Offer]: offerSlice.reducer,
  [NameSpaces.OffersNear]: offersNearSlice.reducer,
  [NameSpaces.Favorites]: favoritesSlice.reducer,
  [NameSpaces.Reviews]: reviewSlice.reducer,
});
