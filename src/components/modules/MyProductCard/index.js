import React from "react";
import styles from "./card.module.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../base/Button";
import axios from "axios";
import swal from "sweetalert";

const Card = ({ image, name, price, id }) => {
  const navigate = useNavigate();
  const deleteProduct = (id) => {
    axios.delete(`${process.env.REACT_APP_API_BACKEND}products/${id}`).then(() => {
      navigate("/myproduct");
      swal({
        title: "Good job!",
        text: `Data di Hapus`,
        icon: "success",
      });
    });
  };
  return (
    <div className={styles.card}>
      <div className={styles.imgcontainer}>
        <img src={image} alt={image} />
      </div>
      <div className={styles.card_title}>
        <Link to={`/products/${id}`}>{name}</Link>
      </div>
      <div className={styles.price}>$ {price}</div>
      <div className={styles.btn}>
        <Button title="Edit" className="btnproduct" onClick={() => navigate(`/editproduct/${id}`)} />
        <Button title="Hapus" className="btnproduct" onClick={() => deleteProduct(id)} />
      </div>
    </div>
  );
};

export default Card;
