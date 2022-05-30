import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import Page404 from "./pages/Page404";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth";
import Register from "./pages/Auth/register";
import Product from "./pages/Product/Product";
import ProductList from "./pages/ProductList/ProductList";
import SellingProduct from "./pages/SellingProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/modules/Navbar";
import Navigasi from "./components/modules/Navigasi";
import MyBag from "./pages/MyBag";
import Profile from "./pages/Profile";
import RegisterCustomer from "./pages/Auth/registercustomer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace="true" />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<DetailProduct />} />
        <Route path="/sellingproduct" element={<SellingProduct />} />
        <Route path="/mybag" element={<MyBag />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/registercustomer" element={<RegisterCustomer />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
