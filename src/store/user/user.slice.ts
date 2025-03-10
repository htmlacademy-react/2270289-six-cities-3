import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpaces, userDefault } from '../../const';
import type { TInitialStateUser } from '../../types/state';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { toast } from 'react-toastify';

const initialState: TInitialStateUser = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: userDefault,
};

export const userSlice = createSlice({
  name: NameSpaces.User,
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = userDefault;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = userDefault;
        toast.error('Failed to login');
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = userDefault;
      });
  }
});

