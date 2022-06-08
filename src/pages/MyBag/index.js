import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../../components/modules/Navbar";
import { Link } from "react-router-dom";
import styles from "./mybag.module.css";
import mesuit from "../../img/formalsuitblack.png";
import jaket from "../../img/jaketjeans.png";

const MyBag = () => {
  return (
    <div>
      <Navbar />
      <section id={styles.bag}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>My bag</h2>
              <div className={styles.select}>
                <input type="checkbox" name="selectall" id="select" />
                <p>Select all items( 2 items selected)</p>
              </div>
              <div className={styles.item_all}>
                <div className={styles.item}>
                  <input type="checkbox" name="selectall" id="select" className="check" />
                  <div className={styles.image}>
                    <img src={mesuit} alt={mesuit} />
                  </div>
                  <div className={styles.title_product}> Mens formal suit - Black </div>
                  <div className={styles.qty}>
                    <button>-</button>1<button>+</button>
                  </div>
                  <div className={styles.price}>$ 20.0</div>
                </div>
                <div className={styles.item}>
                  <input type="checkbox" name="selectall" id="select" className="check" />
                  <div className={styles.image}>
                    <img src={jaket} alt={jaket} />
                  </div>
                  <div className={styles.title_product}>Men's jacket jeans</div>
                  <div className={styles.qty}>
                    <button>-</button>1<button>+</button>
                  </div>
                  <div className={styles.price}>$ 20.0</div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <span>Delete</span>
            </div>
            <div className="col-md-3">
              <h5>Shooping summary</h5>
              Total price <input type="text" value="$40.0" />
              <Link to="/checkout">
                <button type="submit" className={styles.buy_btn}>
                  buy
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyBag;
