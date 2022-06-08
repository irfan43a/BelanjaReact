import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./navbar.module.css";
import Logo from "../../base/Logo";
import sort from "../../../img/sort.png";
import mybag from "../../../img/mybag.png";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  // const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <div className={styles.logo}>
          <Logo className={styles.img_logo} />
          <NavLink to="/home">Belanja</NavLink>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <form className="d-flex">
          <input className={styles.search} type="search" placeholder="Search " aria-label="Search" />
          <button className={styles.btn_sort} type="submit" onClick={() => navigate("/")}>
            <img src={sort} alt="sort" />
          </button>
        </form>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto menu">
            <li className={styles.mybag}>
              <NavLink to="/mybag">
                <img src={mybag} alt="MyBag" />
              </NavLink>
            </li>
            <li className={styles.login}>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className={styles.signup}>
              <NavLink to="/register">Signup</NavLink>
            </li>
            <li className={styles.profile}>
              <NavLink to="/profile">{user.fullname}</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
