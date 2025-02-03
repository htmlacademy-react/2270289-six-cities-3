import {AxiosInstance} from 'axios';
import axios from 'axios';
import {getToken,AUTH_TOKEN_KEY } from './token';
//import {AxiosRequestConfig} from 'axios';
//import type { OfferPreview } from '../types';

const enum DefaultConnect {
  BaseUrl = 'https://15.design.htmlacademy.pro/six-cities',
  Timeout = 5000,
}

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
