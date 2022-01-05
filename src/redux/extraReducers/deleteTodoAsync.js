import { createAsyncThunk } from "@reduxjs/toolkit";

const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodoAsync",
  async (payload) => {
    const resp = await fetch(`${process.env.REACT_APP_API}/${payload.id}`, {
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

export default deleteTodoAsync;
