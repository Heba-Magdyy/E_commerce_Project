import { HashRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './admin/Pages/dashboard'
import LoginPage from './admin/logIn'
import Layout from './admin/layout/Layout';
import DashProducts from '../src/admin/Pages/dashProducts'
import NotFound from './admin/NotFound'
import DashCarts from './admin/Pages/dashCarts'
import Authen from './admin/Auth';
import NullLayout from './admin/layout/NullLayout';
import DashUsers from './admin/Pages/dashUsers'

function App() {

  return (
    <HashRouter>
      <Routes>

        <Route element={<NullLayout />}></Route>
        <Route path='/login' element={<LoginPage />} />

        <Route element={<Layout />}>

          <Route path='/admin' element={<Authen><DashboardPage /></Authen>} />
          <Route path='/dashproducts' element={<Authen><DashProducts /></Authen>} />
          <Route path='/dashcarts' element={<Authen><DashCarts /></Authen>} />
          <Route path='/dashusers' element={<Authen><DashUsers /></Authen>} />


        </Route>
        <Route path='*' element={<NotFound />} />


      </Routes>
    </HashRouter>
  )
}

export default App


{/* <a href="https://vitejs.dev" target="_blank">
<img src={viteLogo} className="logo" alt="Vite logo" /> */}