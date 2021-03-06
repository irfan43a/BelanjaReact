import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import StoreScore from "../../components/base/StoreScore/StoreScore";
import Navbar from "../../components/modules/Navbar";
import styles from "./detailProduk.module.css";

const DetailProduct = () => {
  const { id } = useParams();
  const location = useLocation();
  console.log(location);

  const [product, setProduct] = useState([]);
  async function fectData() {
    try {
      const result = await axios({
        method: "Get",
        baseURL: "http://localhost:4000/v1",
        url: `/products/${id}`,
      });
      setProduct(result.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fectData();
  });

  return (
    <section className={styles.main}>
      <Navbar />
      <div className="container">
        <div className="row">
          <p className="location">Home Detail {product.name}</p>
        </div>
        <div className="row">
          <div className="col">
            <div className={styles.image}>
              <div className={styles.main_image}>
                <img src={product.photo} alt={product.name} />
              </div>
              <div className={styles.sub_image}>
                <div className={styles.sub_img}>
                  <img src={product.photo} alt={product.name} />
                </div>
                <div className={styles.sub_img}>
                  <img src={product.photo} alt={product.name} />
                </div>
                <div className={styles.sub_img}>
                  <img src={product.photo} alt={product.name} />
                </div>
                <div className={styles.sub_img}>
                  <img src={product.photo} alt={product.name} />
                </div>
                <div className={styles.sub_img}>
                  <img src={product.photo} alt={product.name} />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={styles.order}>
              <h1>{product.name}</h1>
              <StoreScore />
              <p>Price</p>
              <h3>$ {product.price}</h3>
              <h5>Color</h5>
              <div className={styles.color}>
                <div className={styles.c_black}></div>
                <div className={styles.c_red}></div>
                <div className={styles.c_blue}></div>
                <div className={styles.c_green}></div>
              </div>
              <div className={styles.request}>
                <div className={styles.size}>
                  <h5>Size</h5>
                </div>
                <div className={styles.qty}>
                  <h5>jumlah</h5>
                </div>
              </div>
              <div className={styles.btn}>
                <button type="button" className={styles.btn_chat} onclick="document.location=''">
                  Chat
                </button>
                <button type="button" className={styles.btn_bag} onclick="document.location='mybag.html'">
                  Add bag
                </button>
                <button type="button" className={styles.btn_buy} onclick="document.location='checkout.html'">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.description}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>Informasi Produk</h4>
              <h5>Condition</h5>
              <h6>New</h6>
              <h5>Description</h5>
              <p>{product.description}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis earum cupiditate obcaecati. Tempore tenetur temporibus fugit quaerat nemo eveniet fuga quisquam! Corrupti quae, tempore sequi hic quam suscipit. Alias, in
                voluptate ab repellendus minus earum hic laudantium nemo beatae voluptatum sint mollitia totam obcaecati quod sapiente iusto libero omnis neque vitae quos consectetur. Suscipit, placeat aperiam animi ducimus numquam,
                corrupti rerum dolore, sint facere hic quos provident accusamus magnam atque.
              </p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nisi ab eos officia neque nesciunt quisquam ullam ex, harum non eum laudantium delectus alias reprehenderit magnam facilis unde in doloribus.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem accusantium aut amet dolorum laborum non.</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default DetailProduct;
