import { createAsyncThunk } from "@reduxjs/toolkit";

const addTodoAsync = createAsyncThunk("todos/addTodoAsync", async (payload) => {
  const resp = await fetch(process.env.REACT_APP_API, {
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
});

export default addTodoAsync;
