import { createSelector } from '@reduxjs/toolkit';
import { NameSpaces, Comment } from '../../const';
import { TState } from '../../types/state';

export const reviewsByOffer = (state: TState) => state[NameSpaces.Reviews].reviewsByOffer;
export const reviewsByOfferLoadingStatus = (state: TState) => state[NameSpaces.Reviews].isLoading;
export const reviewsByOfferErrorStatus = (state: TState) => state[NameSpaces.Reviews].hasError;
export const reviewsByOfferCommentSendStatus = (state: TState) => state[NameSpaces.Reviews].isFormCommentSending;
export const reviewsByOfferCommentSendHasError = (state: TState) => state[NameSpaces.Reviews].hasErrorFormCommentSending;

export const reviewsByOfferSorted = createSelector(
  [reviewsByOffer],
  (comments) => comments ?
  comments
      .toSorted((a, b) => Date.parse(b.date) - Date.parse(a.date))
      .slice(Comment.MinCount, Comment.MaxCount) :
    []
)
