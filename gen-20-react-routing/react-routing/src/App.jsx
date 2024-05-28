import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductContent from './data/ProductContext'
import ProductDetail from './pages/ProductDetail'
import ProductPage from './pages/ProductPage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProductPage />}/>
          <Route path='/detail/:id' element={<ProductDetail />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
