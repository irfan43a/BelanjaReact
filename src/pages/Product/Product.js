import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./product.module.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/modules/Navbar";
import box from "../../img/box.png";
import profile from "../../img/christian.png";
import store from "../../img/home.png";
import packag from "../../img/package.png";
import cart from "../../img/cart.png";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState({
    currentPage: 1,
    limit: 5,
  });
  // konsum lewat asyn await
  async function fectData() {
    try {
      const result = await axios({
        method: "Get",
        baseURL: "http://localhost:4000/v1",
        url: `/products?page=${page}`,
      });
      setProduct(result.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    // axios(
    // cara 1 dengan axios
    // .get("http://localhost:4000/v1/products")
    // cara 2 dengan axios
    //   {
    //     method: "Get",
    //     baseURL: "http://localhost:4000/v1",
    //     url: "/products",
    //   }
    // )
    //   .then((res) => {
    //     setProduct(res.data.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    fectData();
  }, []);

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:4000/v1/products/${id}`).then(() => {
      alert("data berhasil di hapus");
      fectData();
    });
  };
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.profile_sidebar}>
        <div className={styles.main_profile}>
          <div className={styles.profile_img}>
            <img src={profile} alt={profile} />
          </div>
          <div className={styles.name_profile}>
            <p>james mikael</p>
            <p>ubah profile</p>
          </div>
        </div>
        <div className={styles.menu_profile}>
          <div className={`${styles.circle} ${styles.blue}`}>
            <img src={store} alt="" />
          </div>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Store</button>
            <div className={styles.dropdown_content}>
              <Link to="/profile">Profile</Link>
              <Link to="#">Store Profile</Link>
            </div>
          </div>
        </div>
        <div className={styles.menu_profile}>
          <div className={`${styles.circle} ${styles.orange}`}>
            <img src={packag} alt="" />
          </div>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Products</button>
            <div className={styles.dropdown_content}>
              <Link to="/myproduct">My Product</Link>
              <Link to="/profileseler">Selling Product</Link>
              <Link to="/product">Product list</Link>
            </div>
          </div>
        </div>
        <div className={styles.menu_profile}>
          <div className={`${styles.circle} ${styles.pink}`}>
            <img src={cart} alt="" />
          </div>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Order</button>
            <div className={styles.dropdown_content}>
              <Link to="#">My Order</Link>
              <Link to="#">Order cancel</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.product}>
        <h1>Product</h1>
        <div className={styles.container}>
          {product.map((item) => (
            <div className={styles.card} key={item.id}>
              <div className={styles.image}>
                <img src={item.photo} alt="" />
              </div>
              <div className="card-body">Item : {item.name}</div>
              <div className="card-body">Deskripsi : {item.description}</div>
              <div className="card-body">harga : {item.price}</div>
              <div className="card-body"></div>
              <button onClick={() => deleteProduct(item.id)}>delete</button>
              <Link to="/profileseler">
                <button> Edit</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
