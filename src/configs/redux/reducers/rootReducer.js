import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import todosReducer from "./todosReducer";
import { productsReducer, detailProdReducer } from "./product";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  todo: todosReducer,
  counter: counterReducer,
  // product: productReducer,
  user: userReducer,
  category: categoryReducer,
  products: productsReducer,
  productDetail: detailProdReducer,
});
export default rootReducer;
