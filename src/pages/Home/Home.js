import React, { useEffect } from "react";
import styles from "./home.module.css";
import { useDispatch, useSelector } from "react-redux";
// import { useSearchParams } from "react-router-dom";
// import Button from "../../components/base/NavLink";
// import { useSearchParams } from "react-router-dom";
import Navbar from "../../components/modules/Navbar";
import Footer from "../../components/base/Footer";
import "bootstrap/dist/css/bootstrap.css";
// import axios from "../../configs/axios";
import Card from "../../components/modules/card2";
import { getProducts } from "../../configs/redux/actions/productAction";

const Home = () => {
  // const navigate = useNavigate()
  const { data, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
          <div className={styles.content}>{isLoading ? <h1>Loading...</h1> : data?.map((item) => <Card key={item.id} id={item.id} image={item.photo} name={item.name} price={item.price} />)}</div>
        </div>
        <div className={styles.maincontent}>
          <h5>Popular</h5>
          <p className={styles.sub}>You've never seen it before</p>
          <div className={styles.content}>{isLoading ? <h1>Loading...</h1> : data.map((item) => <Card key={item.id} id={item.id} image={item.photo} name={item.name} price={item.price} />)}</div>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default Home;
