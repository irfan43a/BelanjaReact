import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../components/base/Logo";
import styles from "./register.module.css";

const register = () => {
  return (
    <div>
      <div className="container">
        <div className={styles.login}>
          <div className={styles.title}>
            <Logo title="Belanja" />
          </div>
          <p>Please sign up with your account</p>
          <div className="swictacount">
            <button type="button" className={styles.btn_customer} onclick="document.location='signup-customer.html'">
              Customer
            </button>
            <button type="button" className={styles.btn_seller} onclick="document.location='signup-seller.html'">
              Seller
            </button>
          </div>
          <div className={styles.form}>
            <input type="text" name="Name" id="name" placeholder="Name" />
            <input type="Email" name="email" placeholder="Email" />
            <input type="text" name="phone" placeholder="Phone number" />
            <input type="text" name="storename" placeholder="Store name" />
            <input type="password" name="pass" placeholder="Password" />

            <button type="submit">PRIMARY</button>

            <p>
              Already have a Belanja account?<Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
