import { v4 as uuid4 } from "uuid";

const addTodo = (state, action) => {
  const todo = {
    id: uuid4(),
    title: action.payload.title,
    completed: false,
  };
  state.push(todo);
};

export default addTodo;
