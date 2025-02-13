import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../const';
import type {CommentForOffer, Offer,OfferPreview} from '../types';
import { MockReviewByOffer } from '../mocks/mock-reviews';
import type {CityDestination,User} from '../types';

type TypeMockReviewByOffer = typeof MockReviewByOffer;

export const setCity = createAction<CityDestination>(ActionType.SetCity);

export const fillOffers = createAction<OfferPreview[]>(ActionType.FillOffers);

export const fillActiveOffer = createAction<Offer>(ActionType.FillActiveOffer);
export const fillCommentsByOffer = createAction<CommentForOffer[]>(ActionType.FillCommentsByOffer);

export const fillOffersNear = createAction<OfferPreview[]>(ActionType.FillOffersNear);
export const fillFavoriteOffer = createAction<OfferPreview[]>(ActionType.FillFavoriteOffer);

export const setFavoriteOfferStatus = createAction<boolean>(ActionType.SetFavoriteOfferStatus);
export const setCardActiveId = createAction<string>(ActionType.SetCardActiveId);
export const setCurrentSort = createAction<string>(ActionType.SetCurrentSort);
export const setReviewByOffer = createAction<TypeMockReviewByOffer>(ActionType.SetReviewByOffer);

export const requireAuthorization = createAction<User>(ActionType.RequireAuthorization);

export const setRequestStatus = createAction<string>(ActionType.SetRequestStatus);

export const setError = createAction<string>(ActionType.SetError);

export const setRequestAuthStatus = createAction<boolean>(ActionType.SetRequestAuthStatus);
export const setRequestActiveOffer = createAction<boolean>(ActionType.SetRequestActiveOffer);
export const setRequestOffersNear = createAction<boolean>(ActionType.SetRequestOffersNear);
export const setRequestCommentsByOffer = createAction<boolean>(ActionType.SetRequestCommentsByOffer);


