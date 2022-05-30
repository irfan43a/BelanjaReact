import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SellingProduct = () => {
  // cara 1 membuat state 1 buah
  //   const [name, setName] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [stock, setStock] = useState("");
  //   const [price, setPrice] = useState("");
  //   const [idcategory, setIdcategory] = useState("");
  //   cara 2 di bungkus menggunakan object
  const navigate = useNavigate();
  const [dataProduct, setDataProduct] = useState({
    name: "",
    description: "",
    stock: "",
    price: "",
    id_category: "",
    photo: "",
  });

  const handleChange = (e) => {
    setDataProduct({
      ...dataProduct,
      [e.target.name]: e.target.value,
    });
  };
  const handleUpload = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/v1/products/", dataProduct)
      .then(() => {
        navigate("/product");
      })
      .catch((e) => {
        // console.log(e.response.data.message);
        alert(e.response.data.message);
      });
  };
  return (
    <form onSubmit={handleUpload}>
      <h1>Selling Product</h1>
      <ul>
        <li>
          <input type="text" name="name" value={dataProduct.name} placeholder="Nama Product" onChange={handleChange} />
        </li>
        <li>
          <input type="text" name="description" value={dataProduct.description} placeholder="Deskription" onChange={handleChange} />
        </li>
        <li>
          <input type="number" name="stock" value={dataProduct.stock} placeholder="Stock" onChange={handleChange} />
        </li>
        <li>
          <input type="number" name="price" value={dataProduct.price} placeholder="Price" onChange={handleChange} />
        </li>
        <li>
          <input type="number" name="id_category" value={dataProduct.id_category} placeholder="id category" onChange={handleChange} />
        </li>
        <li>
          <input type="file" name="photo" value={dataProduct.photo} placeholder="photo" onChange={handleChange} />
        </li>
      </ul>
      <button type="submit">Register</button>
    </form>
  );
};

export default SellingProduct;
