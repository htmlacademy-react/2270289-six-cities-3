import axios from 'axios';
import {AxiosInstance,AxiosResponse,AxiosError} from 'axios';
import {StatusCodes} from 'http-status-codes';
import {getToken,AUTH_TOKEN_KEY} from './token';

import { processErrorHandle } from './process-error-handle';
import { errorRequestType } from '../types';

const enum DefaultConnect {
  BaseUrl = 'https://15.design.htmlacademy.pro/six-cities',
  Timeout = 5000,
}

type DetailMessageType = {
  status: number;
  type: string;
  message: string;
}

const StatusCodeMaping : Record<number,boolean> = {
  [StatusCodes.BAD_REQUEST] : true,
  [StatusCodes.UNAUTHORIZED] : true,
  [StatusCodes.NOT_FOUND] : true,
};

const shouldDisplayError = (response : AxiosResponse) => !!StatusCodeMaping[response.status];

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
      if (error.response && shouldDisplayError(error.response)) {
        console.log('error.response',error.response);
        const errorRequest : errorRequestType = {
          status : error.response.status,
          message: error.response.data.message,
        }
        processErrorHandle(errorRequest);
      }
      throw error;
    }
  );

  return api;
};
