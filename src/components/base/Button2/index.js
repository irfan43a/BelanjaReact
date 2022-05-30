import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Button = ({ title, onClick }) => {
  return (
    <button className="btn btn-seconday" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
