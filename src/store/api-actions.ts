import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AppDispatch,State } from '../hooks';
import { OfferPreview } from '../types';
import { requireAuthorization,fillOffer } from './action';
import { saveToken,dropToken } from '../services/token';
import { ApiRoute, AuthorizationStatus } from '../const';

export const fetchOffersAction = createAsyncThunk<void,undefined,{
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/fetchOffers',
  async(_arg,{dispatch, extra:api }) => {
    const {data} =await api.get<OfferPreview[]>(ApiRoute.Offers);
    dispatch(fillOffer(data))
  }
);




