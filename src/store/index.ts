/*
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

export const _store = configureStore({reducer});
*/

import {configureStore} from '@reduxjs/toolkit';
//import {combineReducers} from '@reduxjs/toolkit';
import { createApi } from '../services/api';
import { reducer } from './reducer';

//const reducer = combineReducers({})
export const api = createApi();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
    },
  }),
})
