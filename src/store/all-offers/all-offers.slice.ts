import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpaces, SortOptions, cityDefault } from '../../const';
import { fetchOffersAction } from '../api-actions';
import { toast } from 'react-toastify';
import type { TInitialStateAllOffers } from '../../types/state';
import { TCity, TOfferFavoriteStatus } from '../../types/types';

const initialState: TInitialStateAllOffers = {
  currentCity: cityDefault,
  currentSort: SortOptions.Popular,
  activeOfferId: null,
  offers: null,
  isLoading: false,
  hasError: false,
};

export const allOffersSlice = createSlice({
  name: NameSpaces.AllOffers,
  initialState,
  reducers: {
    setCurrentCity: (state, action: PayloadAction<TCity>) => {
      state.currentCity = action.payload;
    },
    setCurrentSort: (state, action: PayloadAction<string>) => {
      state.currentSort = action.payload;
    },
    setActiveOfferId: (state, action:PayloadAction<string|null>) => {
      state.activeOfferId = action.payload;
    },
    changeStatusFavoriteInOffers: (state, action: PayloadAction<TOfferFavoriteStatus>) => {
      if (state.offers) {
        const index = state.offers.findIndex((item) => item.id === action.payload.id);
        const status = Boolean(action.payload.status);
        if (index !== -1) {
          state.offers[index].isFavorite = status;
        }
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isLoading = true;
        state.offers = action.payload;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        toast.error('The server encountered an error while retrieving quotations.');
      });
  }
});

export const { setCurrentCity, setCurrentSort, setActiveOfferId, changeStatusFavoriteInOffers } = allOffersSlice.actions;
