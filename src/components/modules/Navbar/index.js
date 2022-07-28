import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./navbar.module.css";
import Logo from "../../base/Logo";
import sort from "../../../img/sort.png";
import mybag from "../../../img/mybag.png";
import notif from "../../../img/notif.png";
import mail from "../../../img/mail.png";
import christian from "../../../img/christian.png";

const Navbar = ({ onChange, onClickButton }) => {
  const { user } = useSelector((state) => state.user);
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    const localData = localStorage.getItem("token");
    if (localData) {
      setLogin(true);
    }
  }, []);
  // const { id } = useParams();
  // const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    setLogin(false);
  };
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
          <input className={styles.search} type="search" placeholder="Search " aria-label="Search" onChange={onChange} />
          <button className={styles.btn_sort} type="submit" onClick={onClickButton}>
            <img src={sort} alt="sort" />
          </button>
        </form>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto menu">
            {!isLogin && (
              <div className={styles.menu}>
                <li className={styles.mybag}>
                  <NavLink to="/mybag">
                    <img src={mybag} alt="MyBag" />
                  </NavLink>
                </li>
                <li className={styles.login}>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li className={styles.signup}>
                  <NavLink to="/customer">Signup</NavLink>
                </li>
                {/* <li className={styles.profile}>
                  <NavLink to="/profile">{user.fullname}</NavLink>
                </li> */}
              </div>
            )}
            {isLogin && (
              <div className={styles.menu_login}>
                <li>
                  <NavLink className="nav-link active" aria-current="page" to="/mybag">
                    <img src={mybag} alt="MyBag" />
                  </NavLink>
                </li>
                <li>
                  <Link className="nav-link active" aria-current="page" to="">
                    <img src={notif} className="d-inline-block align-text-center" alt="" />
                  </Link>
                </li>
                <li>
                  <Link className="nav-link active" aria-current="page" to="">
                    <img src={mail} className="d-inline-block align-text-center" alt="" />
                  </Link>
                </li>
                <li>
                  <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>
                      <div className={styles.profile}>
                        <img src={christian} className="d-inline-block align-text-center" alt="cris" />
                      </div>
                    </button>
                    <div className={styles.dropdown_content}>
                      <Link to="/profile">Profile {user.fullname}</Link>
                      <Link to="#" onClick={handleLogout}>
                        LogOut
                      </Link>
                    </div>
                  </div>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
