import Review from '../review/review';
import { TCommentForOffer} from '../../types/types';

type CommentListProps = {
  countAllComments : number;
  commentsByOfferSorted : TCommentForOffer[];
}

export default function ReviewList({countAllComments,commentsByOfferSorted}: CommentListProps): JSX.Element {

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{countAllComments}</span></h2>
      <ul className="reviews__list" >
        {commentsByOfferSorted.map((comment) => (
          <Review comment={comment} key={comment.id} />
        ))}
      </ul>
    </>
  );

}
