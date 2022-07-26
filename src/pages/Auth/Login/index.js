import React, { useState, useEffect } from "react";
import styles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../configs/redux/actions/userAction";
import { Input, Button } from "../../../components/base";
import Logo from "../../../components/base/Logo";
// import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isloading } = useSelector((state) => state.user);
  const [dataUser, setDataUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(dataUser, navigate));
    // axios
    //   .post("http://localhost:4000/v1/users/login", dataUser)
    //   .then(() => {
    //     navigate("/home");
    //   })
    //   .catch((e) => {
    //     // console.log(e.response.data.message);
    //     alert(e.response.data.message);
    //   });
  };

  useEffect(function () {
    document.title = "Login";
  }, []);

  return (
    <section className={styles.containerLogin}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.logo}>
            <Logo title="Belanja" link="/home" />
          </div>
        </div>
        <p>Please login with your account</p>
        <div className={styles.swictacount}>
          <button type="button" className={styles.btn_customer}>
            Customer
          </button>
          <button type="button" className={styles.btn_seller}>
            Seller
          </button>
        </div>
        <form onSubmit={handleLogin}>
          {/* <div className={styles.form}> */}
          <Input type="text" name="email" className="inputLogin" placeholder="Email" value={dataUser.email} onChange={handleChange} />
          <Input type="password" name="password" className="inputLogin" placeholder="Password" value={dataUser.password} onChange={handleChange} />
          <div className={styles.reset}>
            <Link to="#">Forgot password?</Link>
          </div>
          <Button title={isloading ? "Loading..." : "Login"} className="btnLogin" onClick={handleLogin} />
          {/* </div> */}
        </form>
        <div className={styles.register}>
          <p>
            Don't have a Belanja account? <Link to="/customer">Register</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
