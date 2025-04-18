import { createSlice } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const';
import { TInitialStateFavorites } from '../../types/state';
import { fetchFavoriteOffersAction, sendChangedStatusFavoriteAction } from '../api-actions';
import { toast } from 'react-toastify';

const initialState: TInitialStateFavorites = {
  favoriteOffers: [],
  isLoading: false,
  hasError: false,
  isLoadingStatusChange : false,
  hasErrorStatusChange: false,
};

export const favoritesSlice = createSlice({
  name: NameSpaces.Favorites,
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.favoriteOffers = action.payload;
      })
      .addCase(fetchFavoriteOffersAction.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        toast.error('Could not download favorite offers.');
      })
      .addCase(sendChangedStatusFavoriteAction.pending, (state) => {
        state.isLoadingStatusChange = true;
        state.hasErrorStatusChange = false;
      })
      .addCase(sendChangedStatusFavoriteAction.fulfilled, (state, action) => {
        state.isLoadingStatusChange = false;
        state.hasErrorStatusChange = false;

        if (state.favoriteOffers) {
          if (action.payload.status) {
            state.favoriteOffers.push(action.payload.offer);
          } else {
            state.favoriteOffers = state.favoriteOffers.filter((item) => item.id !== action.payload.offer.id);
          }
        }
      })
      .addCase(sendChangedStatusFavoriteAction.rejected, (state) => {
        state.isLoadingStatusChange = false;
        state.hasErrorStatusChange = true;
      });
  }
});
