export const AUTH_TOKEN = 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=';
export const AUTH_TOKEN_KEY = 'six-cities';

export type Token = string;
export type TokenKey = string;

export const getToken = (tokenKey : TokenKey) : Token => localStorage.getItem(tokenKey) ?? '_';

export const saveToken = (tokenKey : TokenKey,token : Token) => {
  console.log('количество элементов в хранилище : ',localStorage.length);
  console.log('tokenKey : ',tokenKey,'   token',token)
  localStorage.setItem(tokenKey,token);
  console.log('Якобы сохранили...');
  console.log('Считываем...=> ', localStorage.getItem(token) || '_');


  console.log('А сейчас попробуем конкретными значениями...');

}
export const dropToken = (tokenKey : TokenKey) => localStorage.removeItem(tokenKey);
