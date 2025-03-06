import { createSlice } from "@reduxjs/toolkit";
import { NameSpaces } from "../../const";
import { TInitialStateOffer } from "../../types";
import { fetchCurrentOfferAction } from "../api-actions";

const initialState : TInitialStateOffer = {
  currentOffer: null,
  isLoading: false,
  hasError: false,
}

export const offerSlice = createSlice({
  name: NameSpaces.Offer,
  initialState,
  reducers: {
    changeStatusFavoriteInCurrentOffer: (state, action) => {
      if (state.currentOffer) {
        const idOffer = state.currentOffer.id;
        const status = Boolean(action.payload.status);
        if (idOffer === action.payload.id) {
          state.currentOffer.isFavorite = status;
        }
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCurrentOfferAction.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchCurrentOfferAction.fulfilled, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
        state.currentOffer = action.payload;
      })
      .addCase(fetchCurrentOfferAction.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
  }
});

export const {changeStatusFavoriteInCurrentOffer} = offerSlice.actions;
