import React, { useEffect } from "react";
import styles from "./myorder.module.css";
import Navbar from "../../components/modules/Navbar";
import ProfileBar from "../../components/modules/ProfileBar";
import { useDispatch, useSelector } from "react-redux";
import { profileUser } from "../../configs/redux/actions/userAction";
import { getCheckout } from "../../configs/redux/actions/checkoutActions";
import Card from "../../components/modules/CardOrder";

const MyOrder = () => {
  const { data } = useSelector((state) => state.chekout);
  const { profile } = useSelector((state) => state.user);
  const id = profile.id;
  console.log("profile id", id);

  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(profileUser());
      document.title = "Profile";
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getCheckout(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("data checkout", data);
  return (
    <div className={styles.myOrderPg}>
      <Navbar />
      <div className={styles.conten}>
        <div className={styles.sidebar}>
          <ProfileBar />
        </div>
        <div className={styles.maincontent}>
          <div className={styles.ordertable}>
            <span>MY Order</span>
            <div>All item</div>
            <hr />
            <div className={styles.overflow}>
              <span>
                {data.map((item) => (
                  <Card name={item?.name} image={item.photo} count={item.count} price={item.price} />
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
