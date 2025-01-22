import Review from '../review/review';
import type { CommentProposal } from '../../types';

type CommentsListProps = {
  commentsList: CommentProposal[];
};

export default function ReviewList({commentsList }: CommentsListProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{commentsList.length}</span></h2>
      <ul className="reviews__list" >
        {commentsList.map((comment) => (
          <Review comment={comment} key={comment.id}  />
        ))}
      </ul>
    </>
  );
}
