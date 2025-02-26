//import { sendCommentAction } from '../../store/api-actions.ts';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/index.ts';
import { ChangeEvent, Fragment, MouseEvent, useEffect, useRef, useState } from 'react';
import { UserCommentWithID } from '../../types.ts';
import { RATINGS } from '../../const.ts';

type ReviewFormProps = {
  addComment : (comment: UserCommentWithID) => void;
}

export default function ReviewForm({addComment} : ReviewFormProps): JSX.Element {

  const { id } = useParams();
  const formData = {
    rating: 0,
    comment: ''
  };

  //const user = useAppSelector((state) => state.user);
  const isRequestAuth = useAppSelector((state) => state.isRequestAuth);

  const textareaRef = useRef(null);

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleClickRating = (evt: MouseEvent<HTMLInputElement>) => {
    setRating(Number(evt.currentTarget.value));
  };

  useEffect(() => {
    formData.rating = rating;
    formData.comment = comment;
  },[rating,comment]);

  const handleChangeComment = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.currentTarget.value);
  };



  const sendComment = () => {
    if ((id) && (rating) && (comment)) {
      const sentComment = {
        id: id,
        rating: formData.rating,
        comment: formData.comment,
      };
      addComment(sentComment);
    }
  };

  if ((isRequestAuth) && (id)) {
    return (
      <form className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your reviews</label>
        <div className="reviews__rating-form form__rating">
          {
            RATINGS.map((item) => (

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
            ))
          }
        </div>
        <textarea className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          defaultValue={comment}
          ref={textareaRef}
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
          <button disabled={false}
            onClick={(evt) => {
              evt.preventDefault();
              sendComment();
            }}
            className="reviews__submit form__submit button"
            type="submit"
          >Submit
          </button>
        </div>
      </form>
    );
  } else {
    return (
      <>
      </>
    );
  }
}
