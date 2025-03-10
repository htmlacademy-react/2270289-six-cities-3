import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/index.ts';
import { setCardActiveId } from '../../store/action.ts';
import type { OfferPreview } from '../../types.ts';
import { convertRatingToStyleWidthPercent } from '../../utils.ts';

type OfferProps = {
  offer: OfferPreview;
  variantCard: 'cities' | 'favorite' | 'near-places';
}

export default function CardOffer({ offer, variantCard }: OfferProps): JSX.Element {

  const linkTo = `/offer/${offer.id}`;
  const isShowSpanPremium = variantCard !== 'near-places';
  const dispatch = useAppDispatch();

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
          <button className="place-card__bookmark-button button" type="button">
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
