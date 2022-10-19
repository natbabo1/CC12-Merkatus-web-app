import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import SellingPage from "../pages/SellingPage";
import BuyingPage from "../pages/BuyingPage";
import ProductPage from "../pages/ProductPage";
import AddressEditPage from "../pages/AddressEditPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="selling" element={<SellingPage />} />
        <Route path="buying" element={<BuyingPage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="address" element={<AddressEditPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
