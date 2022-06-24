import { Routes, Route } from "react-router-dom";
import Cart from "../page/Cart";
import HomePage from "../page/HomePage";
import Product from "../page/Product";
const Router = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default Router;
