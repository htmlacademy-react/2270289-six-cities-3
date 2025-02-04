import {createAction} from '@reduxjs/toolkit';
import {ActionType, AuthorizationStatus} from '../const';
import type {OfferPreview} from '../types';
import { MockReviewByOffer } from '../mocks/mock-reviews';
import type {CityDestination} from '../types';

type TypeMockReviewByOffer = typeof MockReviewByOffer;

export const setCity = createAction<CityDestination>(ActionType.SetCity);
export const fillOffer = createAction<OfferPreview[]>(ActionType.FillOffer);
export const setCardActiveId = createAction<string>(ActionType.SetCardActiveId);
export const setCurrentSort = createAction<string>(ActionType.SetCurrentSort);

export const setReviewByOffer = createAction<TypeMockReviewByOffer>(ActionType.SetReviewByOffer);

export const requireAuthorization = createAction<AuthorizationStatus>(ActionType.RequireAuthorization);
export const setRequestStatus = createAction<string>(ActionType.SetRequestStatus);

export const setError = createAction<string>(ActionType.SetError);
