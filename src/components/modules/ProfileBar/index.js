import React, { useEffect } from "react";
import styles from "./prodilebar.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { profileUser } from "../../../configs/redux/actions/userAction";
import profileimg from "../../../img/christian.png";
import pencil from "../../../img/pencil.svg";
import user from "../../../img/user.png";
import map from "../../../img/map.png";
import order from "../../../img/order.png";

const ProfileBar = () => {
  const { profile } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(profileUser());
      document.title = "Profile";
    },
    [dispatch]
  );
  return (
    <div className={styles.profile_sidebar}>
      <div className={styles.main_profile}>
        <div className={styles.profile_img}>
          <img src={profile.profileImage ? profile.profileImage : profileimg} alt={profile} />
        </div>
        <div className={styles.name_profile}>
          <p>{profile.fullname}</p>
          <label>
            <img src={pencil} alt="" />
            Ubah Profile Image
            <input type="file" className={styles.inputimg} />
          </label>
        </div>
      </div>
      <div className={styles.select_profile}>
        <div className={styles.user_acount}>
          <div className={styles.menu_profile}>
            <div className={`${styles.circle} ${styles.blue}`}>
              <img src={user} alt="" />
            </div>
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>Store</button>
              <div className={styles.dropdown_content}>
                <Link to="/profile">Profile</Link>
                <Link to="/profileseler">Store Profile</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.shiping}>
          <div className={styles.menu_profile}>
            <div className={`${styles.circle} ${styles.orange}`}>
              <img src={map} alt="" />
            </div>
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>Shiping Address</button>
              <div className={styles.dropdown_content}>
                <Link to="#">Shiping Address</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.order_acount}>
          <div className={styles.menu_profile}>
            <div className={`${styles.circle} ${styles.pink}`}>
              <img src={order} alt="" />
            </div>
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>My Order</button>
              <div className={styles.dropdown_content}>
                <Link to="/myOrder">My Order</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBar;
