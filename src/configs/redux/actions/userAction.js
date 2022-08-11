import axios from "axios";
import swal from "sweetalert";

export const loginUser = (dataFrom, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_PENDING" });
    const result = await axios.post(`${process.env.REACT_APP_API_BACKEND}users/login`, dataFrom);
    const user = result.data.data;
    localStorage.setItem("token", user.token);
    localStorage.setItem("refreshToken", user.refreshToken);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });

    swal({
      title: "Good job!",
      text: `${result.data.message}`,
      icon: "success",
    });
    navigate("/home");
  } catch (error) {
    // console.log(error.response);
    swal({
      title: "Oops!",
      text: `${error.response.data.message}`,
      icon: "error",
    });
  }
};

export const profileUser = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_PROFILE_PENDING" });
    const token = localStorage.getItem("token");
    const result = await axios.get(`${process.env.REACT_APP_API_BACKEND}users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: "GET_PROFILE_SUCCESS", payload: result.data.data });
  } catch (error) {
    dispatch({ type: "GET_PROFILE_ERROR", payload: error.response.data });
  }
};
