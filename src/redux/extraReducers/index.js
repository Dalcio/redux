import addTodoAsync from "./addTodoAsync";
import deleteTodoAsync from "./deleteTodoAsync";
import getTodosAsync from "./getTodosAync";
import toggleCompleteAsync from "./toggleCompleteAsync";

const extraReducers = {
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
};

export { addTodoAsync, deleteTodoAsync, getTodosAsync, toggleCompleteAsync };

export default extraReducers;
