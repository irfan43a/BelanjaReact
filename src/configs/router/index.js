import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register/register";
import RegisterCustomer from "../../pages/Auth/Register/customer";
import MyBag from "../../pages/MyBag";
import CheckOut from "../../pages/CheckOut";
import DetailProduct from "../../pages/DetailProduct";
import Product from "../../pages/Product/Product";
import ProductList from "../../pages/ProductList/ProductList";
import Profile from "../../pages/Profile";
import SellingProduct from "../../pages/SellingProduct";
import TodoList from "../../pages/TodoList";
import Counter from "../../pages/Counter";
import Page404 from "../../pages/Page404";
import ProfileSeller from "../../pages/ProfileSeller";
import EditProduct from "../../pages/EditProducts";
import MyProduct from "../../pages/ProfileSeller/MyProduct";
import MyOrder from "../../pages/MyOrder";
import RequireAuth from "../../components/base/RequireAuth";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace="true" />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products/:id" element={<DetailProduct />} />
        <Route path="/sellingproduct" element={<SellingProduct />} />
        <Route path="/myOrder" element={<MyOrder />} />
        <Route
          path="/mybag"
          element={
            <RequireAuth>
              <MyBag />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/profileseler"
          element={
            <RequireAuth>
              <ProfileSeller />
            </RequireAuth>
          }
        />
        <Route
          path="/editproduct/:id"
          element={
            <RequireAuth>
              <EditProduct />
            </RequireAuth>
          }
        />
        <Route
          path="/myproduct"
          element={
            <RequireAuth>
              <MyProduct />
            </RequireAuth>
          }
        />

        <Route path="/customer" element={<RegisterCustomer />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
