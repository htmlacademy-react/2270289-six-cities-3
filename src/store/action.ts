import { createAction } from "@reduxjs/toolkit";
import { mockOffers } from "../mocks/mock-offers-many";
import { ActionType } from "../const";

const city =  mockOffers.listOffers[0].city.name;

const setCityDefaultRedux = (city: string) => ({
  payload:city,
  type : ActionType.SetCity
});

const nextCity = createAction(city);

export {setCityDefaultRedux, nextCity}
