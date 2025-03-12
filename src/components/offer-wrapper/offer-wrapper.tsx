
import { TCommentForOffer, TOffer, TUserCommentWithID, TVariantPlace } from "../../types/types";

import OfferFeatures from "../offer-features/offer-features";
import OfferHost from "../offer-host/offer-host";
import OfferInside from "../offer-inside/offer-inside";
import OfferPrice from "../offer-price/offer-price";
import OfferRating from "../offer-rating/offer-rating";
import OfferWrapperName from "../offer-wrapper-name/offer-wrapper-name";
import ReviewForm from "../review-form/review-form";
import ReviewList from "../review-list/review-list";

type OfferWrapperProps = {
  id: string;
  activeOffer: TOffer;
  isAuth: boolean;
  changeStatusFavorite: () => void;
  addComment: (comment: TUserCommentWithID) => void;
  variantPlace: TVariantPlace;
  commentsByOfferSorted: TCommentForOffer[];
  countAllComments: number;
}

export default function OfferWrapper({
  id,
  activeOffer,
  isAuth,
  changeStatusFavorite,
  addComment,
  variantPlace,
  commentsByOfferSorted,
  countAllComments,
}: OfferWrapperProps): JSX.Element {

  return (
    <div className="offer__wrapper">
      <div className="offer__mark">
        {(activeOffer.isPremium) && (<span>Premium</span>)}
      </div>

      <OfferWrapperName
        activeOffer={activeOffer}
        variantPlace={variantPlace}
        changeStatusFavorite={changeStatusFavorite}
      />

      <OfferRating rating={activeOffer.rating} />
      <OfferFeatures
        type ={activeOffer.type}
        bedrooms = {activeOffer.bedrooms}
        maxAdults = {activeOffer.maxAdults}
      />
      <OfferPrice price={activeOffer.price} />
      <OfferInside goods={activeOffer.goods} />

      <OfferHost activeOffer={activeOffer} />

      <section className="offer__reviews reviews">
        <ReviewList commentsByOfferSorted={commentsByOfferSorted} countAllComments={countAllComments} />
        {(isAuth) && (<ReviewForm addComment={addComment} idOffer={id} />)}
      </section>

    </div>
  )
}
