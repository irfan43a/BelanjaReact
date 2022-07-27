import React from "react";

const Card = ({ content }) => {
  return (
    <div class="card" style={{ width: "200px" }}>
      <div class="card-body">{content}</div>
    </div>
  );
};

export default Card;
