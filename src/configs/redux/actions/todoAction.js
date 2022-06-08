import { createdNewDate } from "../../../helper/date";
export const addTodoList = (data) => {
  const createdAt = createdNewDate();
  const result = {
    name: data,
    createdAt: createdAt,
  };
  return {
    type: "ADD_TODO",
    payload: result,
  };
};

// datanya async memnggunkan redux thunk
// export const addTodoList = (data)=>async(dispatch)=>{
//      dispatch({type:"ADD_TODO_PENDING"})
//     const createdAt = await createdNewDate()
//     const result = {
//         name:data,
//         createdAt:createdAt
//     }
//     dispatch({type: "ADD_TODO_SUCCESS",patload:result})
// }
