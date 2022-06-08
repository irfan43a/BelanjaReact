import React from "react";
import star from "../../../img/Star.png";
import styles from "./StoreScore.module.css";

const StoreScore = () => {
  return (
    <p>
      Zalora Cloth
      <br />
      <img src={star} alt={star} />
      <img src={star} alt={star} />
      <img src={star} alt={star} />
      <img src={star} alt={star} />
      <img src={star} alt={star} />
      (10)
    </p>
  );
};

export default StoreScore;
