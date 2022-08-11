import * as string from "../string";
const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case string.GET_CHECKOUT_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case string.GET_CHECKOUT_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    }
    case string.GET_CHECKOUT_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default checkoutReducer;
