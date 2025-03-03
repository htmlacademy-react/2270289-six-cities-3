import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/index.ts';
import { changeStatusFavoriteInCurrentOffer, changeStatusFavoriteInFavoriteOffers, changeStatusFavoriteInOffers, changeStatusFavoriteInOffersNear, setCardActiveId } from '../../store/action.ts';
import type { TOfferFavoriteStatus, TOfferPreview } from '../../types.ts';
import { convertRatingToStyleWidthPercent } from '../../utils.ts';
import { sendChangedStatusFavoriteAction } from '../../store/api-actions.ts';
import { classButtonFaforiteType } from '../../const.ts';

type OfferProps = {
  offer: TOfferPreview;
  variantCard: 'cities' | 'favorite' | 'near-places';
}

export default function CardOffer({ offer, variantCard }: OfferProps): JSX.Element {

  const linkTo = `/offer/${offer.id}`;
  const isShowSpanPremium = variantCard !== 'near-places';
  const dispatch = useAppDispatch();
  const cardActiveId = useAppSelector((state) => state.cardActiveId);
  const offers = useAppSelector((state) => state.offers);

  const changeStatusFavorite = () => {
    if (offers) {
      const currentOffer = offers.find((item) => item.id === cardActiveId);
      if (currentOffer) {
        const status = currentOffer.isFavorite;
        const statusNumber = status ? 0 : 1;
        const changeStatus : TOfferFavoriteStatus = {
          id : cardActiveId as string,
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
  }

  return (
    <article className={`${variantCard}__card place-card`}
      onMouseEnter={() => {
        dispatch(setCardActiveId(offer.id));
      }}
      onMouseLeave={() => {
        dispatch(setCardActiveId(''));
      }}
    >

      {isShowSpanPremium && (offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>)}

      <div className={`${variantCard}__image-wrapper place-card__image-wrapper`}>

        <Link to={linkTo}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </Link>

      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={(offer.isFavorite) ?
              `place-card__${classButtonFaforiteType.default} place-card__${classButtonFaforiteType.favorite} button` :
              `place-card__${classButtonFaforiteType.default} button`}
            type="button"
            onClick = {changeStatusFavorite}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={convertRatingToStyleWidthPercent(offer.rating)}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={linkTo}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
