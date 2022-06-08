import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "../../components/modules/Box";

const Counter = () => {
  const { count, email: emailGlonal } = useSelector((state) => state.counter);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const handleIncrement = () => {
    const action = {
      type: "Increment",
    };
    dispatch(action);
  };
  const handleDecrement = () => {
    dispatch({ type: "Decrement" });
  };
  const handleInputEmail = () => {
    dispatch({ type: "CHANGE_EMAIL", payload: email });
    setEmail("");
  };
  return (
    <div>
      <h1>Page Counter</h1>
      <p>Email saya : {emailGlonal}</p>
      <p>count : {count}</p>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
      <hr />
      <input plaaceholder="Masukan Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleInputEmail}>Input email baru</button>
      <hr />
      <Box />
    </div>
  );
};

export default Counter;
