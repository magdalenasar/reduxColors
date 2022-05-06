import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import todoSlice from "./todo";

const store = configureStore({
  reducer: combineReducers({
    [counterSlice.name]: counterSlice.reducer,
    [todoSlice.name]: todoSlice.reducer,
  }),
});

export default store;
