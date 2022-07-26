import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SellingProduct = () => {
  const navigate = useNavigate();
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
      method: "POST",
      url: "http://localhost:4000/v1/products/",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        alert("produk berhasil di tambah");
        console.log(res);
      })
      .catch((e) => {
        alert(e.response.data.message);
      });
    // .post("http://localhost:4000/v1/products/", dataProduct)
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
          <input type="file" name="photo" value={dataProduct.photo} placeholder="photo" onChange={handleUploadChange} />
        </li>
      </ul>
      <button type="submit">Register</button>
    </form>
  );
};

export default SellingProduct;
