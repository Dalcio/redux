import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid4 } from "uuid";

const localhost = "http://localhost:7000/todos";

export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const resp = await fetch(localhost);

    if (resp.ok) {
      const todos = await resp.json();
      return { todos };
    }
  }
);

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (payload) => {
    const resp = await fetch(localhost, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title: payload.title }),
    });

    if (resp.ok) {
      const todo = await resp.json();
      return { todo };
    }
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodoAsync",
  async (payload) => {
    const resp = await fetch(`${localhost}/${payload.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    if (resp.ok) {
      const todos = await resp.json();
      return { todos };
    }
  }
);

export const toggleCompleteAsync = createAsyncThunk(
  "todos/toggleCompleteAsync",
  async (payload) => {
    const resp = await fetch(`${localhost}/${payload.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: payload.completed }),
    });

    if (resp.ok) {
      const todo = await resp.json();
      return { todo };
    }
  }
);

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
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
  extraReducers: {
    [getTodosAsync.fulfilled]: (_state, action) => {
      return action.payload.todos;
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      state.push(action.payload.todo);
    },
    [deleteTodoAsync.fulfilled]: (_state, action) => {
      return action.payload.todos;
    },
    [toggleCompleteAsync.fulfilled]: (state, action) => {
      const index = state.findIndex(({ id }) => id === action.payload.todo.id);
      state[index].completed = action.payload.todo.completed;
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
