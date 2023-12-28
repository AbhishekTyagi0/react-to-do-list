import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newTodo = {
        id: new Date().getTime().toString(),
        name: action.payload.name,
      };
      state.value.push(newTodo);
    },
    removeItem: (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = todoSlice.actions;
export default todoSlice.reducer;
