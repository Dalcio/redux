const toggleComplete = (state, action) => {
  const index = state.findIndex((todo) => todo.id === action.payload.id);
  state[index].completed = action.payload.completed;
};

export default toggleComplete;
