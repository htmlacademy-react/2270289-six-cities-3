import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../const';
import type {CommentForOffer, Offer,OfferPreview,TCity,TUser, TErrorRequest} from '../types';

export const setCity = createAction<TCity>(ActionType.SetCity);

export const fillOffers = createAction<OfferPreview[]>(ActionType.FillOffers);
export const fillActiveOffer = createAction<Offer>(ActionType.FillActiveOffer);
export const fillCommentsByOffer = createAction<CommentForOffer[]>(ActionType.FillCommentsByOffer);
export const fillOffersNear = createAction<OfferPreview[]>(ActionType.FillOffersNear);
export const fillFavoriteOffer = createAction<OfferPreview[]>(ActionType.FillFavoriteOffer);

export const setFavoriteOfferStatus = createAction<boolean>(ActionType.SetFavoriteOfferStatus);
export const setCardActiveId = createAction<string>(ActionType.SetCardActiveId);
export const setCurrentSort = createAction<string>(ActionType.SetCurrentSort);

export const requireAuthorization = createAction<TUser>(ActionType.RequireAuthorization);
export const setError = createAction<TErrorRequest>(ActionType.SetError);

export const setRequestStatus = createAction<string>(ActionType.SetRequestStatus);

export const setAuthStatus = createAction<boolean>(ActionType.SetAuthStatus);

export const setRequestActiveOffer = createAction<boolean>(ActionType.SetRequestActiveOffer);
export const setRequestOffersNear = createAction<boolean>(ActionType.SetRequestOffersNear);
export const setRequestCommentsByOffer = createAction<boolean>(ActionType.SetRequestCommentsByOffer);
