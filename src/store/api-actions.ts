import {AxiosInstance } from 'axios';
import {createAsyncThunk } from '@reduxjs/toolkit';
import {type AppDispatch,type State } from '../hooks';
import {Offer,OfferPreview,UserData,AuthData,User} from '../types';
import {fillOffers,fillActiveOffer,fillFavoriteOffer,requireAuthorization,setRequestStatus,setError,fillOffersNear} from './action';

import {ApiRoute,AuthorizationStatus,RequestStatus,TIMEOUT_SHOW_ERROR} from '../const';
import {saveToken,AUTH_TOKEN_KEY} from '../services/token';
import {store} from '.';

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

export const fetchOffersNearAction = createAsyncThunk<void,undefined,{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async(_arg,{dispatch, getState, extra:api }) => {

    const state = getState();
    const activeOfferId = state.cardActiveId;
    const path = `${ApiRoute.Offers}/${activeOfferId}/nearby`;
    //console.log('путь для офферы поблизости....',path);
    dispatch(setRequestStatus(RequestStatus.Loading));
    const {data} = await api.get<OfferPreview[]>(path);
    dispatch(fillOffersNear(data));
    dispatch(setRequestStatus(RequestStatus.Success));
    //console.log('офферы поблизости....',data)  ;

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

export const fetchActiveOfferAction = createAsyncThunk<void,undefined,{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchActiveOffer',
  async(_arg,{dispatch, getState, extra: api}) => {
    const state = getState();
    const activeOfferId = state.cardActiveId;
    const path = `${ApiRoute.Offers}/${activeOfferId}`;
    dispatch(setRequestStatus(RequestStatus.Loading));
    const {data} = await api.get<Offer>(path);
    //console.log('данные по текущему офферу...',data);
    dispatch(fillActiveOffer(data));
    dispatch(setRequestStatus(RequestStatus.Success));
  }
)

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
