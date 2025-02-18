import Review from '../review/review';
import { CommentForOffer } from '../../types';

type CommentListProps = {
  commentsByOffer : CommentForOffer[]
}

export default function ReviewList({ commentsByOffer }: CommentListProps): JSX.Element {

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{commentsByOffer.length}</span></h2>
      <ul className="reviews__list" >
        {commentsByOffer.map((comment) => (
          <Review comment={comment} key={comment.id} />
        ))}
      </ul>
    </>
  );

}
