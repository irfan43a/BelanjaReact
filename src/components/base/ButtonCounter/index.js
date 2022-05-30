import React from "react";

const Button = ({ title, color, clickProps }) => {
  return (
    <button style={{ backgroundColor: color ? color : "blue" }} onClick={clickProps}>
      {title}
    </button>
  );
};

export default Button;
