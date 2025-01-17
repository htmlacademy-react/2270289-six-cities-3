import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../const';
import type {OfferPreview} from '../types';

export const setCity = createAction<string>(ActionType.SetCity);
export const fillOffer =createAction<OfferPreview[]>(ActionType.FillOffer)
