import { createAction } from "@reduxjs/toolkit";
import { mockOffers } from "../mocks/mock-offers-many";

const city =  mockOffers.listOffers[0].city.name;

export const nextCity = createAction(city);
