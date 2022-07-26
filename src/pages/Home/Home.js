import React, { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import Button from "../../components/base/NavLink";
import Navbar from "../../components/modules/Navbar";

import styles from "./home.module.css";
import Footer from "../../components/base/Footer";
import "bootstrap/dist/css/bootstrap.css";
// import { useSearchParams } from "react-router-dom";
import axios from "../../configs/axios";
import Card from "../../components/modules/Card2";

const Home = () => {
  const [product, setProduct] = useState([]);
  async function fectData() {
    try {
      const result = await axios({
        method: "Get",
        url: "/products",
      });
      setProduct(result.data.data);
    } catch (error) {
      console.log(error.response);
    }
  }
  useEffect(() => {
    fectData();
  }, []);
  // const [search, setSearch] = useState("");
  // const [searchParam, setSearchParam] = useSearchParams();
  // const handleSearch = () => {
  //   setSearchParam({ keyword: search });
  // };
  // useEffect(() => {
  //   console.log(searchParam.get("keyword"));
  //   document.title = "Home";
  // }, [searchParam]);
  return (
    <section className={styles.main}>
      <Navbar />
      <section className={styles.polular}>
        <div className={styles.maincontent}>
          <h5>New</h5>
          <p className={styles.sub}>You've never seen it before</p>
          <div className={styles.content}>
            {product.map((item) => (
              <Card key={item.id} image={item.photo} name={item.name} price={item.price} />
            ))}
          </div>
        </div>
        <div className={styles.maincontent}>
          <h5>Popular</h5>
          <p className={styles.sub}>You've never seen it before</p>
          <div className={styles.content}>
            {product.map((item) => (
              <Card key={item.id} image={item.photo} name={item.name} price={item.price} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default Home;
