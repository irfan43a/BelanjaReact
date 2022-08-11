import React from "react";
import styles from "./card.module.css";
import { Link } from "react-router-dom";

const Card = ({ image, name, price, id, count, Increment, Decrement }) => {
  const qty = count.toString();
  const total = price * qty;
  console.log("price", price);
  console.log("count", qty);
  console.log("price", typeof price);
  console.log("count", typeof qty);
  console.log(total);

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
        <span>RP. {price}</span>
        <span>{count}</span>
      </div>
      <div className={styles.price}>RP. {total}</div>
    </div>
  );
};

export default Card;
