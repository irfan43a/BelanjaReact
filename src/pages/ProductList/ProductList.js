import React, { useState } from "react";
import Button from "../../components/base/Button2";
import styles from "./productList.module.css";
import Card from "../../components/modules/Cardexample";
import Input from "../../components/base/Input2";

const ProductList = () => {
  const [product, setProduct] = useState("");
  const [products, setProducts] = useState([]);
  const handleChange = (e) => {
    setProduct(e.target.value);
  };
  const handleSimpan = () => {
    setProducts([...products, product]);
    setProduct("");
  };
  return (
    <div>
      <h2>Product List</h2>
      <div className={styles.wrapperInput}>
        <Input type="text" placeholder="product" id="product" name="product" label="Product" value={product} onChange={handleChange} />
        <Button title="Simpan" onClick={handleSimpan} />
      </div>
      {products.map((item) => (
        <Card content={item} />
      ))}
    </div>
  );
};

export default ProductList;
