import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./customer.module.css";
import Logo from "../../../components/base/Logo";
import { Input, Button } from "../../../components/base";
import swal from "sweetalert";

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
      .post(`${process.env.REACT_APP_API_BACKEND}users/register`, formRegister)
      .then(() => {
        navigate("/login");
        swal({
          title: "Good job!",
          text: `Register Berhasil`,
          icon: "success",
        });
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
    <div className={styles.containerLogin}>
      <div className={styles.content}>
        <div className={styles.title}>
          <Logo title="Belanja" />
        </div>
        <p>Please sign up with your account</p>
        <div className="swictacount">
          <button
            type="button"
            className={styles.btn_customer}
            // onClick="document.location='signup-customer.html'"
          >
            Customer
          </button>
          <button
            type="button"
            className={styles.btn_seller}
            //  onClick="document.location='signup-seller.html'"
          >
            Seller
          </button>
        </div>
        <div className={styles.form}>
          <form onSubmit={handleRegister}>
            <Input type="text" name="fullname" className="inputLogin" placeholder="Fullname" value={formRegister.fullname} onChange={handleChange} />
            {/* <input className={styles.fullname} type="text" name="fullname" value={formRegister.fullname} placeholder="fullname" onChange={handleChange} /> */}
            <Input type="text" name="email" className="inputLogin" placeholder="Email" value={formRegister.email} onChange={handleChange} />
            {/* <input className={styles.email} type="email" name="email" value={formRegister.email} placeholder="Email" onChange={handleChange} /> */}
            <Input type="password" name="password" className="inputLogin" placeholder="Password" value={formRegister.password} onChange={handleChange} />
            {/* <input className={styles.pass} type="password" name="password" value={formRegister.password} placeholder="password" onChange={handleChange} /> */}
            <Button
              title="Register"
              // {isloading ? "Loading..." : "Register"}
              className="btnLogin"
              onClick={handleRegister}
            />
          </form>
          <p>
            Already have a Belanja account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registerustomer;
