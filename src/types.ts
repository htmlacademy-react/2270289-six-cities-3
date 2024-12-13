
type LocationPlace = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type CityDestination = {
  name: string;
  location: LocationPlace;
};

type Goods = string[];

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
  goods: Goods;
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
  nameUser : string;
  avatarUrl: string;
  isPro : boolean;
}

type CommentProposal = {
  id: string;
  date: Date;
  user: UserDescription;
  comment: string;
  rating: number;
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

export type {Offer,OfferPreview,CommentForOffer,CommentProposal,OfferProps,ListOfferProps};
