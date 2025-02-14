import Review from '../review/review';
import {useAppSelector} from '../../hooks';

export default function ReviewList(): JSX.Element {

  const reviewsByOffer = useAppSelector((state) => state.reviewsByOffer);
  const isRequestCommentsByOffer = useAppSelector((state) => state.isRequestCommentsByOffer);

  if (isRequestCommentsByOffer) {
    return (
      <>
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsByOffer.length}</span></h2>
        <ul className="reviews__list" >
          {reviewsByOffer.map((comment) => (
            <Review comment={comment} key={comment.id}/>
          ))}
        </ul>
      </>
    );
  } else {
    return (
      <>
      </>
    );
  }

}
