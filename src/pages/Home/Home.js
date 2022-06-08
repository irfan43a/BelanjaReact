import React from "react";
// import { useSearchParams } from "react-router-dom";
// import Button from "../../components/base/NavLink";
import Navbar from "../../components/modules/Navbar";
import CardProduct from "../../components/modules/Card/cardProduct";
import styles from "./home.module.css";
import Footer from "../../components/base/Footer";
import "bootstrap/dist/css/bootstrap.css";

const Home = () => {
  // const [search, setSearch] = useState("");
  // const [searchParam, setSearchParam] = useSearchParams();
  // const handleSearch = () => {
  //   setSearchParam({ keyword: search });
  // };
  // useEffect(() => {
  //   console.log(searchParam.get("keyword"));
  // }, [searchParam]);
  return (
    <section className={styles.main}>
      <Navbar />
      <div className="container-md">
        <section className={styles.polular}>
          <h5>New</h5>
          <p className={styles.sub}>You've never seen it before</p>
          <div className={styles.container}>
            <div className="row text-start">{/* <Button color={"blue"} darkColor={"darkblue"} /> */}</div>
            <div className="container-md">
              <CardProduct />
            </div>
            <div className="row text-start">
              <h5>Popular</h5>
              <p className={styles.sub}>You've never seen it before</p>
            </div>
            <div className="container-sm">
              <CardProduct />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
