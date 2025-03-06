import { createSlice } from "@reduxjs/toolkit";
import { TCommentForOffer } from "../../types/types";
import { TInitialStateReview } from "../../types/state";
import { NameSpaces } from "../../const";
import { fetchReviewsByOffer, sendCommentAction } from "../api-actions";
import { toast } from "react-toastify";

const initialState: TInitialStateReview = {
  reviewsByOffer: null,
  isLoading: false,
  hasError: false,
  isFormCommentSending: false,
  hasErrorFormCommentSending: false,
}

export const reviewSlice = createSlice({
  name: NameSpaces.Reviews,
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsByOffer.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchReviewsByOffer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.reviewsByOffer = action.payload;
      })
      .addCase(fetchReviewsByOffer.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        toast('Error to download reviews.');
      })

      .addCase(sendCommentAction.pending, (state) => {
        state.isFormCommentSending = true;
        state.hasErrorFormCommentSending = false;
      })
      .addCase(sendCommentAction.fulfilled, (state, action) => {
        state.isFormCommentSending = false;
        state.hasErrorFormCommentSending = false;
        state.reviewsByOffer = state.reviewsByOffer ? [action.payload as TCommentForOffer,...state.reviewsByOffer ] : [];
      })
      .addCase(sendCommentAction.rejected, (state) => {
        state.isFormCommentSending = false;
        state.hasErrorFormCommentSending = true;
        toast.error('Something went error when trying to submit your review');
      })


  }

})
