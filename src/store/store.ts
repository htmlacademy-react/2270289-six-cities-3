import { createStore } from "redux";
import { initialState } from "./reducer";
import type { OfferPreview } from "../types";
import { ActionType } from "../const";

const setCityDefaultRedux = (city: string) => ({
  payload:city,
  type : ActionType.SetCity
});

interface IOffersState {
  city: string;
  offers: OfferPreview[];
}

type Action = ReturnType<typeof setCityDefaultRedux>

// Функция для обновления хранилища
const updateStore = (state: IOffersState = initialState, action : Action): IOffersState => {
  switch (action.type) {
    case ActionType.SetCity : {
      return {
        ...state,
        city : action.payload as string
      }
      }
      break;
    default : return state;
  }
};

export const store = createStore(updateStore);

