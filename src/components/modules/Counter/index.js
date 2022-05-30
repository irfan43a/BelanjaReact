import React, { useState, useEffect } from "react";
import "./counter.css";
import styles from "./counter.module.css";
const Counter = () => {
  const [count, setcount] = useState(0);
  const [count2x, setcount2x] = useState(0);
  // const [formValue, setformValue] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });
  const handleIncrement = (val) => {
    setcount(count + val);
  };
  const handleDecrement = (val) => {
    setcount(count - val);
  };

  // useEffect(() => {
  //   alert("selamat datang cuy...");
  // }, []);
  useEffect(() => {
    setcount2x(count * 2);
  }, [count]);

  return (
    <div className="wrapper">
      <h1>Feature Counter</h1>
      <h4>Hasil 2 x nilai count ={count2x} </h4>
      <div className={styles.counter}>
        <button onClick={() => handleDecrement(3)}>-</button>
        <p>{count}</p>
        <button onClick={() => handleIncrement(3)}>+</button>
      </div>
    </div>
  );
};

export default Counter;
