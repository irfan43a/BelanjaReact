import * as string from "../string";
const initialState = {
  data: [],
  curentPage: 0,
  totalData: 0,
  isLoading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case string.GET_PRODUCT_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case string.GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    }
    case string.GET_PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default productReducer;
