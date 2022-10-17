import { Routes, Route } from 'react-router-dom';
import Header from '../layouts/header/Header';
import HomePage from '../pages/HomePage';
import SellingPage from '../pages/SellingPage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="selling" element={<SellingPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
