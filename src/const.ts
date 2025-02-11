import type { CityDestination } from './types';

export const TIMEOUT_SHOW_ERROR = 6000;

export const citiesList: CityDestination[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  },
];

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
  cities: 'cities',
  favorite: 'favorite',
  near: 'near',
};

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const enum ActionType {
  SetCity = 'offers/setCity',

  FillOffers = 'offers/fillOffers',
  FillActiveOffer = 'offers/fillActiveOffer',
  FillOffersNear = 'offers/fillOffersNear',
  FillFavoriteOffer = 'offers/fillFavoriteOffer',
  SetFavoriteOfferStatus = 'offers/setFavoriteOfferStatus',

  SetCardActiveId = 'card/setActiveId',
  SetCurrentSort = 'sort/setCurrentSort',
  SetReviewByOffer = 'review/setReviewByOffer',
  FetchAllOffers = 'fetchOffers/all',
  RequireAuthorization = 'user/requireAuthorization',
  SetRequestStatus = 'data/setRequestStatus',
  SetError = 'request/setError',
}

export const RequestStatus = {
  Idle : 'idle',
  Loading : 'loading',
  Success : 'success',
  Failed : 'failed',
};

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

export const ApiRoute = {
  Comments : '/comments',
  Favorite : '/favorite',
  Login : '/login',
  Logout: '/logout',
  Offers: '/offers',
};

export const AuthData = {
  email : 'istanik@yandex.ru',
  password : 'passEdord12d',
};
