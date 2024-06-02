import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'
import ProductPage from './pages/ProductPage'
import Dashboard from './components/admin/Dashboard'
import DashboardAddProduct from './components/admin/DashboardAddProduct'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path='/detail/:id' element={<ProductDetail />} />
          <Route path='/admin' element={<Dashboard />} />
          <Route path='/admin/addproduct' element={<DashboardAddProduct />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
