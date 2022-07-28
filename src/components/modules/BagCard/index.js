import React from "react";
import styles from "./card.module.css";
import Button from "../../base/Button";
import { Link } from "react-router-dom";

const Card = ({ image, name, price, id, count, Increment, Decrement }) => {
  return (
    <div className={styles.card}>
      <input type="checkbox" name={name} id={id} className="check" />
      <div className={styles.imgcontainer}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.card_title}>
        <Link to={`/products/${id}`}>{name}</Link>
      </div>
      <div className={styles.btn}>
        <Button title="-" className="counter" onClick={Decrement} />
        <span>{count}</span>
        <Button title="+" className="counter" onClick={Increment} />
      </div>
      <div className={styles.price}>RP. {price}</div>
    </div>
  );
};

export default Card;
