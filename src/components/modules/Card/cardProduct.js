import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import styles from "./card.module.css";
import { Link } from "react-router-dom";

const CardProduct = ({ title }) => {
  const [product, setProduct] = useState([]);
  async function fectData() {
    try {
      const result = await axios({
        method: "Get",
        baseURL: "http://localhost:4000/v1",
        url: "/products",
      });
      setProduct(result.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fectData();
  }, []);

  return (
    <div className={styles.container}>
      {product.map((item) => (
        <div className="col-md-3 mb-3">
          <div className={styles.card}>
            <img src={item.photo} className="card-img-top" alt={item.name} />
            <div className={styles.card_body}>
              <div class={styles.store_rangked}>
                <h6 className="card-title">
                  <Link to="productsdetailv1.html">{item.name}</Link>
                </h6>
                <p className={styles.price}>$ {item.price}</p>
                <p className={styles.store}>
                  Zalora Cloth
                  <br />
                  <img src="/img/Star.png" alt="start" />
                  <img src="/img/Star.png" alt="start" />
                  <img src="/img/Star.png" alt="start" />
                  <img src="/img/Star.png" alt="start" />
                  <img src="/img/Star.png" alt="start" /> (10)
                </p>
              </div>
            </div>
          </div>
        </div>
        // <div className="col-md-3 mb-3">
        //   <div className={styles.card} key={item.id}>
        //     <div className={styles.image}>
        //       <img src={item.photo} alt="photo" />
        //     </div>
        //     <div className={styles.card_body}>
        //       <h6 className="card-title">
        //         <Link to="/product/:id">{item.name}</Link>
        //       </h6>
        //       <p className="price">$ {item.price}</p>
        //       <p className="store">
        //         Zalora Cloth
        //         <br />
        //         <img src="/img/Star.png" alt="start" />
        //         <img src="/img/Star.png" alt="start" />
        //         <img src="/img/Star.png" alt="start" />
        //         <img src="/img/Star.png" alt="start" />
        //         <img src="/img/Star.png" alt="start" /> (10)
        //       </p>
        //     </div>
        //   </div>
        // </div>
      ))}
    </div>
  );
};

export default CardProduct;
