import type { TCity, TCommentForOffer, TUser, TErrorRequest } from './types/types';

export const TIMEOUT_SHOW_ERROR = 5000;

export const citiesList: TCity[] = [
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
  Page404 = '/Page404',
  Another = '/*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const typeCard = {
  cities: 'cities',
  favorite: 'favorite',
  near: 'near-places',
};

interface  ICardStyle {
  width: number;
  height: number;
  class: string;
}

interface  ISizeImage {
  width: number;
  height: number;
}

export const  ImageSizeByCard : {[key: string] : ICardStyle} = {
  'cities' : {
    width : 260,
    height: 200,
    class : 'cities'
  },
  'favorite' : {
    width : 150,
    height: 110,
    class : 'favorites',
  },
  'near-places': {
    width : 260,
    height: 200,
    class : 'near-places',
  },
};

export const  SvgSizeByPlace : {[key: string] : ISizeImage} = {
  'place-card' : {
    width : 18,
    height: 19,
  },
  'offer' : {
    width : 31,
    height: 33,
  },
};


export const FavoriteStatus = {
  Add: 1,
  Remove: 0,
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const enum ActionType {
  SetCity = 'offers/setCity',

  FillOffers = 'offers/fillOffers',
  FillActiveOffer = 'offers/fillActiveOffer',
  FillCommentsByOffer = 'offers/fillCommentsByOffer',
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

  SetAuthStatus = 'data/setAuthStatus',
  SetRequestActiveOffer = 'data/SetRequestActiveOffer',
  SetRequestOffersNear = 'data/setRequestOffersNear',
  SetRequestCommentsByOffer = 'data/setRequestCommentsByOffer',

  ChangeStatusFavoriteInOffers = 'data/changeStatusFavoriteInOffers',
  ChangeStatusFavoriteInOffersNear = 'data/changeStatusFavoriteInOffersNear',
  ChangeStatusFavoriteInCurrentOffer = 'data/changeStatusFavoriteInCurrentOffer',
  ChangeStatusFavoriteInFavoriteOffers = 'data/changeStatusFavoriteInFavoriteOffers',

  SetStatusFormSending = 'data/setStatusFormSending',

}

export const RequestStatus = {
  Idle: 'idle',
  Loading: 'loading',
  Success: 'success',
  Failed: 'failed',
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
  Comments: '/comments',
  Favorite: '/favorite',
  Login: '/login',
  Logout: '/logout',
  Offers: '/offers',
};

export const AuthData = {
  email: 'istanik@yandex.ru',
  password: 'passEdord12d',
};

export const userDefault: TUser = {
  name: '',
  email: '',
  avatarUrl: '',
  isPro: false,
  token: '',
//  authorizationStatus: <string>AuthorizationStatus.NoAuth,
};

export const errorEmpty: TErrorRequest = {
  status: 0,
  message: '',
};

export const typeMap = {
  cities: 'cities__map',
  offer: 'offer__map',
};

export const emptyComment: TCommentForOffer = {
  id: '',
  comment: '',
  date: '',
  rating: 0,
  user: {
    name: '',
    avatarUrl: '',
    isPro: false,
  }
};

export const emptyComments: TCommentForOffer[] = [{
  id: '',
  comment: '',
  date: '',
  rating: 0,
  user: {
    name: '',
    avatarUrl: '',
    isPro: false,
  }
}];

export const RATINGS = [
  {
    value: 5,
    title: 'perfect',
  },
  {
    value: 4,
    title: 'good',
  },
  {
    value: 3,
    title: 'not bad',
  },
  {
    value: 2,
    title: 'badly',
  },
  {
    value: 1,
    title: 'terribly',
  },
];

export const Comment = {
  InitState: '',
  MinLength: 50,
  MaxLength: 300,
  MinCount: 0,
  MaxCount: 10,
};

export const Rating = {
  InitState: 0,
};

export const classButtonFaforiteType = {
  default : 'bookmark-button',
  favorite : 'bookmark-button--active',
};

export const cityDefault = {
  name: 'Paris',
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  }
};

export const NameSpaces = {
  AllOffers: 'ALLOFFERS',
  OffersNear: 'OFFERSNEAR',
  Offer: 'OFFER',
  Favorites: 'FAVORITES',
  Reviews: 'REVIEWS',
  User: 'USER',
};

export const SortOptions = {
  Popular: 'Popular',
  PriceLowToHigh: 'Price: low to high',
  PriceHighToLow: 'Price: high to low',
  TopRatedFirst: 'Top rated first',
};
