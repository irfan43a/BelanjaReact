import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Button from "../../components/base/Button2";
import Navbar from "../../components/modules/Navbar";
import CardProduct from "../../components/modules/Card/cardProduct";
import styles from "./home.module.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [searchParam, setSearchParam] = useSearchParams();
  const handleSearch = () => {
    setSearchParam({ keyword: search });
  };
  useEffect(() => {
    console.log(searchParam.get("keyword"));
  }, [searchParam]);
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Home</h1>
        {/* <p>{process.env.REACT_APP_API_BACKEND}</p>
        <input type="text" name="search" placeholder="search" onChange={(e) => setSearch(e.target.value)} />
        <button onClick={handleSearch}>Cari</button>
        <p>hasil pencarian adlah = {searchParam.get("keyword")}</p>
        <Button title="submit" onClick={() => alert("helo")}>
          <span>helo</span>
        </Button>
        <Link to="/productlist">ProductList</Link> */}
        <section className={styles.polular}>
          <div className={styles.container}>
            <div className="row text-start">
              <h5>Popular</h5>
              <p className={styles.sub}>You've never seen it before</p>
            </div>
            <div class="container">
              <div className={styles.row}>
                <CardProduct />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
