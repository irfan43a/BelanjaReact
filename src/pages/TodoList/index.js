import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoList } from "../../configs/redux/actions/todoAction";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const { todos, isLoading } = useSelector((state) => state.todo);
  console.log(Todo);

  const handleAdd = () => {
    // const dataTodo = {
    //   name: todo,
    //   createdAt: new Date().toString(),
    // };
    // dispatch({ type: "ADD_TODO", payload: dataTodo });
    dispatch(addTodoList(todo));
    setTodo("");
  };

  return (
    <div>
      <h1>Todo list</h1>
      <input type="text" name="todo" placeholder="input Todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={handleAdd}>{isLoading ? "Looding..." : "Simpan"}</button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item.name} -- {item.createdAt}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
