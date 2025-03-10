import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const';
import type { TInitialStateOffersNear } from '../../types/state';
import type { TOfferFavoriteStatus } from '../../types/types';
import { fetchOffersNearAction } from '../api-actions';
import { toast } from 'react-toastify';

const initialState: TInitialStateOffersNear = {
  offersNear: [],
  isLoading: false,
  hasError: false,
};

export const offersNearSlice = createSlice({
  name: NameSpaces.OffersNear,
  initialState,
  reducers: {
    changeStatusFavoriteInOffersNear: (state, action: PayloadAction<TOfferFavoriteStatus>) => {
      if (state.offersNear) {
        const index = state.offersNear.findIndex((item) => item.id === action.payload.id);
        const status = Boolean(action.payload.status);
        if (index !== -1) {
          state.offersNear[index].isFavorite = status;
        }
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersNearAction.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffersNearAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.offersNear = action.payload;
      })
      .addCase(fetchOffersNearAction.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        toast.error('Could not download offers near.');
      });
  }
});

export const {changeStatusFavoriteInOffersNear} = offersNearSlice.actions;
