import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import todosReducer from "./todosReducer";
import { productsReducer } from "./product";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  todo: todosReducer,
  counter: counterReducer,
  user: userReducer,
  category: categoryReducer,
  products: productsReducer,
});
export default rootReducer;
