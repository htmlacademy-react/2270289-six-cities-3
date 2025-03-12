import { convertRatingToStyleWidthPercent } from "../../utils";

type OfferRatingProps = {
  rating: number;
}

export default function OfferRating({ rating }: OfferRatingProps): JSX.Element {
  return (
    <div className="offer__rating rating">
      <div className="offer__stars rating__stars">
        <span style={convertRatingToStyleWidthPercent(rating)}>
        </span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="offer__rating-value rating__value">
        {rating}
      </span>
    </div>
  )
}
