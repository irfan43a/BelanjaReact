import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState([]);
  // konsum lewat asyn await
  async function fectData() {
    try {
      const result = await axios({
        method: "Get",
        baseURL: "http://localhost:4000/v1",
        url: "/products",
      });
      setProduct(result.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    // axios(
    // cara 1 dengan axios
    // .get("http://localhost:4000/v1/products")
    // cara 2 dengan axios
    //   {
    //     method: "Get",
    //     baseURL: "http://localhost:4000/v1",
    //     url: "/products",
    //   }
    // )
    //   .then((res) => {
    //     setProduct(res.data.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    fectData();
  }, []);

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:4000/v1/products/${id}`).then(() => {
      alert("data berhasil di hapus");
      fectData();
    });
  };
  return (
    <div>
      <h1>Product</h1>

      {product.map((item) => (
        <div className="card" key={item.id}>
          <div className="card-body">Item : {item.name}</div>
          <div className="card-body">Deskripsi : {item.description}</div>
          <div className="card-body">harga : {item.price}</div>
          <div className="card-body">{item.photo}</div>
          <button onClick={() => deleteProduct(item.id)}>delete</button>
        </div>
      ))}
      {/* {product.map((item) => (
        <div className="col-md-3 mb-3">
          <div className="card">
            <img src={item.photo} className="card-img-top" alt={item.name} />
            <div className="card-body">
              <h6 className="card-title">
                <a href="productsdetailv1.html">{item.name}</a>
              </h6>
              <p className="price">$ {item.price}</p>
              <p>{item.photo}</p>
              <p className="store">
                Zalora Cloth
                <br />
                <img src="/img/Star.png" alt="start" />
                <img src="/img/Star.png" alt="start" />
                <img src="/img/Star.png" alt="start" />
                <img src="/img/Star.png" alt="start" />
                <img src="/img/Star.png" alt="start" /> (10)
              </p>
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Product;
