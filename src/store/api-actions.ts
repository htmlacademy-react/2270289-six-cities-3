import {AxiosInstance } from 'axios';
import {createAsyncThunk } from '@reduxjs/toolkit';
import { useAppSelector, type AppDispatch,type State } from '../hooks';
import {OfferPreview,UserData,AuthData,User,UserAuthData } from '../types';
import {fillOffer,fillFavoriteOffer, requireAuthorization, setRequestStatus, setError } from './action';

import {ApiRoute,AuthorizationStatus,RequestStatus,TIMEOUT_SHOW_ERROR} from '../const';
import {saveToken,dropToken,AUTH_TOKEN_KEY} from '../services/token';
import { store } from '.';

export const fetchOffersAction = createAsyncThunk<void,undefined,{
  dispatch: AppDispatch;
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

export const fetchFavoriteOffersAction = createAsyncThunk<void,undefined,{
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async(_arg,{dispatch, extra:api }) => {

    const {data} = await api.get<OfferPreview[]>(ApiRoute.Favorite);

    dispatch(fillFavoriteOffer(data));
  }
);

/*
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
*/

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, getState, extra: api}) => {
    console.log(`мы в Action'е loginAction`);
    console.log(`AuthData`,{email, password});
    const {data} = await api.post<UserData>(ApiRoute.Login, {email, password});
    console.log('полученный Token => ', data.token);

    const user: User = {
      authorizationStatus : AuthorizationStatus.Auth,
      userAuthData : {
        email : data.email,
        password: data.password,
      }
    }
    dispatch(requireAuthorization(user));
    const state = getState();
    console.log('Статус AuthorizationStatus после авторизации',state.dataAuthorization.authorizationStatus);
    saveToken(AUTH_TOKEN_KEY,data.token);
  },
);

/*
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
*/

export const clearErrorAction = createAsyncThunk(
  'offers/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

/*
export const fetchOffersAction = createAsyncThunk<void,undefined,{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async(_arg,{dispatch, extra:api }) => {

    console.log('Зашли в fetchOffersAction ');
    console.log('RequestStatus ', store.getState().requestStatus);

    dispatch(setRequestStatus(RequestStatus.Loading));

    console.log('Задиспатчили RequestStatus.Loading ');
    console.log('RequestStatus ', store.getState().requestStatus);
    console.log('Начинаем получать данные');

    const {data} = await api.get<OfferPreview[]>(ApiRoute.Offers);

    console.log('Данные получили...');
    console.log('RequestStatus ', store.getState().requestStatus);

    dispatch(setRequestStatus(RequestStatus.Success));

    console.log('Задиспатчили RequestStatus.Success');
    console.log('RequestStatus ', store.getState().requestStatus);

    dispatch(fillOffer(data));
  }
);
*/
