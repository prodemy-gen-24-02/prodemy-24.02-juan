import React from 'react'
import { FaBars } from "react-icons/fa"

const Navbar = ({ toggleSidebar }) => {
    return (
        <div className="bg-white shadow-md p-4 flex items-center justify-between">
            <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none">
                <FaBars />
            </button>
            <div>Admin Dashboard</div>
        </div>
    );
};

export default Navbar;
