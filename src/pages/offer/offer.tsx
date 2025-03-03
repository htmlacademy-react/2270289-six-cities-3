import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/index.ts';

import ListOffer from '../../components/card-offer-list/card-offer-list';
import ReviewForm from '../../components/review-form/review-form';
import ReviewList from '../../components/review-list/review-list';
import Header from '../../components/header/header.tsx';
import Map from '../../components/map/map.tsx';
import LoadingScreen from '../loading-screen/loading-screen.tsx';
import Page404 from '../404/page-404.tsx';

import { fetchActiveOfferAction, fetchListCommentsByOffer, fetchOffersNearAction, sendChangedStatusFavoriteAction, sendCommentAction } from '../../store/api-actions.ts';
import { typeMap, Comment, classButtonFaforiteType } from '../../const';
import { TCommentForOffer, TOfferFavoriteStatus, TOfferPreview, TUserCommentWithID } from '../../types.ts';
import { convertRatingToStyleWidthPercent } from '../../utils.ts';
import { changeStatusFavoriteInCurrentOffer, changeStatusFavoriteInFavoriteOffers, changeStatusFavoriteInOffers, changeStatusFavoriteInOffersNear, fillCommentsByOffer } from '../../store/action.ts';
import { Helmet } from 'react-helmet-async';

export default function Offer(): JSX.Element {

  const currentCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.isAuth);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchActiveOfferAction(id));
      dispatch(fetchListCommentsByOffer(id));
      dispatch(fetchOffersNearAction(id));
    }
  }, []);

  const requestActiveOfferStatus = useAppSelector((state) => state.isRequestActiveOffer);
  const requestOffersNearStatus = useAppSelector((state) => state.isRequestOffersNear);
  const requestCommentsByOffer = useAppSelector((state) => state.isRequestCommentsByOffer);

  const currentOffer = useAppSelector((state) => state.activeOffer);
  const nearOffers = useAppSelector((state) => state.offersNear ? state.offersNear : []).slice(0, 3);
  const reviewsByOffer = useAppSelector((state) => state.reviewsByOffer ? state.reviewsByOffer : []);
  const reviewsByOfferSorted = reviewsByOffer
    .toSorted((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .slice(Comment.MinCount, Comment.MaxCount);
  const countAllComments = reviewsByOffer.length;

  const addComment = (comment: TUserCommentWithID): void => {
    dispatch(sendCommentAction(comment))
      .then((response) => {
        dispatch(fillCommentsByOffer([response.payload as TCommentForOffer, ...reviewsByOffer]));
      });
  };

  const [isVisibleLoadingScreen, setIsVisibleLoadingScreen] = useState(false);

  useEffect(() => {
    if ((!requestActiveOfferStatus || !requestOffersNearStatus || !requestCommentsByOffer)) {
      setIsVisibleLoadingScreen(true);
      setTimeout(() => {
        setIsVisibleLoadingScreen(false);
      }, 200);
    }
  }, []);

  const changeStatusFavorite = () => {
    if (currentOffer) {
      const status = currentOffer.isFavorite;
      const statusNumber = status ? 0 : 1;
      const changeStatus: TOfferFavoriteStatus = {
        id: currentOffer.id,
        status: statusNumber,
      }
      dispatch(sendChangedStatusFavoriteAction(changeStatus))
        .then((response) => {
          dispatch(changeStatusFavoriteInFavoriteOffers(response.payload as TOfferPreview));
        })
      dispatch(changeStatusFavoriteInOffers(changeStatus));
      dispatch(changeStatusFavoriteInOffersNear(changeStatus));
      dispatch(changeStatusFavoriteInCurrentOffer(changeStatus));
    }
  }

  if (isVisibleLoadingScreen) {
    return (
      <LoadingScreen />
    );
  }

  if (!currentOffer) {
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
              {(currentOffer.images.map((urlImage) => (
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
                {(currentOffer.isPremium) && (<span>Premium</span>)}
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {currentOffer.title}
                </h1>
                <button
                  className={
                    (currentOffer.isFavorite) ?
                      `offer__${classButtonFaforiteType.default} offer__${classButtonFaforiteType.favorite} button` :
                      `offer__${classButtonFaforiteType.default} button`
                  }
                  type="button"
                  onClick={changeStatusFavorite}
                >
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={convertRatingToStyleWidthPercent(currentOffer.rating)}>
                  </span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {currentOffer.rating}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {currentOffer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {`${currentOffer.bedrooms} Bedrooms`}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {`Max ${currentOffer.maxAdults} adults`}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{currentOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {currentOffer.goods.map((itemGood) => (
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
                      src={currentOffer.host.avatarUrl}
                      width="74" height="74" alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {currentOffer.host.name}
                  </span>
                  <span className="offer__user-status">
                    {(currentOffer.host.isPro) && ('Pro')}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">

                <ReviewList commentsByOfferSorted={reviewsByOfferSorted} countAllComments={countAllComments} />

                {(isAuth) && (<ReviewForm addComment={addComment} idOffer={(id) ? id : null} />)}
              </section>
            </div>
          </div>
          <Map currentCity={currentCity} offers={nearOffers} currentOffer={currentOffer} typeMap={typeMap.offer} />
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <ListOffer listOffer={nearOffers} variantCard='near-places' />
            </div>
          </section>
        </div>

      </main>
    </div>
  );
}
