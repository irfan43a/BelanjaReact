const initialState = {
  data: [],
  detail: null,
  pagination: {
    currentPage: 0,
    limit: 0,
    totalData: 0,
    totalPage: 0,
  },
  bag: [],
  total: 0,
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
    case "ADD_BAG":
      return {
        ...state,
        bag: [...state.bag, action.payload],
      };
    case "GET_BAG":
      return {
        ...state,
      };
    case "INCREMET_PRODUCT":
      const bag = state.bag.map((item) => {
        if (item.id === action.payload) {
          item.count += 1;
        }
        return item;
      });
      const total = bag.reduce((prev, curr) => {
        return prev + curr.count * curr.price;
      }, 0);
      console.log(total);
      return {
        ...state,
        bag,
        total: total,
      };
    case "DECREMEN_PRODUCT":
      const bagDec = state.bag.map((item) => {
        if (item.id === action.payload) {
          item.count -= 1;
        }
        return item;
      });
      const totalDec = bagDec.reduce((prev, curr) => {
        return prev + curr.count * curr.price;
      }, 0);
      return {
        ...state,
        bag: bagDec,
        total: totalDec,
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
