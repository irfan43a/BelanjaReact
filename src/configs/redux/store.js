import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

// const initialState = {
//   email: "irfan@gmial.com",
//   count: 0,
//   todo: [],
// };
// const rootReducer = (state = initialState, action) => {
//   if (action.type === "Increment") {
//     return {
//       ...state,
//       count: state.count + 1,
//     };
//   } else if (action.type === "Decrement") {
//     return {
//       ...state,
//       count: state.count - 1,
//     };
//   } else if (action.type === "CHANGE_EMAIL") {
//     return {
//       ...state,
//       email: action.payload,
//     };
//   } else if (action.type === "ADD_TODO") {
//     return {
//       ...state,
//       todos: [...state.todos, action.payload],
//     };
//   } else {
//     return state;
//   }
// };
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
