//import { useState } from 'react';
import type { CommentForOffer } from '../../types.ts';
import { sendCommentAction } from '../../store/api-actions.ts';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/index.ts';
import { generateUUID } from '../../utils.ts';
import { useRef } from 'react';

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

export default function ReviewForm( addComment: () =>{}): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const isRequestAuth = useAppSelector((state) => state.isRequestAuth);
  const currentDate = new Date();

  const textareaRef = useRef(null);

  const commentForOffer : CommentForOffer = {
    id: generateUUID(),
    comment: '',
    date: currentDate.toISOString(),
    rating: 0,
    user: {
      name: user.name,
      avatarUrl: user.avatarUrl,
      isPro: user.isPro,
    }
  };


  if (isRequestAuth) {
    return (
      <form className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">{commentForOffer.user.name}</label>
        <div className="reviews__rating-form form__rating">
          <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"
            onClick={() => commentForOffer.rating = 5}
          />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"
            onClick={() => commentForOffer.rating = 4}
          />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"
            onClick={() => commentForOffer.rating = 3}
          />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"
            onClick={() => commentForOffer.rating = 2}
          />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"
            onClick={() => commentForOffer.rating = 1}
          />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          defaultValue={commentForOffer.comment}
          ref={textareaRef}
          onChange={(evt) => {
            evt.preventDefault();
            commentForOffer.comment = evt.target.value;
          }}
        >
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set
            <span className="reviews__star">rating</span>
            and describe your stay with at least
            <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button disabled={false} onClick={(evt) => {
            evt.preventDefault();

            const sentComment = {
              id: id as string,
              rating : commentForOffer.rating as number,
              comment: commentForOffer.comment as string,
            }

            console.log('sentComment',sentComment);

            dispatch(sendCommentAction(sentComment));
            addComment();
          }}
            className="reviews__submit form__submit button" type="submit"
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
