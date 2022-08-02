import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/modules/Navbar";
import Footer from "../../components/base/Footer";
import "bootstrap/dist/css/bootstrap.css";
// import axios from "../../configs/axios";
import Card from "../../components/modules/Card";
import { getProducts } from "../../configs/redux/actions/productAction";
import { getCategory } from "../../configs/redux/actions/categoryAction";
import { useSearchParams } from "react-router-dom";
import { Button, Loding } from "../../components/base";
import Pic from "../../img/1.png";
import Pic2 from "../../img/2.png";
import Category from "../../components/modules/CategoryCard";
const Home = () => {
  const [page, setPage] = useState({
    currentPage: 1,
    limit: 10,
    sortBy: "",
    sort: "asc",
  });

  const { data, isLoading } = useSelector((state) => state.products);
  const { data: category } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({});
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ search: search });
  };
  useEffect(() => {
    console.log(searchParams.get("keyword"));
    dispatch(getCategory());
    dispatch(getProducts(searchParams, { page: page.currentPage, limit: page.limit, sortBy: page.sortBy, sort: page.sort }));
  }, [dispatch, page.currentPage, page.limit, page.sort, page.sortBy, searchParams]);
  console.log(category);
  // tanpa redux
  // const [product, setProduct] = useState([]);
  // async function fectData() {
  //   try {
  //     const result = await axios({
  //       method: "Get",
  //       url: "/products",
  //     });
  //     setProduct(result.data.data);
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // }
  // useEffect(() => {
  //   fectData();
  // }, []);

  return (
    <section className={styles.main}>
      <Navbar onClickButton={handleSearch} onChange={(e) => setSearch(e.target.value)} />
      <section className={styles.polular}>
        <section className={styles.caraousell}>
          <div className="container">
            <div className="row" justify-content-center mt-4>
              <div className={"col-12 d-flex " + styles.caraousell}>
                <div>
                  <img className={"img-fluid " + styles.j1} src={Pic} alt="" />
                </div>
                <div>
                  <img className={"img-fluid " + styles.j2} src={Pic2} alt="" />
                </div>
                <div>
                  <img className={"img-fluid " + styles.j3} src={Pic} alt="" />
                </div>
                <div>
                  <img className={"img-fluid " + styles.j4} src={Pic2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.category}>{isLoading ? <Loding /> : category.map((item) => <Category key={item.id} id={item.id} name={item.name} img={item.photo} />)}</div>
        <div className={styles.maincontent}>
          <h5>New</h5>
          <div>
            <select
              name="sortBy"
              id="sortBy"
              value={page.sortBy}
              onChange={(e) => {
                setPage({ ...page, sortBy: e.target.value });
              }}
            >
              <option value="">Sort Berdasarkan</option>
              <option value="name">Nama</option>
              <option value="price">Harga</option>
            </select>
            <select
              name="sort"
              id="sort"
              value={page.sort}
              onChange={(e) => {
                setPage({ ...page, sort: e.target.value });
              }}
            >
              <option value="asc">Terendah</option>
              <option value="desc">Tertinggi</option>
            </select>
            <div className={styles.btnPagination}>
              <Button title="1" className="pagination" onClick={() => setPage({ ...page, currentPage: 1 })} />
              <Button title="2" className="pagination" onClick={() => setPage({ ...page, currentPage: 2 })} />
              <Button title="3" className="pagination" onClick={() => setPage({ ...page, currentPage: 3 })} />
              <Button title="4" className="pagination" onClick={() => setPage({ ...page, currentPage: 4 })} />
              <Button title="5" className="pagination" onClick={() => setPage({ ...page, currentPage: 5 })} />
              {/* {new Array(products.pagination.totalPage).fill().map((item, index) =>
                        <Button
                            onClick={() => handlePage(index + 1)}
                            text={index + 1}
                            key={index}
                        >
                        </Button>)} */}
            </div>
          </div>
          <p className={styles.sub}>You've never seen it before</p>
          <div className={styles.content}>{isLoading ? <Loding /> : data?.map((item) => <Card key={item.id} id={item.id} image={item.photo} name={item.name} price={item.price} />)}</div>
        </div>

        <div className={styles.maincontent}>
          <h5>Popular</h5>
          <p className={styles.sub}>You've never seen it before</p>
          <div className={styles.content}>{isLoading ? <Loding /> : data.map((item) => <Card key={item.id} id={item.id} image={item.photo} name={item.name} price={item.price} />)}</div>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default Home;
