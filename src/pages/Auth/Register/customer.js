import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./customer.module.css";
import Logo from "../../../components/base/Logo";

const Registerustomer = () => {
  const navigate = useNavigate();
  const [formRegister, setformRegister] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setformRegister({
      ...formRegister,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/v1/users/register", formRegister)
      .then(() => {
        navigate("/login");
      })
      .catch((e) => {
        // console.log(e.response.data.message);
        alert(e.response.data.message);
      });
  };
  useEffect(function () {
    document.title = "Register";
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.container}>
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
            <form onSubmit={handleRegister}>
              <input className={styles.fullname} type="text" name="fullname" value={formRegister.fullname} placeholder="fullname" onChange={handleChange} />
              <input className={styles.email} type="email" name="email" value={formRegister.email} placeholder="Email" onChange={handleChange} />
              <input className={styles.pass} type="password" name="password" value={formRegister.password} placeholder="password" onChange={handleChange} />
              <button type="submit">Register</button>
            </form>
            <p>
              Already have a Belanja account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registerustomer;
