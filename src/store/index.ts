import {configureStore} from '@reduxjs/toolkit';
//import {combineReducers} from '@reduxjs/toolkit';
import { createApi } from '../services/api';
import { reducer } from './reducer';

//const reducer = combineReducers({})

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: createApi()
    }
  }),
  reducer,
})
