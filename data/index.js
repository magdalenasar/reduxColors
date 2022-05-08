import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import todoSlice from "./todo";
import kleurSlice from "./kleuren";

const store = configureStore({
  reducer: combineReducers({
    [counterSlice.name]: counterSlice.reducer,
    [todoSlice.name]: todoSlice.reducer,
    [kleurSlice.name]: kleurSlice.reducer,
  }),
});

// console.log(store);
// console.log(store.getState());
export default store;
