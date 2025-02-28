import {AxiosInstance } from 'axios';
import {createAsyncThunk } from '@reduxjs/toolkit';
import type {AppDispatch,State } from '../hooks';
import {fillOffers,fillActiveOffer,fillFavoriteOffer,fillOffersNear,fillCommentsByOffer, changeStatusFavoriteInFavoriteOffers} from './action';
import {requireAuthorization,setRequestStatus,setError,setAuthStatus,setRequestActiveOffer,setRequestOffersNear,setRequestCommentsByOffer} from './action';

import {ApiRoute,RequestStatus,TIMEOUT_SHOW_ERROR,errorEmpty,userDefault} from '../const';
//import {AuthorizationStatus} from '../const';
import {saveToken,AUTH_TOKEN_KEY,dropToken} from '../services/token';
import {store} from '.';

import type {TOffer,TOfferPreview,TUserData,TAuthData,TUser,TCommentForOffer,TUserComment} from '../types';

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<TUser>(ApiRoute.Login);
      dispatch(setAuthStatus(false));
      dispatch(requireAuthorization(data));
      dispatch(setAuthStatus(true));
    } catch {
      dispatch(requireAuthorization(userDefault));
      dispatch(setAuthStatus(false));
    }
  },
);

export const sendCommentAction = createAsyncThunk<TUserComment,{
  id:string;
  rating:number;
  comment:string;
},{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('comment/sendComment',
  async ({id,rating,comment},{ extra:api}) => {
    const path = `${ApiRoute.Comments}/${id}`;
    const sentComment = {
      rating: rating,
      comment: comment,
    };
    const {data} = await api.post<TUserComment>(path,sentComment);
    return data;
  }
);

export const sendChangedStatusFavoriteAction = createAsyncThunk<TOfferPreview,{
  id:string;
  status:number;
},{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('comment/sendComment',
  async ({id,status},{ extra:api}) => {
    const path = `${ApiRoute.Favorite}/${id}/${status}`;
    const {data} = await api.post<TOfferPreview>(path);
    return data;
  }
);

export const loginAction = createAsyncThunk<void, TAuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<TUserData>(ApiRoute.Login, {email, password});
    // const user: TUser = {
    //   name: data.name,
    //   email: data.email,
    //   avatarUrl: data.avatarUrl,
    //   isPro: data.isPro,
    //   token: data.token,
    //   authorizationStatus : AuthorizationStatus.Auth,
    // };
    dispatch(requireAuthorization(data));
    saveToken(AUTH_TOKEN_KEY,data.token);
    dispatch(setAuthStatus(true));
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
    dispatch(setAuthStatus(false));
  },
);

export const fetchOffersAction = createAsyncThunk<void,undefined,{
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async(_arg,{dispatch, extra:api }) => {
    dispatch(setRequestStatus(RequestStatus.Loading));
    const {data} = await api.get<TOfferPreview[]>(ApiRoute.Offers);
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
    const {data} = await api.get<TOfferPreview[]>(ApiRoute.Favorite);
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
    const {data} = await api.get<TOffer>(path);
    dispatch(fillActiveOffer(data));
    dispatch(setRequestActiveOffer(true));
  }
);

export const fetchListCommentsByOffer = createAsyncThunk<TCommentForOffer[],string,{
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'data/fetchActiveOffer',
  async(id,{dispatch, extra: api}) => {
    const path = `${ApiRoute.Comments}/${id}`;
    dispatch(setRequestCommentsByOffer(false));
    const {data} = await api.get<TCommentForOffer[]>(path);
    dispatch(fillCommentsByOffer(data));
    dispatch(setRequestCommentsByOffer(true));
    return data;
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
    const {data} = await api.get<TOfferPreview[]>(path);
    dispatch(fillOffersNear(data));
    dispatch(setRequestOffersNear(true));
  }
);

export const clearErrorAction = createAsyncThunk(
  'offers/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(errorEmpty)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
