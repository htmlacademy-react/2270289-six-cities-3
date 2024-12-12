export const directions:string[] = ['Paris','Cologne','Brussels','Amsterdam','Hamburg','Dusseldorf'];

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Page404 = '/*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum TypeCard {
  City = 'cities__card place-card',
  Favorite = 'favorites__card place-card'
}
