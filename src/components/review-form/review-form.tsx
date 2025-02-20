// import type { CommentForOffer } from '../../types.ts';
import { sendCommentAction } from '../../store/api-actions.ts';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/index.ts';
import { ChangeEvent, Fragment, useRef, useState } from 'react';

export default function ReviewForm(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const isRequestAuth = useAppSelector((state) => state.isRequestAuth);
//  const currentDate = new Date();

  const textareaRef = useRef(null);

  // const commentForOffer: CommentForOffer = {
  //   id: '',
  //   comment: '',
  //   date: currentDate.toISOString(),
  //   rating: 0,
  //   user: {
  //     name: user.name,
  //     avatarUrl: user.avatarUrl,
  //     isPro: user.isPro,
  //   }
  // };

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('')

  const handleClickRating = (evt: React.MouseEvent<HTMLInputElement>) => {
    setRating(Number(evt.currentTarget.value));
    console.log(rating);
  }

  const handleChangeCommen = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.currentTarget.value);
  }

  const RATINGS = [
    {
      value: 5,
      title: 'perfect',
    },
    {
      value: 4,
      title: 'good',
    },
    {
      value: 3,
      title: 'not bad',
    },
    {
      value: 2,
      title: 'badly',
    },
    {
      value: 1,
      title: 'terribly',
    },
  ];

  if ((isRequestAuth) && (id)) {
    return (
      <form className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">{user.name}</label>
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
                  title={item.title}>
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
          onChange={handleChangeCommen}
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

              const sentComment = {
                id: id,
                rating: rating,
                comment: comment,
              };
              dispatch(sendCommentAction(sentComment));
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
/*
const nullCommentForOffer: CommentForOffer = {
  id: '',
  comment: '',
  date: '',
  rating: 0,
  user: {
    name: '',
    avatarUrl: '',
    isPro: false,
  }
};

type reviewsProps = {
  addComment: () =>{};
}
*/

/*
<input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onClick={handleClickRating} />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onClick={handleClickRating} />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onClick={handleClickRating} />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onClick={handleClickRating} />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

*/
