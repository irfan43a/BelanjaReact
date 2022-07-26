import axios from "axios";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
const axiosApiInstace = axios.create({
  baseURL: process.env.REACT_APP_API_BACKEND,
});
axiosApiInstace.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosApiInstace.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem("refreshToken");
    if (!originalRequest._retry && error.response.status === 400)
      if (error.response.data.message === "token invalid") {
        history.push("/login");
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
      } else if (error.response.data.message === "token expired") {
        originalRequest._retry = true;
        // resfresh token
        const { data: RespData } = await axios.post("http://localhost:4000/v1/users/refresh-token", {
          refreshToken: refreshToken,
        });
        const newToken = RespData.data.token;
        const newRefreshToken = RespData.data.refreshToken;
        localStorage.setItem("token", newToken);
        localStorage.setItem("refreshToken", newRefreshToken);
        axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
        return axiosApiInstace(originalRequest);
      }
    // alert ('jangan di ubah tokennya ya bro...')

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosApiInstace;

// import axios from "axios";

// const axiosApiInstance = axios.create({
//   baseURL: process.env.REACT_APP_API_BACKEND,
// });

// axiosApiInstance.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers = {
//         Authorization: `Bearer ${token}`,
//       };
//     }
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );
// axiosApiInstance.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     console.log(response);
//     return response;
//   },
//   function (error) {
//     if (error.response.status === 400 && error.response.data.message === "token invalid");
//     alert("jangan rubah token");
//     localStorage.removeItem("token");
//     localStorage.removeItem("refreshToken");
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );

// export default axiosApiInstance;
