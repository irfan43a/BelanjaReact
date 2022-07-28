import React from "react";
import styles from "./category.module.css";

const Category = ({ id, name, img }) => {
  return (
    <div className={styles.cardCategory}>
      <div className={styles.img}>
        <img src={img} alt="" />
      </div>
      <div className={styles.title}>{name}</div>
    </div>
  );
};

export default Category;
