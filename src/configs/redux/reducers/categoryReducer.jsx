import * as string from "../string";
const initialState = {
  data: [],
  curentPage: 0,
  totalData: 0,
  isLoading: false,
  error: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case string.GET_CATEGORY_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case string.GET_CATEGORY_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    }
    case string.GET_CATEGORY_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default categoryReducer;
