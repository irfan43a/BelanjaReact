import axios from "../../axios";
import * as string from "../string";

export const getCheckout = () => async (dispacth) => {
  try {
    dispacth({ type: string.GET_CHECKOUT_PENDING });
    const { data } = await axios({
      method: "GET",
      url: "/checkout/",
    });
    dispacth({ type: string.GET_CHECKOUT_SUCCESS, payload: data.result });
  } catch (error) {
    dispacth({ type: string.GET_CHECKOUT_ERROR, payload: error.response });
  }
};
