import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../const';

export const setCity = createAction<string>(ActionType.SetCity);
