import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StoreScore from "../../components/base/StoreScore/StoreScore";
import Navbar from "../../components/modules/Navbar";
import styles from "./detailProduk.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getDetailProduct, addBag } from "../../configs/redux/actions/productAction";

const DetailProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { detail: products } = useSelector((state) => state.products);
  // const location = useLocation();
  const params = useParams();

  const handleAddBag = (data) => {
    console.log(data);
    dispatch(addBag(data));
    navigate("/mybag");
  };

  useEffect(() => {
    dispatch(getDetailProduct(params.id));
  }, [dispatch, params.id]);
  console.log(products);
  // tanpa redux
  // const { id } = useParams();
  // console.log(location);

  // const [product, setProduct] = useState([]);
  // async function fectData() {
  //   try {
  //     const result = await axios({
  //       method: "Get",
  //       baseURL: process.env.REACT_APP_API_BACKEND,
  //       url: `products/${id}`,
  //     });
  //     setProduct(result.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // useEffect(() => {
  //   fectData();
  // });
  // console.log(product);
  return (
    <section className={styles.main}>
      <Navbar />
      <div className="container">
        <div className="row">
          <p className="location">Home Detail {products?.name}</p>
        </div>
        <div className="row">
          <div className="col">
            <div className={styles.image}>
              <div className={styles.main_image}>
                <img src={products?.photo} alt={products?.name} />
              </div>
              <div className={styles.sub_image}>
                <div className={styles.sub_img}>
                  <img src={products?.photo} alt={products?.name} />
                </div>
                <div className={styles.sub_img}>
                  <img src={products?.photo} alt={products?.name} />
                </div>
                <div className={styles.sub_img}>
                  <img src={products?.photo} alt={products?.name} />
                </div>
                <div className={styles.sub_img}>
                  <img src={products?.photo} alt={products?.name} />
                </div>
                <div className={styles.sub_img}>
                  <img src={products?.photo} alt={products?.name} />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={styles.order}>
              <h1>{products?.name}</h1>
              <StoreScore />
              <p>Price</p>
              <h3>RP. {products?.price}</h3>
              <div className={styles.request}></div>
              <br />
              <div className={styles.btn}>
                <button
                  type="button"
                  className={styles.btn_chat}
                  // onClick="document.location=''"
                >
                  Chat
                </button>
                <button
                  type="button"
                  className={styles.btn_bag}
                  // onClick="document.location='mybag.html'"
                  onClick={() => {
                    handleAddBag(products);
                  }}
                >
                  Add bag
                </button>
                <button
                  type="button"
                  className={styles.btn_buy}
                  // onClick="document.location='checkout.html'"
                >
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
              <p>{products?.description}</p>
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
