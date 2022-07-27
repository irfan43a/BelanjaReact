import axios from "axios";
// import swal from "sweetalert";
// import * as string from "../string";

export const getProducts =
  (searchParams, { page, limit, sort, sortBy }) =>
  async (dispatch) => {
    try {
      dispatch({ type: "GET_PRODUCT_PENDING" });
      const result = await axios.get(`${process.env.REACT_APP_API_BACKEND}products/?${searchParams}&page=${page}&limit=${limit}
      ${sortBy ? "&sortBy=" + sortBy : ""}${sort ? "&sort=" + sort : ""}`);
      dispatch({ type: "GET_PRODUCT_SUCCESS", payload: result.data.data });
    } catch (error) {
      dispatch({ type: "GET_PRODUCT_ERROR", payload: error.response.data });
    }
  };

export const getDetailProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_PRODUCT_DETAIL_PENDING" });
    const { data: resData } = await axios.get(`${process.env.REACT_APP_API_BACKEND}products/${id}`);
    dispatch({ type: "GET_PRODUCT_DETAIL_SUCCESS", payload: resData.product });
    return resData.data;
  } catch (error) {
    dispatch({ type: "GET_PRODUCT_DETAIL_ERROR", payload: error.response.data });
  }
};

export const updateProduct = (id, data) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch({ type: "UPDATE_PRODUCT_PENDING" });
      const { data: resData } = await axios.put(`/products/${id}`, data);
      dispatch({ type: "UPDATE_PRODUCT_SUCCESS" });
      resolve(resData.data);
    } catch (error) {
      dispatch({ type: "UPDATE_PRODUCT_ERROR", payload: error.response.data });
      reject(error.response.data);
    }
  });
};

export const addBag = (data) => {
  return {
    type: "ADD_BAG",
    payload: { data },
  };
};
export const getProductBag = () => {
  return {
    type: "GET_BAG",
  };
};
// export const getProducts =
//   (page = 1, sortorder = "asc") =>
//   async (dispatch) => {
//     try {
//       dispatch({ type: "GET_PRODUCTS_PENDING" });
//       console.log(sortorder);
//       const result = await axios.get(`${process.env.REACT_APP_API_BACKEND}products?sortby=price&sort=${sortorder}&page=${page}&limit=10`);
//       console.log(result.data);
//       const products = result.data;
//       dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: products });
//       // navigate('/home')
//     } catch (error) {
//       console.log(error);
//       dispatch({ type: "GET_PRODUCT_ERROR", payload: error.response.data });
//     }
//   };

// export const detailProduct = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: "DETAIL_PRODUCT_PENDING" });
//     console.log("get detail product run...");
//     const result = await axios.get(`${process.env.REACT_APP_API_BACKEND}products/${id}`);
//     const productDetail = result.data.data;
//     dispatch({ type: "DETAIL_PRODUCT_SUCCESS", payload: productDetail });
//   } catch (error) {
//     console.log(error);
//     dispatch({ type: "DETAIL_PRODUCT_ERROR", payload: error.response.data });
//     swal({
//       title: "Get Detail Product Error!",
//       text: `${error.response.data.message}`,
//       icon: "error",
//     });
//   }
// };

// export const searchProducts = (search) => async (dispatch) => {
//   try {
//     dispatch({ type: "GET_PRODUCTS_PENDING" });

//     const result = await axios.get(`${process.env.REACT_APP_API_BACKEND}products?search=${search}`);
//     console.log(result.data);
//     const products = result.data;

//     dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: products });
//     // navigate('/home')
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const updateProduct = (formData, localData, id) => async (dispatch) => {
//   try {
//     dispatch({ type: "UPDATE_PRODUCT_PENDING" });
//     const result = await axios.put(`${process.env.REACT_APP_API_BACKEND}products/${id}`, formData, {
//       headers: { Authorization: `Bearer ${localData}` },
//     });
//     console.log(result);
//     swal({
//       title: "Good job!",
//       text: `${result.data.message}`,
//       icon: "success",
//     });

//     const resultGet = await axios.get(`${process.env.REACT_APP_API_BACKEND}products?sortby=price&sortorder=desc&page=1&limit=10`);
//     const products = resultGet.data;

//     dispatch({ type: "UPDATE_PRODUCT_SUCCESS", payload: products });
//   } catch (error) {
//     console.log(error);
//     console.log("Update Data Error!");
//     dispatch({ type: "UPDATE_PRODUCT_ERROR", payload: error.response.data });
//   }
// };

// export const addProduct = (formData, authToken) => async (dispatch) => {
//   try {
//     dispatch({ type: "ADD_PRODUCT_PENDING" });

//     const result = await axios.post(`${process.env.REACT_APP_API_BACKEND}products/`, formData, {
//       headers: { Authorization: `Bearer ${authToken}` },
//     });
//     console.log(result);
//     swal({
//       title: "Good job!",
//       text: `Data Tersimpan`,
//       icon: "success",
//     });

//     const resultGet = await axios.get(`${process.env.REACT_APP_API_BACKEND}products?sortby=price&sortorder=desc&page=1&limit=10`);
//     const products = resultGet.data;

//     dispatch({ type: "ADD_PRODUCT_SUCCESS", payload: products });

//     // navigate('/')
//   } catch (error) {
//     console.log(error.response.data.message);
//     swal({
//       title: "Add Product Error!",
//       text: `${error.response.data.message}`,
//       icon: "error",
//     });
//   }
// };

// export const deleteProduct = (authToken, id) => async (dispatch) => {
//   try {
//     dispatch({ type: "DELETE_PRODUCT_PENDING" });

//     await axios.delete(`${process.env.REACT_APP_API_BACKEND}products/${id}`, {
//       headers: { Authorization: `Bearer ${authToken}` },
//     });
//     swal({
//       title: "Success",
//       text: "Delete Product Success",
//       icon: "success",
//       button: "OK!",
//     });

//     const resultGet = await axios.get(`${process.env.REACT_APP_API_BACKEND}products?sortby=price&sortorder=desc&page=1&limit=10`);
//     const products = resultGet.data;

//     dispatch({ type: "DELETE_PRODUCT_SUCCESS", payload: products });

//     // navigate('/')
//   } catch (error) {
//     console.log(error.response.data.message);
//     swal({
//       title: "Delete Product Error!",
//       text: `${error.response.data.message}`,
//       icon: "error",
//     });
//   }
// };

// export const getProduct =
//   ({ page, limit, search, sort }) =>
//   async (dispacth) => {
//     try {
//       dispacth({ type: string.GET_PRODUCT_PENDING });
//       const { data } = await axios({
//         url: `/products?page=${page}&limit=${limit}${search ? "&search=" + search : ""}${sort ? "&sort=" + sort : ""}`,
//         method: "GET",
//         baseURL: "http://localhost:4000/v1",
//       });
//       dispacth({ type: string.GET_PRODUCT_SUCCESS, payload: { data: data.data, pagination: data.pagination } });
//     } catch (error) {
//       dispacth({ type: string.GET_PRODUCT_ERROR, payload: error.response });
//     }
//   };
