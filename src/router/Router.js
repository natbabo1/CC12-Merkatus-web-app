import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import SellingPage from '../pages/SellingPage';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='selling' element={<SellingPage />} />
        <Route path='product' element={<ProductPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
