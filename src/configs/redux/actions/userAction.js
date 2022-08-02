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
