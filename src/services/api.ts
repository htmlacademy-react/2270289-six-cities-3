import {AxiosInstance} from 'axios';
import axios from 'axios';
import {AxiosRequestConfig,AxiosResponse,AxiosError} from 'axios';
import { StatusCodes } from 'http-status-codes';
import {getToken,AUTH_TOKEN_KEY } from './token';

import { processErrorHandle } from './process-error-handle';

//import {AxiosRequestConfig} from 'axios';
//import type { OfferPreview } from '../types';

const enum DefaultConnect {
  BaseUrl = 'https://15.design.htmlacademy.pro/six-cities',
  Timeout = 5000,
}

type DetailMessageType = {
  type: string;
  message: string;
}

const StatusCodeMaping : Record<number,boolean> = {
  [StatusCodes.BAD_REQUEST] : true,
  [StatusCodes.UNAUTHORIZED] : true,
  [StatusCodes.NOT_FOUND] : true,
}

const shouldDisplayError = (response : AxiosResponse) => !!StatusCodeMaping[response.status];

export const createApi = () : AxiosInstance => {
  const api = axios.create({
    baseURL: DefaultConnect.BaseUrl as string,
    timeout: DefaultConnect.Timeout as number,
  });

  api.interceptors.request.use((config) => {
    const token = getToken(AUTH_TOKEN_KEY);

    if (token && config.headers) {
      config.headers['X-token'] = token;
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = (error.response.data);
        processErrorHandle(detailMessage.message);
      }
      throw error;
    }
  );

  return api;
};

/*
export function getData (url:string,timeout:number) {
  const gData : OfferPreview[] = [];
  axios.get(url,{timeout: timeout, headers: {'X-token': 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20='},})
    .then((response) => {
      console.log('response.data',response.data);

      const gDat : OfferPreview[] = Array.from(response.data)

      console.log('gDat',gDat);
      gData.push(...gDat);

    })
    .catch((err) => {
      console.log(`Error: ${err.message}`);
    });
    console.log('gData',gData);
  return gData;
}
*/
