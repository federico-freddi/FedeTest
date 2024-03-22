// @ts-ignore
import { combineReducers, configureStore } from "@reduxjs/toolkit";
// @ts-ignore
import rootReducer from "./RootReducer";

const store = configureStore({
  reducer: rootReducer,
});
export default store;
