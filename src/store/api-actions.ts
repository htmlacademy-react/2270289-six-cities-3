import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AppDispatch,State } from '../hooks';
import { OfferPreview } from '../types';
import { fillOffer, setRequestStatus } from './action';

import { ApiRoute, RequestStatus } from '../const';

export const fetchOffersAction = createAsyncThunk<void,undefined,{
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/fetchOffers',
  async(_arg,{dispatch, extra:api }) => {
    dispatch(setRequestStatus(RequestStatus.Loading));

    const {data} = await api.get<OfferPreview[]>(ApiRoute.Offers);

    dispatch(setRequestStatus(RequestStatus.Success));
    dispatch(fillOffer(data))
  }
);




