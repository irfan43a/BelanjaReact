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
    payload: { ...data, count: 1 },
  };
};
export const getProductBag = () => {
  return {
    type: "GET_BAG",
  };
};
export const IncrementProducts = (id) => {
  return {
    type: "INCREMET_PRODUCT",
    payload: id,
  };
};
export const DecrementProducts = (id) => {
  return {
    type: "DECREMEN_PRODUCT",
    payload: id,
  };
};
