import React from "react";
import styles from "./card.module.css";
import star from "../../../img/Star.png";
import { Link } from "react-router-dom";

const Card = ({ image, name, price, id }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgcontainer}>
        <img src={image} alt={image} />
      </div>
      <div className={styles.card_title}>
        <Link to={`/products/${id}`}>{name}</Link>
      </div>
      <div className={styles.deskrip}>
        <div className={styles.lain}>
          <div className={styles.price}>$ {price}</div>
          <div className={styles.store}> Zalora Cloth</div>
          <div className={styles.store_rangked}>
            <img src={star} alt="start" />
            <img src={star} alt="start" />
            <img src={star} alt="start" />
            <img src={star} alt="start" />
            <img src={star} alt="start" />
            (10)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
