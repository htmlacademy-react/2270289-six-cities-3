import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks/index.ts';

import ListOffer from '../../components/card-offer-list/card-offer-list';

import Header from '../../components/header/header.tsx';
import Map from '../../components/map/map.tsx';
import LoadingScreen from '../loading-screen/loading-screen.tsx';
import Page404 from '../404/page-404.tsx';

import { fetchCurrentOfferAction, fetchReviewsByOffer, fetchOffersNearAction, sendChangedStatusFavoriteAction, sendCommentAction } from '../../store/api-actions.ts';

import { changeStatusFavoriteInCurrentOffer } from '../../store/offer/offer.slice.ts';
import { changeStatusFavoriteInOffers } from '../../store/all-offers/all-offers.slice.ts';
import { changeStatusFavoriteInOffersNear } from '../../store/offers-near/offers-near.slice.ts';

import { typeMap, AuthorizationStatus, AppRoute } from '../../const';

import type { TCity, TOfferFavoriteStatus, TUserCommentWithID, TVariantPlace } from '../../types/types.ts';

import { useSelector } from 'react-redux';
import { currentCity } from '../../store/all-offers/all-offers.selectors.ts';
import { currentOffer, currentOffersLoadingStatus } from '../../store/offer/offer.selectors.ts';
import { nearAllOffers, nearAllOffersLoadingStatus } from '../../store/offers-near/offers-near.selectors.ts';
import { reviewsByOffer, reviewsByOfferLoadingStatus, reviewsByOfferSorted } from '../../store/reviews/reviews.selectors.ts';
import { userAuthorizationStatus } from '../../store/user/user.selectors.ts';
import { redirectToRoute } from '../../store/action.ts';

import OfferWrapper from '../../components/offer-wrapper/offer-wrapper.tsx';
import OfferGallery from '../../components/offer-gallery/offer-gallery.tsx';

type OfferProps = {
  variantPlace: TVariantPlace;
}

export default function Offer({ variantPlace }: OfferProps): JSX.Element {

  const { id } = useParams();
  const dispatch = useAppDispatch();

  const authStatus = useSelector(userAuthorizationStatus);
  const isAuth = authStatus === AuthorizationStatus.Auth;

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

  const activeOffer = useAppSelector(currentOffer);
  const nearOffersAll = useAppSelector(nearAllOffers);
  const nearOffersSlice = nearOffersAll ? nearOffersAll.slice(0, 3) : [];
  const commentsByOffer = useAppSelector(reviewsByOffer);
  const commentsByOfferSorted = useSelector(reviewsByOfferSorted);
  const countAllComments = commentsByOffer ? commentsByOffer.length : 0;

  const cityActiveForCheck = useAppSelector(currentCity);
  const cityOfferForCheck = activeOffer ? activeOffer.city : null;
  const activeCity = Boolean(cityOfferForCheck) ? cityOfferForCheck : cityActiveForCheck;

  const addComment = (comment: TUserCommentWithID): void => {
    dispatch(sendCommentAction(comment));
  };

  const changeStatusFavorite = () => {
    if (activeOffer) {
      const status = activeOffer.isFavorite;
      const statusNumber = status ? 0 : 1;
      const changeStatus: TOfferFavoriteStatus = {
        id: activeOffer.id,
        status: statusNumber,
      };
      if (isAuth) {
        dispatch(sendChangedStatusFavoriteAction(changeStatus)).
          then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
              dispatch(changeStatusFavoriteInOffers(changeStatus));
              dispatch(changeStatusFavoriteInOffersNear(changeStatus));
              dispatch(changeStatusFavoriteInCurrentOffer(changeStatus));
            }
          })
      } else {
        dispatch(redirectToRoute(AppRoute.Login));
      }
    }
  };

  const isAllLoading = (isActiveOfferLoading && isOffersNearLoading && isCommentsByOfferLoading);

  if (isAllLoading) {
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

          <OfferGallery images = {activeOffer.images}/>

          <div className="offer__container container">

            <OfferWrapper
              id={id as string}
              activeOffer={activeOffer}
              isAuth={isAuth}
              changeStatusFavorite={changeStatusFavorite}
              addComment={addComment}
              variantPlace={variantPlace}
              commentsByOfferSorted={commentsByOfferSorted}
              countAllComments={countAllComments}
            />

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
