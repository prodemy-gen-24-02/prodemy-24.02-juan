import React from 'react'
import ProductDetail from './pages/ProductDetail'
import ProductPage from './pages/ProductPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path='/detail/:id' element={<ProductDetail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
