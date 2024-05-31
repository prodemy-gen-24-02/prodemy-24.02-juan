import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './components/admin/Dashboard'
import ProductDetail from './pages/ProductDetail'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path='/detail/:id' element={<ProductDetail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
