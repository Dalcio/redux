import addTodo from "./addTodo";
import deleteTodo from "./deleteTodo";
import toggleComplete from "./toggleComplete";

const reducers = {
  addTodo,
  toggleComplete,
  deleteTodo,
};

export { addTodo, toggleComplete, deleteTodo };

export default reducers;
