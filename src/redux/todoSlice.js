import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid4 } from "uuid";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: uuid4(), title: "todo1", completed: false },
    { id: uuid4(), title: "todo2", completed: false },
    { id: uuid4(), title: "todo3", completed: true },
    { id: uuid4(), title: "todo4", completed: false },
    { id: uuid4(), title: "todo5", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: uuid4(),
        title: action.payload.title,
        completed: false,
      };
      state.push(todo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
