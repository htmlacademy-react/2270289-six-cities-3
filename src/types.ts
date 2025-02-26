type UserAuthData = {
  email: string;
  password: string;
};

export type AuthData = {
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

export type UserData = {
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

type Hostel = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

type Images = string[];

type Offer = {
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
  host: Hostel;
  images: Images;
  maxAdults: number;
}

type OfferPreview = {
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

type CommentForOffer = {
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

type UserComment = {
  rating: number;
  comment: string;
};

type UserCommentWithID = {
  id: string;
  rating: number;
  comment: string;
};

type Points = TLocation[];

type TErrorRequest = {
  status: number;
  message: string;
}

type TInitialState = {
  city : TCity,
  activeOffer: Offer | null,
  offers : OfferPreview[] | null,
  offersNear: OfferPreview[] | null,
  favoriteOffers: OfferPreview [] | null,
  reviewsByOffer: CommentForOffer[] | null,
  cardActiveId: string | null,
  currentSort: string | null,
  requestStatus : string | null,
  error: TErrorRequest | null,
  user: TUser | null,
  //isRequestAuth: boolean,
  isAuth: boolean,
  isDownloadFavoriteOffers: boolean,
  isRequestActiveOffer: boolean,
  isRequestOffersNear: boolean,
  isRequestCommentsByOffer: boolean,
};

export type {Offer,OfferPreview,CommentForOffer,TCity, TLocation,Points,TUser,UserAuthData,TErrorRequest,UserComment,UserCommentWithID,TInitialState};
