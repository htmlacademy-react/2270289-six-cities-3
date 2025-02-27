import { ChangeEvent, Fragment, MouseEvent, useEffect, useRef, useState } from 'react';
import { UserCommentWithID } from '../../types.ts';
import { RATINGS, Rating, Comment } from '../../const.ts';

type ReviewFormProps = {
  idOffer: string | null;
  addComment: (comment: UserCommentWithID) => void;
}

export default function ReviewForm({ idOffer, addComment }: ReviewFormProps): JSX.Element {

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputsRef = useRef<HTMLInputElement[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null)

  const formData = {
    rating: Rating.InitState,
    comment: Comment.InitState,
    isValidateForm: false,
    isFromSending: false,
  }

  const [rating, setRating] = useState(Rating.InitState);
  const [comment, setComment] = useState(Comment.InitState);

  useEffect(() => {
    formData.rating = rating;
    formData.comment = comment;
    changeStatusButton();
    console.log('formData',formData);
  }, [rating,comment]);

  useEffect(() => {
    if (formData.isFromSending) {
      if (buttonRef.current) {
        buttonRef.current.disabled = true;
      }
    } else {
      if (buttonRef.current) {
        buttonRef.current.disabled = false;
      }
    }
  },[formData.isFromSending])

  const changeStatusButton = () => {
    console.log('formData.comment.length ',formData.comment.length);
    if ((formData.rating > Rating.InitState)
      && (formData.comment.length >= Comment.MinLength)
      && (formData.comment.length <= Comment.MaxLength)
    ) {
      if (buttonRef.current) {
        buttonRef.current.disabled = false;
        formData.isValidateForm = true;
      }
    } else {
      if (buttonRef.current) {
        buttonRef.current.disabled = true;
        formData.isValidateForm = false;
      }
    }
  }

  const changeToDefaultValues = () => {
    setRating(Rating.InitState);
    setComment(Comment.InitState);
    formData.rating = Rating.InitState;
    formData.comment = Comment.InitState;
    formData.isValidateForm = false;
    if (textareaRef.current) {
      textareaRef.current.value = ''
    }
    for (let i=0; i< inputsRef.current.length; i++) {
      inputsRef.current[i].checked = false;
    }
    if (buttonRef.current) {
      buttonRef.current.disabled = true;
    }
  }

  const handleClickRating = (evt: MouseEvent<HTMLInputElement>) => {
    setRating(Number(evt.currentTarget.value));
  };

  const handleChangeComment = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.currentTarget.value);
  };

  const sendComment = () => {
    if ((idOffer) && (formData.rating) && (formData.comment)) {
      const sentComment = {
        id: idOffer,
        rating: formData.rating,
        comment: formData.comment,
      };
      changeToDefaultValues();
      formData.isFromSending = true;
      addComment(sentComment);
      formData.isFromSending = false;
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your reviews</label>
      <div className="reviews__rating-form form__rating">
        {RATINGS.map((item,index) => (
          <Fragment key={item.title}>
            <input className="form__rating-input visually-hidden"
              name="rating"
              value={item.value}
              id={`${item.value}-stars`}
              type="radio"
              onClick={handleClickRating}
              ref = {(element: HTMLInputElement) => inputsRef.current[index] = element }

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
        defaultValue = {formData.comment}
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
        <button
          onClick={(evt) => {
            evt.preventDefault();
            sendComment();
          }}
          className="reviews__submit form__submit button"
          type="submit"
          disabled={false}
          ref = {buttonRef}
        >Submit
        </button>
      </div>
    </form>
  );
}
