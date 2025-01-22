import type { CommentProposal } from '../../types';
import { dateToTypeFormat } from '../../utils';
import { TYPE_FORMAT_DATE } from '../../utils';

type CommentProps = {
  comment: CommentProposal;
}

export default function Review({comment}: CommentProps): JSX.Element {

  return (
    <li className="reviews__item" >
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {comment.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating {comment.rating}</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{dateToTypeFormat(comment.date, TYPE_FORMAT_DATE.monthStringYYYY)}</time>
      </div>
    </li>
  );
}

