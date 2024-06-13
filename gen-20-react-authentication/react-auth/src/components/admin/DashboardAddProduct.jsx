import React, {useState} from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import FormAddProduct from './FormAddProduct'

const DashboardAddProduct = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
      <div className="flex h-screen bg-gray-100">
          <Sidebar open={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <div className="flex flex-col flex-1">
              <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
              <main className="flex-1 p-4">
                  <FormAddProduct />
              </main>
          </div>
      </div>
  )
}

export default DashboardAddProduct
