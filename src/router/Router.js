import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import SellingPage from "../pages/SellingPage";
import BuyingPage from "../pages/BuyingPage";
import ProductPage from "../pages/ProductPage";
import CategoryPage from "../pages/CategoryPage";
import SellerProfilePage from "../pages/SellerProfilePage";
import AddressEditPage from "../pages/AddressEditPage";
import AddProductPage from "../pages/AddProductPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="selling" element={<SellingPage />} />
        <Route path="buying" element={<BuyingPage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="addproduct" element={<AddProductPage />} />
        <Route path="category" element={<CategoryPage />} />
        <Route path="address" element={<AddressEditPage />} />
        <Route path="profile" element={<SellerProfilePage />} />
      </Route>
    </Routes>
  );
}

export default Router;
