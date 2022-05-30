import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <NavLink to="/home">
          <img src="/img/belanjavector.png" className="d-inline-block align-text-center" />
          <span className="Logo">Belanja</span>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <form className="d-flex">
          <input className="search" type="search" placeholder="Search " aria-label="Search" />
          <button className="btn-sort" type="submit">
            <img src="/img/sort.png" />
          </button>
        </form>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="mybag">
              <NavLink to="/mybag">
                <image src="/img/mybag.png" alt="MyBag" />
                MyBag
              </NavLink>
            </li>
            <li className="login">
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className="signup">
              <NavLink to="/register">Signup</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
