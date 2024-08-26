import { HashRouter, Route, Routes } from 'react-router-dom';

//Heba
import DashboardPage from './admin/Pages/dashboard'
import LoginPage from './admin/logIn'
import LayoutAdmin from './admin/layoutH/Layout';
import DashProducts from '../src/admin/Pages/dashProducts'
import NotFound from './admin/NotFound'
import DashCarts from './admin/Pages/dashCarts'
import Authen from './admin/Auth';
import NullLayout from './admin/layout/NullLayout';
import DashUsers from './admin/Pages/dashUsers';

//Rana
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AddProductForm from './for admin/AddProductForm';
import EditProductForm from './for admin/EditProductForm';
import Layout from './layout/Layout';
import Cart from './pages/Cart';
import NewProducts from './for admin/NewProducts';
import NPD from './for admin/NPD';
import UpdatesPage from './for admin/UpdatesPage';
import DeleteProductPage from './for admin/DeleteProductPage';

function App() {

  return (
    <HashRouter>
      <Routes>

        <Route element={<NullLayout />}>
        <Route path='/login' element={<LoginPage />} />
        </Route>
        

        <Route element={<LayoutAdmin />}>

          <Route path='/admin' element={<Authen><DashboardPage /></Authen>} />
          <Route path='/dashproducts' element={<Authen><DashProducts /></Authen>} />
          <Route path='/dashcarts' element={<Authen><DashCarts /></Authen>} />
          <Route path='/dashusers' element={<Authen><DashUsers /></Authen>} />
        </Route>

        <Route element={<Layout />}>
          <Route index element={<ProductListPage />} />
          <Route path="/product/:id" element={<NPD />} />
          <Route path="products/:id" element={<ProductDetailPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/products" element={<NewProducts/>} />
          <Route path="/admin/add-product" element={<Authen><AddProductForm /></Authen>} />
          <Route path="/admin/edit-product/:productId" element={<Authen><EditProductForm /></Authen>} />
          <Route path="/updates" element={<UpdatesPage />} />
          <Route path="/admin/delete-product/:productId" element={<Authen><DeleteProductPage /></Authen>} />
        </Route>

        <Route path='*' element={<NotFound />} />


      </Routes>
    </HashRouter>
  )
}


export default App;

