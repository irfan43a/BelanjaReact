import React, { useEffect, useState } from "react";
import Navbar from "../../components/modules/Navbar";
import styles from "./chechkout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProductBag } from "../../configs/redux/actions/productAction";
import { profileUser } from "../../configs/redux/actions/userAction";
import Card from "../../components/modules/CheckoutCard";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CheckOut = () => {
  const navigate = useNavigate();
  const { bag, total } = useSelector((state) => state.products);
  const { profile } = useSelector((state) => state.user);
  const idUser = profile.id;
  const [dataCheckout, setDataCheckout] = useState({
    idUser: "",
    total: "",
    products: "",
  });
  const biaya = (total / 100) * 1;
  const delivery = 14000;
  const hasil = delivery + biaya;
  console.log("biaya", hasil);

  const chechkout = () => {
    // let bodyFormData = new FormData();
    // bodyFormData.append("idUser", dataCheckout.idUser);
    // bodyFormData.append("total", dataCheckout.total);
    console.log("formdata", dataCheckout);

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_BACKEND}products/checkout/`,
      data: dataCheckout,
    }).then((res) => {
      swal({
        title: "Good job!",
        text: `Checkout Berhasil Silahkan Lakukan Pembayaran`,
        icon: "success",
      });
      console.log(res);
    });
    navigate("/myOrder").catch((e) => {
      swal({
        title: "Oops!",
        text: `${e.response.data.message}`,
        icon: "error",
      });
    });
  };
  useEffect(function () {
    document.title = "My Bag";
  }, []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileUser());
    dispatch(getProductBag());
    setDataCheckout({
      ...dataCheckout,
      idUser,
      products: bag,
      total: total + hasil,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(function () {
    document.title = "Check Out";
  }, []);
  return (
    <section className={styles.checkout}>
      <Navbar />
      <div className="container">
        <div className="row">
          <h2>Checkout</h2>
        </div>
        <div className="row check">
          <div className="col-md-8">
            <span className={styles.title}>
              <h6>Shiping Address</h6>
            </span>
            <div className={styles.address}>
              <h6>Andreas Jane</h6>
              <p>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
            </div>
            <button className={styles.address_btn}>Choose another address</button>
            <div className={styles.select}>
              <div class={styles.item_all}>
                {bag?.map((item) => (
                  <Card id={item.id} image={item.photo} count={item.count} name={item.name} price={item.price} />
                ))}
              </div>
              <div className={styles.product_price}></div>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Shoping summary</h3>
            <div className={styles.order}>
              <span>Order</span> <span className={styles.price}>Rp.{total}</span>
            </div>
            <div className={styles.delivery}>
              <span>Delivery</span> <span className={styles.price}>RP.{hasil}</span>
            </div>
            <hr />
            <div className={styles.shoping_sumary}>
              <p>Shoping summary</p> <span className={styles.price}>Rp.{total + hasil}</span>
            </div>
            <br />
            <button className={styles.buy_btn} onClick={() => chechkout()}>
              Buy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
