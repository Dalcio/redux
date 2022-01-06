import { createStore } from "redux";
import {
  DECREMENT,
  DECREMENT_WITH_VALUE,
  INCREMENT,
  INCREMENT_WITH_VALUE,
  RESET,
} from "./actions";

const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  // console.log("reducer", state, action);

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

const store = createStore(reducer);

// store.subscribe(() => console.log(store.getState()));

// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });
// store.dispatch({ type: "RESET" });

export default store;
