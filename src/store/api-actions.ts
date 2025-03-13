import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AppDispatch, State } from '../hooks';

import { ApiRoute } from '../const';
import { saveToken, AUTH_TOKEN_KEY, dropToken } from '../services/token';
import type { TOffer, TOfferPreview, TUserData, TAuthData, TUser, TCommentForOffer, TUserComment } from '../types/types';

export const checkAuthAction = createAsyncThunk<TUser, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TUser>(ApiRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<TUserData, TAuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { extra: api }) => {
    const { data } = await api.post<TUserData>(ApiRoute.Login, { email, password });
    saveToken(AUTH_TOKEN_KEY, data.token);
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(ApiRoute.Logout);
    dropToken(AUTH_TOKEN_KEY);
  },
);

export const sendCommentAction = createAsyncThunk<TUserComment, {
  id: string;
  rating: number;
  comment: string;
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'comment/sendComment',
  async ({ id, rating, comment }, { extra: api }) => {
    const path = `${ApiRoute.Comments}/${id}`;
    const sentComment = {
      rating: rating,
      comment: comment,
    };
    const { data } = await api.post<TUserComment>(path, sentComment);
    return data;
  }
);

export const sendChangedStatusFavoriteAction = createAsyncThunk<{ offer: TOfferPreview; status: number }, {
  id: string;
  status: number;
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'comment/sendChangedStatusFavorite',
  async ({ id, status }, { extra: api }) => {
    const path = `${ApiRoute.Favorite}/${id}/${status}`;
    const { data } = await api.post<TOfferPreview>(path);
    return { offer: data, status };
  }
);

export const fetchOffersAction = createAsyncThunk<TOfferPreview[], undefined, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TOfferPreview[]>(ApiRoute.Offers);
    return data;
  }
);

export const fetchFavoriteOffersAction = createAsyncThunk<TOfferPreview[], undefined, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TOfferPreview[]>(ApiRoute.Favorite);
    return data;
  }
);

export const fetchCurrentOfferAction = createAsyncThunk<TOffer, string, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'data/fetchActiveOffer',
  async (id, { extra: api }) => {
    const path = `${ApiRoute.Offers}/${id}`;
    const { data } = await api.get<TOffer>(path);
    return data;
  }
);

export const fetchReviewsByOffer = createAsyncThunk<TCommentForOffer[], string, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'data/fetchListCommentsByOffer',
  async (id, { extra: api }) => {
    const path = `${ApiRoute.Comments}/${id}`;
    const { data } = await api.get<TCommentForOffer[]>(path);
    return data;
  }
);

export const fetchOffersNearAction = createAsyncThunk<TOfferPreview[], string, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'data/fetchOffersNearAction',
  async (id, { extra: api }) => {
    const path = `${ApiRoute.Offers}/${id}/nearby`;
    const { data } = await api.get<TOfferPreview[]>(path);
    return data;
  }
);
