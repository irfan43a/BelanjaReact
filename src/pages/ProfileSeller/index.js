import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./ProfileSeller.module.css";
import Navbar from "../../components/modules/Navbar";
import profile from "../../img/christian.png";
import box from "../../img/box.png";
import store from "../../img/home.png";
import packag from "../../img/package.png";
import cart from "../../img/cart.png";
import { Link } from "react-router-dom";

const ProfileSeller = () => {
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
      <div className={styles.Selling_product}>
        <div className={styles.main}>
          <div className={styles.inventory}>
            <h4>Inventory</h4>
            <hr />
            <label htmlFor="">Name of goods</label>
            <input type="text" className={styles.data} />
          </div>
          <div className={styles.item}>
            <h4>Item details</h4>
            <hr />
            <label htmlFor="">Name of goods</label>
            <input type="text" className={styles.data} />
            <label htmlFor="">Stock</label>
            <input type="text" placeholder="buah" className={styles.data} />
            <label htmlFor="">Condition</label>
            <div className={styles.radio}>
              <div className={styles.radio_item}>
                <input type="radio" id="ritema" name="ritem" value="ropt1" />
                <span>Baru</span>
              </div>
              <div className={styles.radio_item}>
                <input type="radio" id="ritemb" name="ritem" value="ropt2" />
                <span>Bekas</span>
              </div>
            </div>
          </div>
          <div className={styles.photo}>
            <h4>Photo of goods</h4>
            <hr />
            <div className={styles.preview_image}>
              <div className={styles.main_img}>
                <img src={box} alt="box" />
              </div>
              <div>
                <img src={box} alt="box" />
              </div>
              <div>
                <img src={box} alt="box" />
              </div>
              <div>
                <img src={box} alt="box" />
              </div>
              <div>
                <img src={box} alt="box" />
              </div>
            </div>
            <div className={styles.upload_image}>
              <button type="submit">PRIMARY</button>
            </div>
          </div>
          <div className={styles.decription}>
            <h4>Description</h4>
            <hr />
            <label htmlFor="">Name of goods</label>
            <textarea name="description" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSeller;
