const initialState = {
  user: {
    fullname: "",
    email: "",
    role: "",
  },
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  // reducer menggunakan switccase
  switch (action.type) {
    case "USER_LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
  // reducer menggunakan ifelse
  //
  // if (action.type === "USER_LOGIN_PENDING") {
  //   return {
  //     ...state,
  //     isLoading: true,
  //   };
  // } else if (action.type === "USER_LOGIN_SUCCESS") {
  //   return {
  //     ...state,
  //     user: action.payload,
  //     isLoading: false,
  //   };
  // } else {
  //   return state;
  // }
};

export default userReducer;
