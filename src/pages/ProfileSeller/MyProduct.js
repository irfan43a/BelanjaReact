import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./MyProduct.module.css";
import Navbar from "../../components/modules/Navbar";
import profile from "../../img/christian.png";
import store from "../../img/home.png";
import packag from "../../img/package.png";
import cart from "../../img/cart.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MyProduct = () => {
  const { data } = useSelector((state) => state.product);
  return (
    <section className={styles.profile}>
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
        <div className={styles.main}>
          <div>My product</div>
        </div>
        <div className={styles.product_menu}>
          <div>All items</div>
          <div>Sould out</div>
          <div>Archives</div>
        </div>
        <hr />
        <div>
          <input className={styles.search} type="search" placeholder="Search " aria-label="Search" />
        </div>
        <div>
          <div className={styles.menu_sort}>
            <div className={styles.sort_name}>
              <button> Product name</button>
            </div>
            <div className={styles.sub_sort}>
              <button>Price</button>
              <button>Stock</button>
            </div>
          </div>
          <div className={styles.product_lis}>
            {data.map((product) => (
              <h3>{product.name}</h3>
            ))}
            <p>Product</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProduct;
