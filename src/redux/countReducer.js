import {
  DECREMENT,
  DECREMENT_WITH_VALUE,
  INCREMENT,
  INCREMENT_WITH_VALUE,
  RESET,
} from "./countActions";

const initialState = {
  count: 0,
};

function countReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    case INCREMENT_WITH_VALUE:
      return {
        count: state.count + action.payload.value,
      };

    case DECREMENT_WITH_VALUE:
      return {
        count: state.count - action.payload.value,
      };
    case RESET:
      return {
        count: 0,
      };
    default:
      return state;
  }
}

export default countReducer;
