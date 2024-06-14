import React, { useState, useContext } from 'react'
import {FaBars, FaTimes, FaShoppingCart, FaSearch, FaUser, FaBell} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Cart from '../Cart'
import { resetAuthData } from '../../store/authSlice'

const getTotalItem = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log('cartItems:', cartItems);

  if (!Array.isArray(cartItems)) {
    return 0;
  }

  return cartItems.reduce((total, item) => total + item.quantity, 0);
};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const user = useSelector((state) => state.auth.user)
  const isLoggedIn = useSelector((state) => state.auth.token !== "")

  const toggleMenu = () =>{
    setMenuOpen(!menuOpen)
  }

  const toggle = () => {
    setShowModal(!showModal)
  }

  const totalItems = getTotalItem()

  return (
    <header className='bg-[#51291E] text-white w-full z-50'>
      <div className='flex justify-between items-center py-3 px-6 w-[95%] mx-auto'>
        <div className='flex gap-[0.25vw] items-center'>
          <span className='font-bold text-2xl'>Card</span>
          <span className='font-semibold text-2xl text-red-700'>House</span>
        </div>
        <nav className={`duration-500 md:static absolute md:bg-[#51291E] bg-[#301014] md:min-h-fit min-h-[30vh] left-0 ${menuOpen ? 'top-[8%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-2 z-50`}>
          <ul className='flex md:flex-row flex-col md:items-center gap-[3vw] text-nowrap'>
            <li><Link to='/' className='transition ease-in-out hover:text-gray-500 duration-300'>Home</Link></li>
            <li><a href='#' className='transition ease-in-out hover:text-gray-500 duration-300'>Product TCG</a></li>
            <li><a href='#' className='transition ease-in-out hover:text-gray-500 duration-300'>Board Game</a></li>
            <form action='' className='md:w-full max-w-screen-md hidden md:contents'>
              <div className='relative flex items-center text-gray-400 focus-within:text-gray-600'>
                <input type='text' placeholder='What card do you need...' autoComplete='off' aria-label='What card do you need...'
                  className='w-full pr-3 pl-10 px-3 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2'
                />
                <FaSearch className='absolute ml-3 pointer-events-none' />
              </div>
            </form>
            <li><a href='#'><FaBell className='transition ease-in-out hover:text-red-500 duration-300'/></a></li>
            <div>
              {!showModal && <button className='px-4 py-2 bg-[#301014] text-white text-xs font-bold uppercase rounded hover:bg-[#51291E] focus:outline-none focus:bg-[#51291E]'
                onClick={toggle}
              >Cart ({totalItems}) </button>}
            </div>
          </ul>
        </nav>
        <div className='flex items-center gap-[1vw]'>
          <a href='#User'>
            <FaUser />
          </a>
          <span><a href='#User' className='hidden md:contents'>Juan Adhiasta</a></span>
          <button onClick={toggleMenu} className='text-2xl focus:outline-none md:hidden'>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <Cart showModal={showModal} toggle={toggle} />
      </div>
    </header>
  )
}

export default Header
