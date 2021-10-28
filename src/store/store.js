import { combineReducers, createStore } from "redux";
import MainReducer from "./reducers/Main.reducer";

const rootReducer = combineReducers({
  main: MainReducer
})

export const store = createStore(rootReducer)