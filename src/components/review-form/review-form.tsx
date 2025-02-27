import { ChangeEvent, Fragment, MouseEvent, useEffect, useRef, useState } from 'react';
import { UserCommentWithID } from '../../types.ts';
import { RATINGS } from '../../const.ts';

type ReviewFormProps = {
  idOffer: string | null;
  addComment: (comment: UserCommentWithID) => void;
}

const Comment = {
  InitState: '',
  MinLength: 50,
  MaxLength: 300,
  MinCount: 0,
  MaxCount: 10,
}

export const Rating = {
  InitState: 0,
}

const formData = {
  rating: Rating.InitState,
  comment: Comment.InitState,
};

export default function ReviewForm({ idOffer, addComment }: ReviewFormProps): JSX.Element {

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isFormSending, setIsFormSending] = useState(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const changeStatusButton = () => {
    if ((rating > Rating.InitState)
      && (comment.length >= Comment.MinLength)
      && (comment.length <= Comment.MaxLength)
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }

  const handleClickRating = (evt: MouseEvent<HTMLInputElement>) => {
    setRating(Number(evt.currentTarget.value));
    changeStatusButton();
  };

  const handleChangeComment = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.currentTarget.value);
    changeStatusButton();
  };

  useEffect(() => {
    formData.rating = rating;
    formData.comment = comment;
  }, [rating, comment, isButtonDisabled]);

  const sendComment = () => {
    if ((idOffer) && (formData.rating) && (formData.comment)) {
      const sentComment = {
        id: idOffer,
        rating: formData.rating,
        comment: formData.comment,
      };
      if (textareaRef.current) {
        textareaRef.current.value = ''
      }
      for (let i=0; i< inputsRef.current.length; i++) {
        inputsRef.current[i].checked = false;
      }
      formData.rating = 0;
      formData.comment = '';
      setRating(0);
      setComment('');
      setIsButtonDisabled(true);
      setIsFormSending(true);
      addComment(sentComment);
      setIsFormSending(false);
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
        <button
          onClick={(evt) => {
            evt.preventDefault();
            sendComment();
          }}
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isButtonDisabled || isFormSending }
        >Submit
        </button>
      </div>
    </form>
  );
}
