import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MyProduct.module.css";
import Navbar from "../../components/modules/Navbar";
import profile from "../../img/christian.png";
import store from "../../img/home.png";
import packag from "../../img/package.png";
import cart from "../../img/cart.png";
import Button from "../../components/base/Button";
import { getProducts } from "../../configs/redux/actions/productAction";
// import { getCategory } from "../../configs/redux/actions/categoryAction";

const MyProduct = () => {
  // const { data } = useSelector((state) => state.product);
  // const { datacategory } = useSelector((state) => state.category);
  // const dispatch = useDispatch();
  // console.log(data);
  // // console.log(datacategory);

  // useEffect(() => {
  //   dispatch(getProduct);
  //   // dispatch(getCategory);
  // }, []);
  // const [page, setPage] = useState({
  //   currentPage: 1,
  //   limit: 5,
  // });
  const { isLoading, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const fethData = async (page, sortorder, limit, search) => {
    try {
      dispatch(getProducts(page, limit, search, sortorder));
      // const result = await axios.get(`${process.env.REACT_APP_API_BACKEND}/v1/products/`)
      // console.log(result.data);
      // setData(result.data.data)
    } catch (error) {
      console.log(error);
    }
    console.log("Get Products Success!");
  };

  useEffect(() => {
    console.log("Fetching The Data ...");
    fethData(1, "asc");
  });
  const handlePage = (page) => {
    console.log("Sedang menjalankan pagination...");
    fethData(page);
  };
  return (
    <section className={styles.profile}>
      <Navbar />
      <div className={styles.profile_sidebar}>
        <div className={styles.main_profile}>
          <div className={styles.profile_img}>
            <img src={profile} alt={profile} />
          </div>
          <div className={styles.name_profile}>
            <p>james mikael</p>
            <p>ubah profile</p>
          </div>
        </div>
        <div className={styles.menu_profile}>
          <div className={`${styles.circle} ${styles.blue}`}>
            <img src={store} alt="" />
          </div>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Store</button>
            <div className={styles.dropdown_content}>
              <Link to="/profile">Profile</Link>
              <Link to="#">Store Profile</Link>
            </div>
          </div>
        </div>
        <div className={styles.menu_profile}>
          <div className={`${styles.circle} ${styles.orange}`}>
            <img src={packag} alt="" />
          </div>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Products</button>
            <div className={styles.dropdown_content}>
              <Link to="/myproduct">My Product</Link>
              <Link to="/profileseler">Selling Product</Link>
              <Link to="/product">Product list</Link>
            </div>
          </div>
        </div>
        <div className={styles.menu_profile}>
          <div className={`${styles.circle} ${styles.pink}`}>
            <img src={cart} alt="" />
          </div>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Order</button>
            <div className={styles.dropdown_content}>
              <Link to="#">My Order</Link>
              <Link to="#">Order cancel</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.product}>
        <div className={styles.main}>
          <div>My product</div>
        </div>
        <div className={styles.product_menu}>
          <div>All items</div>
          <div>Sould out</div>
          <div>Archives</div>
        </div>
        <hr />
        <div>
          <input className={styles.search} type="search" placeholder="Search " aria-label="Search" />
        </div>
        <div>
          <div className={styles.menu_sort}>
            <div className={styles.sort_name}>
              <button> Product name</button>
            </div>
            <div className={styles.sub_sort}>
              <button>Price</button>
              <button>Stock</button>
            </div>
          </div>
          <div className={styles.product_lis}>
            {/* <h1>product</h1> */}
            <div className={styles.wrapperCard}>
              {isLoading === false ? (
                products.data?.map((item, idx) => (
                  <div className={styles.card} key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <h4>{item.price}</h4>
                  </div>
                ))
              ) : (
                <p>Loading</p>
              )}
            </div>
            <div className={`${styles["page-container"]}`}>
              {/* <button
                        className={`${styles.active}`}
                        onClick={() => handlePage(1)}
                    >1
                    </button>

                    <button
                        onClick={() => handlePage(2)}
                    >2
                    </button> */}
              {new Array(products.pagination).fill().map((index) => (
                <Button onClick={() => handlePage(index + 1)} text={index + 1} key={index}></Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProduct;
