import axios from "../../axios";
import * as string from "../string";

export const getCategory = () => async (dispacth) => {
  try {
    dispacth({ type: string.GET_CATEGORY_PENDING });
    const { data } = await axios({
      method: "GET",
      url: "/category",
    });
    dispacth({ type: string.GET_CATEGORY_SUCCESS, payload: { data: data.data, pagination: data.result } });
  } catch (error) {
    dispacth({ type: string.GET_CATEGORY_ERROR, payload: error.response });
  }
};
