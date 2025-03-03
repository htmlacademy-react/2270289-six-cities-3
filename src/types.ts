type TUserAuthData = {
  email: string;
  password: string;
};

export type TAuthData = {
  login: string;
  password: string;
};

type TUser = {
  name: string;
  email: string;
  avatarUrl: string;
  token :string;
  isPro: boolean;
  //authorizationStatus: string;
};

export type TUserData = {
  name: string;
  email: string;
  avatarUrl: string;
  token: string;
  isPro: boolean;
};

type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type TCity = {
  name: string;
  location: TLocation;
};

type THostel = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

type TImages = string[];

type TOffer = {
  id : string;
  title: string;
  type: string;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: THostel;
  images: TImages;
  maxAdults: number;
}

type TOfferPreview = {
  id : string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

type TCommentForOffer = {
  id : string;
  comment: string;
  date: string;
  rating: number;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
}

type TUserComment = {
  rating: number;
  comment: string;
};

type TUserCommentWithID = {
  id: string;
  rating: number;
  comment: string;
};

type TPoints = TLocation[];

type TErrorRequest = {
  status: number | null;
  message: string;
}

type TInitialState = {
  city : TCity;
  activeOffer: TOffer | null;
  offers : TOfferPreview[] | null;
  offersNear: TOfferPreview[] | null;
  favoriteOffers: TOfferPreview [] | null;
  reviewsByOffer: TCommentForOffer[] | null;
  cardActiveId: string | null;
  currentSort: string | null;
  requestStatus : string | null;
  error: TErrorRequest | null;
  user: TUser | null;
  isAuth: boolean;
  isDownloadFavoriteOffers: boolean;
  isRequestActiveOffer: boolean;
  isRequestOffersNear: boolean;
  isRequestCommentsByOffer: boolean;
  isFormCommentSending: boolean;
};

type TOfferFavoriteStatus = {
  id: string;
  status : number;
}

export type {TOffer,TOfferPreview,TCommentForOffer,TCity, TLocation,TPoints,TUser,TUserAuthData,TErrorRequest,};
export type {TUserComment,TUserCommentWithID,TInitialState,TOfferFavoriteStatus};
