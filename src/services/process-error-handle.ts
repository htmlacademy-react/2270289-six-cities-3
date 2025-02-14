
import {store} from '../store';
import {setError} from '../store/action';
import {clearErrorAction} from '../store/api-actions';
import type { errorRequest } from '../types';

export const processErrorHandle = (errorRequest: errorRequest): void => {
  store.dispatch(setError(errorRequest));
  //console.log('Задиспатчили ошибку');
  store.dispatch(clearErrorAction());
};
