import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./ProfileSeller.module.css";
import Navbar from "../../components/modules/Navbar";
import profile from "../../img/christian.png";
import store from "../../img/home.png";
import packag from "../../img/package.png";
import cart from "../../img/cart.png";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProduct } from "../../configs/redux/actions/productAction";
import swal from "sweetalert";

const ProfileSeller = () => {
  const { id } = useParams();
  const { detail: products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [dataProduct, setDataProduct] = useState({
    name: "",
    description: "",
    stock: "",
    price: "",
    id_category: "",
    photo: "",
  });

  const [file, setFile] = useState({
    file: null,
    priview: "",
  });

  const handleUploadChange = (e) => {
    console.log(e.target.files[0]);
    let upload = e.target.files[0];
    setFile(upload);
  };

  const handleChange = (e) => {
    setDataProduct({
      ...dataProduct,
      [e.target.name]: e.target.value,
      // priview: URL.createObjectUrl(e.target.files[0]),
    });
  };
  const handleUpload = (e) => {
    e.preventDefault();

    let bodyFormData = new FormData();
    bodyFormData.append("name", dataProduct.name);
    bodyFormData.append("description", dataProduct.description);
    bodyFormData.append("stock", dataProduct.stock);
    bodyFormData.append("price", dataProduct.price);
    bodyFormData.append("id_category", dataProduct.id_category);
    bodyFormData.append("photo", file);

    axios({
      method: "PUT",
      url: `${process.env.REACT_APP_API_BACKEND}products/${id}`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        // alert("produk berhasil di rubah");
        swal({
          title: "Good job!",
          text: `Product berhasil di Update`,
          icon: "success",
        });
        console.log(res);
      })
      .catch((e) => {
        // alert(e.response.data.message);
        swal({
          title: "Oops!",
          text: `${e.response.data.message}`,
          icon: "error",
        });
      });
  };
  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);
  console.log(products);
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
              <Link to="/profileseler">Selling Product</Link>
              <Link to="/myproduct">My Product</Link>
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
      <div className={styles.Selling_product}>
        <div className={styles.main}>
          <form onSubmit={handleUpload}>
            <div className={styles.inventory}>
              <h4>Inventory</h4>
              <hr />
              <label htmlFor="">Name of goods</label>
              {/* <input type="text" className={styles.data} value={dataProduct.name} onChange={handleChange} /> */}
              <input type="text" className={styles.data} name="name" value={dataProduct.name} placeholder={products?.name} onChange={handleChange} />
            </div>
            <div className={styles.item}>
              <h4>Item details</h4>
              <hr />
              <label htmlFor="">Price</label>
              {/* <input type="number" className={styles.data} value={dataProduct.price} onChange={handleChange} /> */}
              <input type="number" className={styles.data} name="price" value={dataProduct.price} placeholder={products?.price} onChange={handleChange} />
              <label htmlFor="">Stock</label>
              {/* <input type="number" placeholder="buah" className={styles.data} value={dataProduct.stock} onChange={handleChange} /> */}
              <input type="number" className={styles.data} name="stock" value={dataProduct.stock} placeholder={products?.stock} onChange={handleChange} />
              <label htmlFor="">id category</label>
              {/* <input type="number" className={styles.data} value={dataProduct.id_category} onChange={handleChange} /> */}
              <input type="number" className={styles.data} name="id_category" value={dataProduct.id_category} placeholder={products?.id_category} onChange={handleChange} />
              <label htmlFor="">Condition</label>
              <div className={styles.radio}>
                <div className={styles.radio_item}>
                  <input type="radio" id="ritema" name="ritem" value="ropt1" />
                  <span>Baru</span>
                </div>
                <div className={styles.radio_item}>
                  <input type="radio" id="ritemb" name="ritem" value="ropt2" />
                  <span>Bekas</span>
                </div>
              </div>
            </div>
            <div className={styles.photo}>
              <h4>Photo of goods</h4>
              <hr />
              <div className={styles.preview_image}>
                <div className={styles.main_img}>
                  <img src={products?.photo} alt="box" />
                </div>
                <div>
                  <img src={products?.photo} alt="box" />
                </div>
                <div>
                  <img src={products?.photo} alt="box" />
                </div>
                <div>
                  <img src={products?.photo} alt="box" />
                </div>
                <div>
                  <img src={products?.photo} alt="box" />
                </div>
              </div>
              <div className={styles.upload_image}>
                <input type="file" name="photo" value={dataProduct.photo} placeholder={products?.price} onChange={handleUploadChange} />
                {/* <button type="submit">PRIMARY</button> */}
              </div>
            </div>
            <div className={styles.decription}>
              <h4>Description</h4>
              <hr />
              <label htmlFor="">Name of goods</label>
              {/* <textarea name="description" id="" cols="30" rows="10" value={dataProduct.name}></textarea> */}
              <textarea name="description" id="" cols="30" rows="10" value={dataProduct.description} placeholder="Deskription" onChange={handleChange} />
            </div>
            <button type="submit" className={styles.jual_btn}>
              jual
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfileSeller;
