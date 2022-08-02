import React, { useEffect } from "react";
import Navbar from "../../components/modules/Navbar";
import styles from "./chechkout.module.css";
// import mesuit from "../../img/formalsuitblack.png";
// import jaket from "../../img/jaketjeans.png";
import { useDispatch, useSelector } from "react-redux";
import { getProductBag } from "../../configs/redux/actions/productAction";
import Card from "../../components/modules/BagCard";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const navigate = useNavigate();
  const { bag, total } = useSelector((state) => state.products);
  useEffect(function () {
    document.title = "My Bag";
  }, []);
  const dispatch = useDispatch();
  const sumary = () => {
    bag.map((item) => item.price);
  };
  const delivery = 140000;
  useEffect(() => {
    dispatch(getProductBag());
  }, [bag, dispatch]);
  console.log("data dari bag", bag);
  useEffect(function () {
    document.title = "Check Out";
  }, []);
  console.log("total", sumary);

  const chechkout = () => {
    swal({
      title: "Good job!",
      text: `Produk Berhasil Chechot`,
      icon: "success",
    });
    navigate("/home");
  };

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
                {/* <div className={styles.item}>
                  <div className={styles.image}>
                    <img src={mesuit} alt={mesuit} />
                  </div>
                  <div className={styles.title_product}> Mens formal suit - Black </div>

                  <div className={styles.price}>$ 20.0</div>
                </div>
                <div className={styles.item}>
                  <div className={styles.image}>
                    <img src={jaket} alt={jaket} />
                  </div>
                  <div className={styles.title_product}>Men's jacket jeans</div>

                  <div className={styles.price}>$ 20.0</div>
                </div> */}
              </div>
              <div className={styles.product_price}></div>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Shooping summary</h3>
            <div className={styles.order}>
              <span>Order</span> <span className={styles.price}>Rp.{total}</span>
            </div>
            <div className={styles.delivery}>
              <span>Delivery</span> <span className={styles.price}>RP.{delivery}</span>
            </div>
            <hr />
            <div className={styles.shoping_sumary}>
              <p>Shooping summary</p> <span className={styles.price}>Rp.{total + delivery}</span>
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
