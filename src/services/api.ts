import axios from 'axios';
import {AxiosInstance,AxiosError} from 'axios';
import {getToken,AUTH_TOKEN_KEY} from './token';

//import { processErrorHandle } from './process-error-handle';

import { TErrorRequest } from '../types';
import {toast} from 'react-toastify';

const enum DefaultConnect {
  BaseUrl = 'https://15.design.htmlacademy.pro/six-cities',
  Timeout = 5000,
}

type DetailMessageType = {
  status: number;
  type: string;
  message: string;
}

export const createApi = () : AxiosInstance => {
  const api = axios.create({
    baseURL: DefaultConnect.BaseUrl as string,
    timeout: DefaultConnect.Timeout as number,
  });

  api.interceptors.request.use(
    (config) => {
      const token = getToken(AUTH_TOKEN_KEY);
      if (token && config.headers) {
        config.headers['X-token'] = token;
      }
      return config;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response) {
        const errorRequest : TErrorRequest = {
          status : error.response.status,
          message: error.response.data.message,
        };
        //console.log(errorRequest);
        //processErrorHandle(errorRequest);
        toast.warn(errorRequest.message);
      }
      throw error;
    }
  );
  return api;
};
