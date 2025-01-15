import { store } from "./store";

export const selectNamecity = () => store.getState().city;
