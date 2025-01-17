import {useAppDispatch,useAppSelector} from '../../hooks/index.ts';
import {setCardActiveId} from '../../store/action.ts';
import type {OfferPreview} from '../../types.ts';
import {Link} from 'react-router-dom';

type OfferProps = {
  offer: OfferPreview;
  variantCard : 'cities'|'favorite'|'near-places';
  //mouseMove: (id:string|null) => void | null;
}

export default function CardOffer ({offer,variantCard} : OfferProps) : JSX.Element {

  const linkTo = `/offer/:${offer.id}`;
  const isShowSpanPremium = variantCard !== 'near-places';
  const dispatch = useAppDispatch();
  const cardActiveId = useAppSelector((state) => state.cardActiveId);

  return (
    <article className={`${variantCard}__card place-card`}
      onMouseEnter={() => {
        console.log('cardActiveId_1',cardActiveId)
        console.log('offer.id_1',offer.id)
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
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
