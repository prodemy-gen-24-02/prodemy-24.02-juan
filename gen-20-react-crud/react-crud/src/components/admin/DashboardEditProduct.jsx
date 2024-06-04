import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import FormEditProduct from './FormEditProduct'

const DashboardEditProduct = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
      <div className="flex h-screen bg-gray-100">
          <Sidebar open={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <div className="flex flex-col flex-1">
              <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
              <main className="flex-1 p-4">
                  <FormEditProduct />
              </main>
          </div>
      </div>
  )
}

export default DashboardEditProduct
