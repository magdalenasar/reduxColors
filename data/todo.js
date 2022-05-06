import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(4),
    todo: "gras afrijden",
    checked: false,
  },
  {
    id: nanoid(4),
    todo: "tv kijken",
    checked: true,
  },
];

const todoSlice = createSlice({
  name: "todoState",
  initialState,
  reducers: {
    addTodo(state, { payload }) {
      state.push({
        id: nanoid(4),
        checked: false,
        todo: payload,
      });
    },
    removeTodo(state, { payload }) {
      state.splice(
        state.findIndex((todo) => todo.id === payload),
        1
      );
    },
    checkTodo(state) {
      const objToEdit = state.find((todo) => todo.id === payload);
      objToEdit.checked = !objToEdit.checked;
    },
  },
});

export default todoSlice;
export const { addTodo, removeTodo, checkTodo } = todoSlice.actions;
