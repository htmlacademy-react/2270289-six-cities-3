import { createStore } from "react-redux";
import { reducer,reducerReduxDefault } from "./reducer";
//import { initialState } from "./reducer";

/*
export const storeDefaultRedux = configureStore({
  reducer: reducerReduxDefault
})

export const store = configureStore({
  reducer: reducer
})
*/

// Функция для обновления хранилища
const updateStore = (state, action) => {
  // Код функции
};


export const store = createStore(updateStore,0);

