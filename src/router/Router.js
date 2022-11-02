import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import SellingPage from "../pages/SellingPage";
import BuyingPage from "../pages/BuyingPage";
import ProductPage from "../pages/ProductPage";
import CategoryPage from "../pages/CategoryPage";
import SellerProfilePage from "../pages/SellerProfilePage";
import AdminDashboard from "../pages/AdminDashboard";
import AddProductPage from "../pages/AddProductPage";
import CartPage from "../pages/CartPage";
import SettingPage from "../pages/SettingPage";
import CheckoutPage from "../pages/CheckoutPage";
import NotFoundPage from "../pages/NotFoundPage";
import NotLoginPage from "../pages/NotLoginPage";
import ChangePasswordPage from "../pages/ChangePasswordPage";
import { useAuth } from "../contexts/AuthContext";
import ChangeEmailPage from "../pages/ChangeEmailPage";
import SearchProductPage from "../pages/SearchProductPage";
import ChangeAddressPage from "../pages/ChangeAddressPage";

function Router() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="product/:productId" element={<ProductPage />} />
        <Route path="category/:categoryId" element={<CategoryPage />} />
        <Route path="profile/:sellerId" element={<SellerProfilePage />} />
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="search/:search" element={<SearchProductPage />} />
        {user ? (
          <>
            <Route path="/addproduct" element={<AddProductPage />} />
            {/* <Route path="/address" element={<AddressEditPage />} /> */}
            <Route path="/mycart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/selling" element={<SellingPage />} />
            <Route path="/buying" element={<BuyingPage />} />
            <Route path="setting" element={<SettingPage />} />
            <Route path="/password" element={<ChangePasswordPage />} />
            <Route path="/email" element={<ChangeEmailPage />} />
            <Route path="/address" element={<ChangeAddressPage />} />
          </>
        ) : (
          <Route path="/*" element={<NotLoginPage />} />
        )}

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
