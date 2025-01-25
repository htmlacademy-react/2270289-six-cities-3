import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../const';
import type {OfferPreview} from '../types';
import { MockReviewByOffer } from '../mocks/mock-reviews';
import type {CityDestination} from '../types';

type TypeMockReviewByOffer = typeof MockReviewByOffer;

export const setCity = createAction<CityDestination>(ActionType.SetCity);
export const fillOffer = createAction<OfferPreview[]>(ActionType.FillOffer);
export const setCardActiveId = createAction<string>(ActionType.SetCardActiveId);
export const setCurrentSort = createAction<string>(ActionType.SetCurrentSort);
export const setReviewByOffer = createAction<TypeMockReviewByOffer>(ActionType.SetReviewByOffer);
