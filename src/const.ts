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

export const typeCard = {
  cities : 'cities',
  favorite : 'favorite',
  near : 'near',
};

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const enum ActionType {
  SetCity = 'offers/setCity',
  FillOffer = 'offers/fillOffer',
  SetCardActiveId = 'card/setActiveId',
  SetCurrentSort = 'sort/setCurrentSort',
  SetReviewByOffer = 'review/setReviewByOffer'
}

export const SORT_OPTIONS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
];

export enum SortOption {
  Popular = 0,
  PriceLowToHigh = 1,
  PriceHighToLow = 2,
  TopRatedFirst = 3
}
