import {useState} from 'react';

type TypePlacement = string;
type CityName = string;

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type CityDestination = {
  name: CityName;
  location: Location;
};

type Goods = string[];

type Hostel = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

type Images = string[];

type OfferCard = {
  id : string;
  title: string;
  type: TypePlacement;
  price: number;
  city: CityDestination;
  location: Location;
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

type OfferPreviewCard = {
  id : string;
  title: string;
  type: TypePlacement;
  price: number;
  previewImage: string;
  city: CityDestination;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

type ListCardProps = {
  listCards : OfferCard[];
};

type ListPreviewCardProps = {
  listPreviewCards: OfferPreviewCard[];
}


function CardOffer ({card} : {card: OfferPreviewCard}) : JSX.Element {
  const [cardActive, setCardActive] = useState('');
  return (
    <article className="cities__card place-card"
      onMouseOver={() => {
        setCardActive(card.id)
        console.log(cardActive);
      }}
    >
      <div className="place-card__mark">
        <span>
          {card.isPremium ? 'Premium' : ''}
        </span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={card.previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{card.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{card.title}</a>
        </h2>
        <p className="place-card__type">{card.type}</p>
      </div>
    </article>
  )
}

export default function ListOffer({listPreviewCards}:ListPreviewCardProps) : JSX.Element {
  return (
    <>
      {listPreviewCards.map((cardItem) => (
        <CardOffer card = {cardItem}  key = {cardItem.id} />
      )
      )}
    </>
  );
}

export type {ListCardProps,ListPreviewCardProps,OfferPreviewCard};
