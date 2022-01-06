import { combineReducers } from "redux";

import countReducer from "./countReducer";
import productsReducer from "./productReducer";

const rootReducers = combineReducers({
  count: countReducer,
  products: productsReducer,
});

export default rootReducers;
