import React, { useEffect } from "react";
import styles from "./profile.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../../components/modules/Navbar";
import profileimg from "../../img/christian.png";
import pencil from "../../img/pencil.svg";
import user from "../../img/user.png";
import map from "../../img/map.png";
import order from "../../img/order.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { profileUser } from "../../configs/redux/actions/userAction";

const Profile = () => {
  const { profile } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(profileUser());
      document.title = "Profile";
    },
    [dispatch]
  );
  console.log("data profile", profile);
  return (
    <section className={styles.main}>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
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
          </div>
          <div className="col-md-5">
            <div className={styles.profil}>
              <div>
                <h4>My Profile</h4>
                <p>Manage your profile information</p>
              </div>
              <div className={styles.form}>
                <div className={styles.form_input}>
                  <table>
                    <tr>
                      <td>
                        <label htmlFor="My account">Name</label>
                      </td>
                      <td>
                        <input type="text" name="name" value={profile.fullname} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="My account">Email</label>
                      </td>
                      <td>
                        <input type="text" name="email" value={profile.email} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="My account">Phone number</label>
                      </td>
                      <td>
                        <input type="tel" id="phone" name="phone" placeholder="+62" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="My account">Gender</label>
                      </td>
                      <td>
                        <div className={styles.radio}>
                          <input type="radio" name="gender" id="" /> Laki - Laki <input type="radio" name="gender" id="" /> Perempuan
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="My account">Date of birt </label>
                      </td>
                      <td>
                        <input type="month" id="bdaymonth" name="bdaymonth" />
                      </td>
                    </tr>
                    <tr rowSpan="2">
                      <td>
                        <button className={styles.save_btn}>Save</button>
                      </td>
                    </tr>
                  </table>
                </div>
                <div className={styles.image_input}>
                  <img src={profile.profileImage ? profile.profileImage : profileimg} alt="cris" />
                  <button className={styles.image_btn}>Select image</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
