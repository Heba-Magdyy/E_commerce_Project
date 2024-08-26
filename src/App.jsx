import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import { CartProvider } from './Store/CartContext';
import CartPage from './pages/CartPage';
import CheckOutForm from './pages/CheckOutForm';
import OrderSummary from './pages/OrderSummary';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductListPage from './pages/ProductListPage';
import './output.css'
export default function App() {
  return (
    <CartProvider>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<ProductListPage />} />
          <Route path="products/:id" element={<ProductDetailPage />} />
            <Route path='cart' element={<CartPage />} />
            <Route path="order-summary" element={<OrderSummary />} />
          </Route>
          <Route path='checkout' element={<CheckOutForm />} />
        </Routes>
      </HashRouter>
    </CartProvider>
  );
}
