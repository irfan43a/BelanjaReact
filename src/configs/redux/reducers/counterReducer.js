const initialState = {
  email: "irfan@gmail.com",
  count: 0,
};
const counterReducer = (state = initialState, action) => {
  if (action.type === "Increment") {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action.type === "Decrement") {
    return {
      ...state,
      count: state.count - 1,
    };
  } else if (action.type === "CHANGE_EMAIL") {
    return {
      ...state,
      email: action.payload,
    };
  } else {
    return state;
  }
};

export default counterReducer;
