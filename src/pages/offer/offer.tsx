import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks/index.ts';

import ListOffer from '../../components/card-offer-list/card-offer-list';
import ReviewForm from '../../components/review-form/review-form';
import ReviewList from '../../components/review-list/review-list';
import Header from '../../components/header/header.tsx';
import Map from '../../components/map/map.tsx';
import LoadingScreen from '../loading-screen/loading-screen.tsx';
import Page404 from '../404/page-404.tsx';

import { fetchCurrentOfferAction, fetchReviewsByOffer, fetchOffersNearAction, sendChangedStatusFavoriteAction, sendCommentAction } from '../../store/api-actions.ts';

import { changeStatusFavoriteInCurrentOffer} from '../../store/offer/offer.slice.ts';
import { changeStatusFavoriteInOffers } from '../../store/all-offers/all-offers.slice.ts';
import { changeStatusFavoriteInOffersNear } from '../../store/offers-near/offers-near.slice.ts';

import { typeMap, classButtonFaforiteType, SvgSizeByPlace, AuthorizationStatus } from '../../const';
import { convertRatingToStyleWidthPercent } from '../../utils.ts';

import type { TCity, TOfferFavoriteStatus, TUserCommentWithID, TVariantPlace } from '../../types/types.ts';

import { useSelector } from 'react-redux';
import { currentCity } from '../../store/all-offers/all-offers.selectors.ts';
import { currentOffer, currentOffersLoadingStatus } from '../../store/offer/offer.selectors.ts';
import { nearAllOffers, nearAllOffersLoadingStatus } from '../../store/offers-near/offers-near.selectors.ts';
import { reviewsByOffer, reviewsByOfferLoadingStatus, reviewsByOfferSorted } from '../../store/reviews/reviews.selectors.ts';
import { userAuthorizationStatus } from '../../store/user/user.selectors.ts';

type OfferProps = {
  variantPlace : TVariantPlace;
}

export default function Offer({variantPlace} : OfferProps): JSX.Element {

  const activeOffer = useSelector(currentOffer);
  const cityActiveForCheck = useSelector(currentCity);
  const cityOfferForCheck = activeOffer ? activeOffer.city : null;

  //const isEqualCities = cityOfferForCheck ===
  //const activeCity = useSelector(currentCity);

  const activeCity = Boolean(cityOfferForCheck) ? cityOfferForCheck : cityActiveForCheck;

  const dispatch = useAppDispatch();
  const isAuth = useSelector(userAuthorizationStatus) === AuthorizationStatus.Auth;
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchCurrentOfferAction(id));
      dispatch(fetchReviewsByOffer(id));
      dispatch(fetchOffersNearAction(id));
    }
  }, []);

  const isActiveOfferLoading = useSelector(currentOffersLoadingStatus);
  const isOffersNearLoading = useSelector(nearAllOffersLoadingStatus);
  const isCommentsByOfferLoading = useSelector(reviewsByOfferLoadingStatus);



  const nearOffersAll = useSelector(nearAllOffers);
  const nearOffersSlice = nearOffersAll ? nearOffersAll.slice(0,3) : [];

  const commentsByOffer = useSelector(reviewsByOffer);
  const commentsByOfferSorted = useSelector(reviewsByOfferSorted);
  const countAllComments = commentsByOffer ? commentsByOffer.length : 0;

  const addComment = (comment: TUserCommentWithID): void => {
    dispatch(sendCommentAction(comment));
  };

  const [isVisibleLoadingScreen, setIsVisibleLoadingScreen] = useState(false);

  useEffect(() => {
    if ((isActiveOfferLoading || isOffersNearLoading || isCommentsByOfferLoading)) {
      setIsVisibleLoadingScreen(true);
      setTimeout(() => {
        setIsVisibleLoadingScreen(false);
      }, 200);
    }
  }, []);

  const changeStatusFavorite = () => {
    if (activeOffer) {
      const status = activeOffer.isFavorite;
      const statusNumber = status ? 0 : 1;
      const changeStatus: TOfferFavoriteStatus = {
        id: activeOffer.id,
        status: statusNumber,
      };
      dispatch(sendChangedStatusFavoriteAction(changeStatus));
      dispatch(changeStatusFavoriteInOffers(changeStatus));
      dispatch(changeStatusFavoriteInOffersNear(changeStatus));
      dispatch(changeStatusFavoriteInCurrentOffer(changeStatus));
    }
  };

  if (isVisibleLoadingScreen) {
    return (
      <LoadingScreen />
    );
  }

  if (!activeOffer) {
    return (
      <Page404 />
    );
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 cities - Offer Page</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--offer" >
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {(activeOffer.images.map((urlImage) => (
                <div className="offer__image-wrapper" key={urlImage}>
                  <img className="offer__image" src={urlImage} alt="Photo studio" />
                </div>
              )
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                {(activeOffer.isPremium) && (<span>Premium</span>)}
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {activeOffer.title}
                </h1>
                <button
                  className={
                    (activeOffer.isFavorite) ?
                      `offer__${classButtonFaforiteType.default} offer__${classButtonFaforiteType.favorite} button` :
                      `offer__${classButtonFaforiteType.default} button`
                  }
                  type="button"
                  onClick={changeStatusFavorite}
                >
                  <svg
                    className="offer__bookmark-icon"
                    width = {SvgSizeByPlace[variantPlace].width}
                    height = {SvgSizeByPlace[variantPlace].height}
                  >
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={convertRatingToStyleWidthPercent(activeOffer.rating)}>
                  </span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {activeOffer.rating}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {activeOffer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {`${activeOffer.bedrooms} Bedrooms`}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {`Max ${activeOffer.maxAdults} adults`}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{activeOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {activeOffer.goods.map((itemGood) => (
                    <li className="offer__inside-item" key={itemGood}>
                      {itemGood}
                    </li>)
                  )}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar"
                      src={activeOffer.host.avatarUrl}
                      width="74" height="74" alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {activeOffer.host.name}
                  </span>
                  <span className="offer__user-status">
                    {(activeOffer.host.isPro) && ('Pro')}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {activeOffer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">

                <ReviewList commentsByOfferSorted={commentsByOfferSorted} countAllComments={countAllComments} />

                {(isAuth) && (<ReviewForm addComment={addComment} idOffer={(id) ? id : null} />)}
              </section>
            </div>
          </div>
          <Map currentCity={activeCity as TCity} offers={nearOffersSlice} currentOffer={activeOffer} typeMap={typeMap.offer} />
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <ListOffer listOffer={nearOffersSlice} variantCard='near-places' variantPlace='place-card' />
            </div>
          </section>
        </div>

      </main>
    </div>
  );
}
