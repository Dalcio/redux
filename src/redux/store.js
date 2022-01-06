import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import rootReducers from "./rootReducer";

const store = createStore(rootReducers, applyMiddleware(thunk));

// store.subscribe(() => console.log(store.getState()));

// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });
// store.dispatch({ type: "RESET" });

export default store;
