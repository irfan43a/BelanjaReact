import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "../../../configs/axios";
import styles from "./card.module.css";
import { Link } from "react-router-dom";
import star from "../../../img/Star.png";

const CardProduct = ({ title }) => {
  const [product, setProduct] = useState([]);
  async function fectData() {
    try {
      const result = await axios({
        method: "Get",
        url: "/products",
      });
      setProduct(result.data.data);
    } catch (error) {
      console.log(error.response);
    }
  }
  useEffect(() => {
    fectData();
  }, []);

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:4000/v1/products/${id}`).then(() => {
      alert("data berhasil di hapus");
      fectData();
    });
  };

  return (
    <div className={styles.container}>
      {product.map((item) => (
        <div className="col-md-3 col-sm-6 col-xs-12 mb-3" key={item.id}>
          <div className={styles.card}>
            <div className={styles.fit_image}>
              <img src={item.photo} className="card-img-top" alt={item.name} />
            </div>
            <div className={styles.card_body}>
              <div className={styles.store_rangked}>
                <h6 className={styles.card_title}>
                  <Link to={`/product/${item.id}`}>{item.name}</Link>
                </h6>
                <p className={styles.price}>$ {item.price}</p>
                <p className={styles.store}>
                  Zalora Cloth
                  <br />
                  <img src={star} alt="start" />
                  <img src={star} alt="start" />
                  <img src={star} alt="start" />
                  <img src={star} alt="start" />
                  <img src={star} alt="start" />
                  (10)
                </p>
                {/* <button onClick={() => deleteProduct(item.id)}>delete</button> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProduct;
