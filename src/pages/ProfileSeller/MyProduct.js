import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MyProduct.module.css";
import Navbar from "../../components/modules/Navbar";
import profile from "../../img/christian.png";
import store from "../../img/home.png";
import packag from "../../img/package.png";
import cart from "../../img/cart.png";
import { getProducts } from "../../configs/redux/actions/productAction";
import Card from "../../components/modules/MyProductCard";
import { Button, Loding } from "../../components/base";

const MyProduct = () => {
  const [page, setPage] = useState({
    currentPage: 1,
    limit: 5,
    sortBy: "",
    sort: "asc",
  });
  console.log(page.limit);
  const { data, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({});
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ search: search });
  };
  useEffect(() => {
    console.log(searchParams.get("keyword"));
    dispatch(getProducts(searchParams, { page: page.currentPage, limit: page.limit, sort: page.sort }));
  }, [dispatch, page.currentPage, page.limit, page.sort, searchParams]);

  return (
    <section className={styles.profile}>
      <Navbar onClickButton={handleSearch} onChange={(e) => setSearch(e.target.value)} />
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
          <input className={styles.search} type="search" placeholder="Search " aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
          <button>cari</button>
        </div>
        <div>
          <div className={styles.menu_sort}>
            <div className={styles.sort_name}>
              <button> Product name</button>
            </div>
            <div className={styles.sub_sort}>
              <button onClick={() => setPage({ ...page, sortBy: "price" })}>Price</button>
              <button onClick={() => setPage({ ...page, sortBy: "stock" })}>Stock</button>
            </div>
          </div>
          <div>
            <Button title="1" className="pagination" onClick={() => setPage({ ...page, currentPage: 1 })} />
            <Button title="2" className="pagination" onClick={() => setPage({ ...page, currentPage: 2 })} />
            <Button title="3" className="pagination" onClick={() => setPage({ ...page, currentPage: 3 })} />
          </div>
          <div className={styles.product_lis}>
            {/* <h1>product</h1> */}
            <div className={styles.wrapperCard}>
              {isLoading === false ? (
                data.data?.map((item, idx) => (
                  <div className={styles.card} key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <h4>{item.price}</h4>
                  </div>
                ))
              ) : (
                <Loding />
              )}
            </div>
            <div className={`${styles["page-container"]}`}>{isLoading ? <Loding /> : data?.map((item) => <Card key={item.id} id={item.id} image={item.photo} name={item.name} price={item.price} />)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProduct;
