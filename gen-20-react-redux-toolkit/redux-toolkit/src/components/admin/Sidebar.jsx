import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronCircleLeft } from "react-icons/fa";

const Sidebar = ({ open, toggleSidebar }) => {
    return (
        <div className={`bg-gray-800 text-white w-64 h-lvh space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${open ? 'translate-x-0' : '-translate-x-full'} transition duration-200 ease-in-out`}>
            <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none absolute top-4 right-4">
                <FaChevronCircleLeft />
            </button>
            <Link to="/admin" className="text-white text-2xl font-semibold">
                Admin Dashboard
            </Link>
            <nav>
                <Link to="/admin" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Dashboard</Link>
                <Link to="/admin/products" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Products</Link>
                <Link to="/admin/customers" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Customers</Link>
                <Link to="/admin/transactions" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Transactions</Link>
            </nav>
        </div>
    );
};

export default Sidebar
