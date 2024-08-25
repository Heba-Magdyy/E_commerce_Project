import { HashRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './admin/dashboard'
import LoginPage from './admin/logIn'
import Layout from './admin/Layout';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>

        <Route path='/admin' element={<DashboardPage />}/>
          <Route path='/' element={<LoginPage />} />

        </Route>
      </Routes>

    </HashRouter>
  )
}

export default App


{/* <a href="https://vitejs.dev" target="_blank">
<img src={viteLogo} className="logo" alt="Vite logo" /> */}