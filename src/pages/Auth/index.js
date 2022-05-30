import React from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.css";
const Login = () => {
  return (
    <div>
      <div className={styles.container}>
        <div class="row">
          <div className={styles.title}>
            <div className={styles.logo}>
              <img src="/img/belanjavector.png" className="d-inline-block align-text-center" />
              Belanja
            </div>
          </div>
          <p>Please login with your account</p>
          <div className="swictacount">
            <button type="button" className={styles.btn_customer}>
              Customer
            </button>
            <button type="button" className={styles.btn_seller}>
              Seller
            </button>
          </div>
          <div className={styles.form}>
            <div>
              <input class={styles.email} type="email" placeholder="Email" />
            </div>
            <div>
              <input class={styles.pass} type="password" placeholder="Passsword" />
            </div>
            <div className={styles.reset}>
              <a href="reset-pasword.html">Forgot password?</a>
            </div>
            <button type="submit">PRIMARY</button>
          </div>
          <div className={styles.register}>
            <p>
              Don't have a Belanja account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
