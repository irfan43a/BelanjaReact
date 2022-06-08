import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import todosReducer from "./todosReducer";
import productReducer from "./product";
import userReducer from "./userReducer_";

const rootReducer = combineReducers({
  todo: todosReducer,
  counter: counterReducer,
  product: productReducer,
  user: userReducer,
});
export default rootReducer;
