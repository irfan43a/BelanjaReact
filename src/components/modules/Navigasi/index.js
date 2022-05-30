import React from "react";
import { NavLink } from "react-bootstrap";

const Navigasi = () => {
  return (
    <div>
      <div className="navigasi">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/product">Product</NavLink>
            </li>
            <li>
              <NavLink to="/productList">Product List</NavLink>
            </li>
            <li>
              <NavLink to="/product/1">Product Detail</NavLink>
            </li>
            <li>
              <NavLink to="/sellingproduct">Selling Product</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigasi;
