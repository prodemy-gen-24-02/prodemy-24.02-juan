import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'
import ProductPage from './pages/ProductPage'
import Dashboard from './components/admin/Dashboard'
import DashboardAddProduct from './components/admin/DashboardAddProduct'
import DashboardEditProduct from './components/admin/DashboardEditProduct'
import PrivateRoutes from './components/route/PrivateRoute'
import GuestRoutes from './components/route/GuestRoute'
import AdminRoutes from './components/route/AdminRoute'
import Login from './pages/Login'



function App() {

  return (
    <>
        <Router>
          <Routes>
            <Route element={<GuestRoutes />}>
              <Route path='/login' element={<Login />} />
            </Route>

            <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<ProductPage />} />
            <Route path='/' element={<Navigate to='/home'/>} />
            <Route path='/detail/:id' element={<ProductDetail />} />
            </Route>
            
           <Route element={<AdminRoutes />}>
            <Route path='/admin' element={<Dashboard />} />
            <Route path='/admin/addproduct' element={<DashboardAddProduct />} />
            <Route path='/admin/editproduct/:id' element={<DashboardEditProduct />} />
           </Route>
          </Routes>
        </Router>
    </>
  )
}

export default App
