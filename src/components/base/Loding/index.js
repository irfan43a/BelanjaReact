import React from "react";
import styles from "./loading.module.css";
const Loding = () => {
  return (
    <div className={styles.loading}>
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
      <h3>Loding...</h3>
    </div>
  );
};

export default Loding;
