import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 6,
};

const counterSlice = createSlice({
  name: "counterState",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    multiplyBy5(state) {
      state.counter *= 5;
    },
  },
});

export default counterSlice;
export const { increment, decrement, multiplyBy5 } = counterSlice.actions;
