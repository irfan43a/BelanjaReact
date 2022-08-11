import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import todosReducer from "./todosReducer";
import { productsReducer } from "./product";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";
import chekoutReducer from "./chekoutReducer";

const rootReducer = combineReducers({
  todo: todosReducer,
  counter: counterReducer,
  user: userReducer,
  category: categoryReducer,
  products: productsReducer,
  chekout: chekoutReducer,
});
export default rootReducer;
