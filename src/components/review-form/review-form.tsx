import { ChangeEvent, Fragment, MouseEvent, useState } from 'react';
import { TUserCommentWithID } from '../../types.ts';
import { RATINGS, Rating, Comment } from '../../const.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/index.ts';
import { setStatusFormSending } from '../../store/action.ts';

type ReviewFormProps = {
  idOffer: string | null;
  addComment: (comment: TUserCommentWithID) => void;
}

export default function ReviewForm({ idOffer, addComment }: ReviewFormProps): JSX.Element {

  const dispatch = useAppDispatch();

  const isFormCommentSending = useAppSelector((state) => state.isFormCommentSending);

  const [rating, setRating] = useState(Rating.InitState);
  const [comment, setComment] = useState(Comment.InitState);

  const isValidateForm = rating > Rating.InitState
    && comment.length >= Comment.MinLength
    && comment.length <= Comment.MaxLength;

  const changeToDefaultValues = () => {
    setRating(Rating.InitState);
    setComment(Comment.InitState);
  };

  const handleClickRating = (evt: MouseEvent<HTMLInputElement>) => {
    setRating(Number(evt.currentTarget.value));
  };

  const handleChangeComment = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.currentTarget.value);
  };

  const sendComment = () => {
    if ((idOffer) && (rating) && (comment)) {
      const sentComment = {
        id: idOffer,
        rating: rating,
        comment: comment,
      };
      dispatch(setStatusFormSending(true));
      addComment(sentComment);
      dispatch(setStatusFormSending(false));
      changeToDefaultValues();
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your reviews</label>
      <div className="reviews__rating-form form__rating">
        {RATINGS.map((item) => (
          <Fragment key={item.title}>
            <input className="form__rating-input visually-hidden"
              name="rating"
              value={item.value}
              id={`${item.value}-stars`}
              type="radio"
              onClick={handleClickRating}
            />
            <label htmlFor={`${item.value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={item.title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}

      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleChangeComment}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          onClick={(evt) => {
            evt.preventDefault();
            sendComment();
          }}
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValidateForm || isFormCommentSending}
        >Submit
        </button>
      </div>
    </form>
  );
}
