import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NameSpaces } from "../../const";
import { TInitialStateOffer } from "../../types/state";
import { fetchCurrentOfferAction } from "../api-actions";
import { toast } from "react-toastify";
import { TOfferFavoriteStatus } from "../../types/types";

const initialState : TInitialStateOffer = {
  currentOffer: null,
  isLoading: false,
  hasError: false,
}

export const offerSlice = createSlice({
  name: NameSpaces.Offer,
  initialState,
  reducers: {
    changeStatusFavoriteInCurrentOffer: (state, action: PayloadAction<TOfferFavoriteStatus>) => {
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
      .addCase(fetchCurrentOfferAction.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        toast.error('The current offer is temporarily unavailable');
      })
  }
});

export const {changeStatusFavoriteInCurrentOffer} = offerSlice.actions;
