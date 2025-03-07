//import { createSelector } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const';
import { TState } from '../../types/state';

export const nearAllOffers = (state: TState) => state[NameSpaces.OffersNear].offersNear;

