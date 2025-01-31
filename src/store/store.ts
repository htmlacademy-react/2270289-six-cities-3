import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

export const _store = configureStore({reducer});
