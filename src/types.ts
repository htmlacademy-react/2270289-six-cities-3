
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
  title: string;
  rating: number;
  description: string;
}

type UserDescription = {
  name : string;
  avatarUrl: string;
  isPro : boolean;
}

type CommentProposal = {
  id: string;
  comment: string;
  date: Date;
  rating: number;
  user: UserDescription;
}

type OfferProps = {
  offer: OfferPreview;
  variantCard : 'cities'|'favorite';
  mouseMove: (id:string|null) => void;
}

type ListOfferProps = {
  listOffer: OfferPreview[];
  variantCard : 'cities'|'favorite';
  mouseMove: (id:string|null) => void;
}


type RewiewByOffer = {
  offerId:string;
  listComments: CommentProposal[];
}

type Points = LocationPlace[];

export type {Offer,OfferPreview,CommentForOffer,CommentProposal,OfferProps,ListOfferProps, CityDestination, LocationPlace, RewiewByOffer,Points};
