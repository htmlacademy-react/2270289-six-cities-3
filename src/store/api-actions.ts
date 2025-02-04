import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AppDispatch,State } from '../hooks';
import { OfferPreview } from '../types';
import { fillOffer, requireAuthorization, setRequestStatus, setError } from './action';

import { ApiRoute, AuthorizationStatus, RequestStatus } from '../const';
import type { UserData,AuthData } from '../types';
import { saveToken,dropToken } from '../services/token';
import { AUTH_TOKEN_KEY } from '../services/token';
import { TIMEOUT_SHOW_ERROR } from '../const';
import { store } from '.';

export const fetchOffersAction = createAsyncThunk<void,undefined,{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async(_arg,{dispatch, extra:api }) => {
    dispatch(setRequestStatus(RequestStatus.Loading));

    const {data} = await api.get<OfferPreview[]>(ApiRoute.Offers);

    dispatch(setRequestStatus(RequestStatus.Success));
    dispatch(fillOffer(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(ApiRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);
export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(ApiRoute.Login, {email, password});
    saveToken(AUTH_TOKEN_KEY,token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);
export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken(AUTH_TOKEN_KEY);
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const clearErrorAction = createAsyncThunk(
  'offers/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
