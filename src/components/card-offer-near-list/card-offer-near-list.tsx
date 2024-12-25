
import type { OfferPreview } from '../../types';
import CardOfferNear from '../card-offer-near/card-offer-near';

type CardOfferNearProps = {
  offersNear: OfferPreview[];
}

export default function CardOfferListNear({ offersNear }: CardOfferNearProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          offersNear.map((offer) => (
            <CardOfferNear offer={offer} />
          ))
        }

      </div>
    </section>
  )
}
