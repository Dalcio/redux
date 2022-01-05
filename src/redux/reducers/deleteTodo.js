const deleteTodo = (state, action) => {
  return state.filter((todo) => todo.id !== action.payload.id);
};
export default deleteTodo;
