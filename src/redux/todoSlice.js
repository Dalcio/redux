import { createSlice } from "@reduxjs/toolkit";

import extraReducers from "./extraReducers";
import reducers from "./reducers";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers,
  extraReducers,
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
