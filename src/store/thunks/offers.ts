import type { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { OfferPreview } from '../../types';
import { ActionType, EndPoint } from '../../const';

export const fetchAllOffers = createAsyncThunk<OfferPreview[],void,{extra: AxiosInstance}>(
  ActionType.FetchAllOffers,
  async(_arg, {extra: api}) => {
    const response = await api.get<OfferPreview[]>(EndPoint.Offers);
    return response.data
  }
)
