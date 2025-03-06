// import type { AxiosInstance } from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import type { TOfferPreview } from '../../types/types';
// import { ActionType, ApiRoute } from '../../const';

// export const fetchAllOffers = createAsyncThunk<TOfferPreview[],void,{extra: AxiosInstance}>(
//   ActionType.FetchAllOffers,
//   async(_arg, {extra: api}) => {
//     const response = await api.get<TOfferPreview[]>(ApiRoute.Offers);
//     return response.data;
//   }
// );
