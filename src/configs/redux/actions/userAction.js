import axios from "axios";
export const loginUser = (dataFrom, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_PENDING" });
    const result = await axios.post("http://localhost:4000/v1/users/login", dataFrom);
    const user = result.data.data;
    localStorage.setItem("token", user.token);
    localStorage.setItem("refreshToken", user.refreshToken);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });
    navigate("/home");
  } catch (error) {}
};
