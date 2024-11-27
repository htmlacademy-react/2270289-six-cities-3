/*
{
"id": "6af6f711-c28d-4121-82cd-e0b462a27f00",
"title": "Beautiful & luxurious studio at great location",
"type": "apartment",
"price": 120,
"city": {
"name": "Amsterdam",
"location": {
"latitude": 52.35514938496378,
"longitude": 4.673877537499948,
"zoom": 8
}},
"location": {
"latitude": 52.35514938496378,
"longitude": 4.673877537499948,
"zoom": 8
},
"isFavorite": false,
"isPremium": false,
"rating": 4,
"description": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
"bedrooms": 3,
"goods": [
"Heating"
],
"host": {
"name": "Oliver Conner",
"avatarUrl": "https://url-to-image/image.png",
"isPro": false
},
"images": [
"https://url-to-image/image.png"
],
"maxAdults": 4
}
*/

type TypePlacement = string;
type CityName = string;

type Location = {
  latitude: number,
  longitude: number,
  zoom: number
};

type CityDestination = {
  name: CityName,
  location: Location
};

type Goods = string[];

type Hostel = {
  name: string,
  avatarUrl: string,
  isPro: boolean
};

type Images = string[];

type OfferCard = {
  id: string,
  title: string,
  type: TypePlacement,
  price: number,
  city: CityDestination,
  location: Location,
  isFavorite: boolean,
  isPremium: boolean,
  rating: number,
  description: string,
  bedrooms: number,
  goods: Goods,
  host: Hostel,
  images: Images,
  maxAdults: number
}

type ListCardProps = {
  listCards : OfferCard[],
};

export default function Card({listCards}:ListCardProps) : JSX.Element {
  return (
    <>
      {listCards.map((card) => (
        <article className="cities__card place-card">
                  <div className="place-card__mark">
                    {card.isPremium ? '<span>Premium</span>' : ''}
                  </div>
                  <div className="cities__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img className="place-card__image" src="{card.host.avatarUrl}" width="260" height="200" alt="Place image" />
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
          )
        }
    </>
  );
}
