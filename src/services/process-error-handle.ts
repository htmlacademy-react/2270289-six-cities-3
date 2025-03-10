
import {store} from '../store';
import {setError} from '../store/action';
import {clearErrorAction} from '../store/api-actions';
import type { errorRequestType } from '../types';

export const processErrorHandle = (errorRequest: errorRequestType): void => {
  store.dispatch(setError(errorRequest));
  if (errorRequest.status !== 404) {
    store.dispatch(clearErrorAction());
  }
};
