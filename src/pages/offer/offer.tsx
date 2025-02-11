
import ListOffer from '../../components/card-offer-list/card-offer-list';
import ReviewForm from '../../components/review-form/review-form';
import ReviewList from '../../components/review-list/review-list';

import useMap from '../../hooks/use-map';
import {useRef,useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/index.ts';

import {Marker,Icon,layerGroup} from 'leaflet';
import {URL_MARKER_DEFAULT,URL_MARKER_CURRENT, RequestStatus} from '../../const';

//import {selectorNearListOffer } from '../../store/selectors.ts';
//import {shallowEqual} from 'react-redux';
import Header from '../../components/header/header.tsx';
import { fetchActiveOfferAction, fetchOffersNearAction } from '../../store/api-actions.ts';
import { setRequestStatus } from '../../store/action.ts';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export default function Offer() : JSX.Element {

  const currentCity = useAppSelector((state) => state.city);
  //const offers = useAppSelector((state) => state.offers);
  //const currentActiveOfferID = useAppSelector((state) => state.cardActiveId);
  //const currentOffersByCity = offers.filter((itemOffer: { city: { name: string } }) => itemOffer.city.name === currentCity.name);
  //const currentCity = currentOffersByCity[0].city;

  const dispatch = useAppDispatch();
  dispatch(setRequestStatus(RequestStatus.Idle));

  const requestStatus = useAppSelector((state) => state.requestStatus);

  useEffect(() => {
    if (requestStatus !== RequestStatus.Success) {
      dispatch(fetchActiveOfferAction());
    }

  }, []);

  useEffect(() => {
    if (requestStatus !== RequestStatus.Success) {
      dispatch(fetchOffersNearAction());
    }
  }, []);

  const currentOffer = useAppSelector((state) => state.activeOffer);

  const sortedNearListOffer = useAppSelector((state) => state.offersNear);
  const reviewsByOffer = useAppSelector((state) => state.reviewsByOffer);

  const mapRef = useRef(null);
  const map = useMap(mapRef,currentCity);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      sortedNearListOffer.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });
        marker
          .setIcon(defaultCustomIcon)
          .addTo(markerLayer);
      });

      const marker = new Marker({
        lat: currentOffer.location.latitude,
        lng: currentOffer.location.longitude
      });
      marker
        .setIcon(currentCustomIcon)
        .addTo(markerLayer);

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map]);


  return (
    <div className="page">

      <Header />

      <main className="page__main page__main--offer" >
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/room.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-02.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-03.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/studio-01.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio" />
              </div>
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  Beautiful &amp; luxurious studio at great location
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">4.8</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  Apartment
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;120</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  <li className="offer__inside-item">
                    Wi-Fi
                  </li>
                  <li className="offer__inside-item">
                    Washing machine
                  </li>
                  <li className="offer__inside-item">
                    Towels
                  </li>
                  <li className="offer__inside-item">
                    Heating
                  </li>
                  <li className="offer__inside-item">
                    Coffee machine
                  </li>
                  <li className="offer__inside-item">
                    Baby seat
                  </li>
                  <li className="offer__inside-item">
                    Kitchen
                  </li>
                  <li className="offer__inside-item">
                    Dishwasher
                  </li>
                  <li className="offer__inside-item">
                    Cabel TV
                  </li>
                  <li className="offer__inside-item">
                    Fridge
                  </li>
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    Angelina
                  </span>
                  <span className="offer__user-status">
                    Pro
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">

                <ReviewList commentsList={reviewsByOffer.commentsList} />
                <ReviewForm />

              </section>
            </div>
          </div>

          <section className="offer__map map" ref = {mapRef} ></section>

        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <ListOffer listOffer={sortedNearListOffer} variantCard='near-places'/>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
