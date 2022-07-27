const initialState = {
  data: [],
  detail: null,
  pagination: {},
  isLoading: false,
  error: null,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "ADD_PRODUCT_SUCCESS":
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case "ADD_PRODUCT_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "GET_PRODUCT_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_PRODUCT_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case "GET_PRODUCT_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "GET_PRODUCT_DETAIL_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_PRODUCT_DETAIL_SUCCESS":
      return {
        ...state,
        isLoading: false,
        detail: action.payload,
      };
    case "GET_PRODUCT_DETAIL_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "UPDATE_PRODUCT_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "UPDATE_PRODUCT_SUCCESS":
      return {
        ...state,
        isLoading: false,
        detail: action.payload,
      };
    case "UPDATE_PRODUCT_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "DELETE_PRODUCT_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "DELETE_PRODUCT_SUCCESS":
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case "DELETE_PRODUCT_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const searchState = {
  productDetail: {},
  isLoading: false,
  error: null,
};

export const detailProdReducer = (state = searchState, action) => {
  switch (action.type) {
    case "DETAIL_PRODUCT_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "DETAIL_PRODUCT_SUCCESS":
      // console.log(state.products)
      return {
        ...state,
        productDetail: action.payload,
        isLoading: false,
      };
    case "DETAIL_PRODUCT_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// import * as string from "../string.js";
// const initialState = {
//   data: null,
//   pagination: {
//     currentPage: 0,
//     limit: 0,
//     totalData: 0,
//     totalPage: 0,
//   },
//   error: null,
// };

// const productReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case string.GET_PRODUCT_PENDING:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case string.GET_PRODUCT_SUCCESS: {
//       return {
//         ...state,
//         ...action.payload,
//         isLoading: false,
//       };
//     }
//     case string.GET_PRODUCT_ERROR:
//       return {
//         ...state,
//         error: action.payload,
//         isLoading: false,
//       };
//     default:
//       return state;
//   }
// };

// export default productReducer;

// import * as string from "../string";
// const initialState = {
//   data: null,
//   pagination: {
//     currentPage: 0,
//     limit: 0,
//     totalData: 0,
//     totalPage: 0,
//   },
//   error: null,
// };

// const productReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case string.GET_PRODUCT_PENDING:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case string.GET_PRODUCT_SUCCESS: {
//       return {
//         ...state,
//         ...action.payload,
//         isLoading: false,
//       };
//     }
//     case string.GET_PRODUCT_ERROR:
//       return {
//         ...state,
//         error: action.payload,
//         isLoading: false,
//       };
//     default:
//       return state;
//   }
// };
// export default productReducer;
