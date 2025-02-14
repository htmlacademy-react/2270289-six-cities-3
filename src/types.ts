type UserAuthData = {
  email: string;
  password: string;
};

export type AuthData = {
  login: string;
  password: string;
};

type User = {
  name: string;
  email: string;
  avatarUrl: string;
  token :string;
  isPro: boolean;
  authorizationStatus: string;
};

export type UserData = {
  name: string;
  email: string;
  avatarUrl: string;
  token: string;
  isPro: boolean;
};

type LocationPlace = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type CityDestination = {
  name: string;
  location: LocationPlace;
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
  city: CityDestination;
  location: LocationPlace;
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
  city: CityDestination;
  location: LocationPlace;
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

type Points = LocationPlace[];

type errorRequest = {
  status: number;
  message: string;
}

export type {Offer,OfferPreview,CommentForOffer,CityDestination, LocationPlace,Points,User,UserAuthData,errorRequest};
