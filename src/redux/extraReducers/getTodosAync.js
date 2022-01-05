import { createAsyncThunk } from "@reduxjs/toolkit";

const getTodosAsync = createAsyncThunk("todos/getTodosAsync", async () => {
  const resp = await fetch(process.env.REACT_APP_API);

  if (resp.ok) {
    const todos = await resp.json();
    return { todos };
  }
});

export default getTodosAsync;
