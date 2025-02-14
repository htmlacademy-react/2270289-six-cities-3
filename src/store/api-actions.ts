import {AxiosInstance } from 'axios';
import {createAsyncThunk } from '@reduxjs/toolkit';
import type {AppDispatch,State } from '../hooks';
import {fillOffers,fillActiveOffer,fillFavoriteOffer,fillOffersNear,fillCommentsByOffer} from './action';
import {requireAuthorization,setRequestStatus,setError,setRequestAuthStatus,setRequestActiveOffer,setRequestOffersNear,setRequestCommentsByOffer} from './action';

import {ApiRoute,AuthorizationStatus,RequestStatus,TIMEOUT_SHOW_ERROR,userDefault} from '../const';
import {saveToken,AUTH_TOKEN_KEY,dropToken} from '../services/token';
import {store} from '.';

import type {Offer,OfferPreview,UserData,AuthData,User,CommentForOffer} from '../types';

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<User>(ApiRoute.Login);
      const user: User = {
        name: data.name,
        email: data.email,
        avatarUrl: data.avatarUrl,
        isPro: data.isPro,
        token: data.token,
        authorizationStatus : AuthorizationStatus.Auth,
      };
      dispatch(setRequestAuthStatus(false));
      dispatch(requireAuthorization(user));
      dispatch(setRequestAuthStatus(true));
    } catch {
      dispatch(requireAuthorization(userDefault));
      dispatch(setRequestAuthStatus(false));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(ApiRoute.Login, {email, password});
    const user: User = {
      name: data.name,
      email: data.email,
      avatarUrl: data.avatarUrl,
      isPro: data.isPro,
      token: data.token,
      authorizationStatus : AuthorizationStatus.Auth,
    };
    dispatch(requireAuthorization(user));
    saveToken(AUTH_TOKEN_KEY,data.token);
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
    dispatch(requireAuthorization(userDefault));
    dispatch(setRequestAuthStatus(false));
  },
);

export const fetchOffersAction = createAsyncThunk<void,undefined,{
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async(_arg,{dispatch, extra:api }) => {
    dispatch(setRequestStatus(RequestStatus.Loading));
    const {data} = await api.get<OfferPreview[]>(ApiRoute.Offers);
    dispatch(setRequestStatus(RequestStatus.Success));
    dispatch(fillOffers(data));
  }
);

export const fetchFavoriteOffersAction = createAsyncThunk<void,undefined,{
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteOffers',
  async(_arg,{dispatch, extra:api }) => {
    dispatch(setRequestStatus(RequestStatus.Loading));
    const {data} = await api.get<OfferPreview[]>(ApiRoute.Favorite);
    dispatch(fillFavoriteOffer(data));
    dispatch(setRequestStatus(RequestStatus.Success));
  }
);

export const fetchActiveOfferAction = createAsyncThunk<void,string,{
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'data/fetchActiveOffer',
  async(id,{dispatch, extra: api}) => {
    const path = `${ApiRoute.Offers}/${id}`;
    dispatch(setRequestActiveOffer(false));
    const {data} = await api.get<Offer>(path);
    dispatch(fillActiveOffer(data));
    dispatch(setRequestActiveOffer(true));
  }
);

export const fetchListCommentsByOffer = createAsyncThunk<void,string,{
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'data/fetchActiveOffer',
  async(id,{dispatch, extra: api}) => {
    const path = `${ApiRoute.Comments}/${id}`;
    dispatch(setRequestCommentsByOffer(false));
    const {data} = await api.get<CommentForOffer[]>(path);
    dispatch(fillCommentsByOffer(data));
    dispatch(setRequestCommentsByOffer(true));
  }
);

export const fetchOffersNearAction = createAsyncThunk<void,string,{
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async(id,{dispatch, extra:api }) => {
    const path = `${ApiRoute.Offers}/${id}/nearby`;
    dispatch(setRequestOffersNear(false));
    const {data} = await api.get<OfferPreview[]>(path);
    dispatch(fillOffersNear(data));
    dispatch(setRequestOffersNear(true));
  }
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
