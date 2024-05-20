import React from 'react'
import {FaBars, FaTimes, FaShoppingCart, FaSearch, FaUser, FaBell} from 'react-icons/fa'

function Header() {
  return (
      <header className='bg-[#151E3F] text-[#F2F3D9] w-full h-[55px] md:fixed flex justify-between items-center z-50'>
        <div className='flex gap-[0.25vw] items-center'>
            <span className='font-bold text-2xl'>Card</span>
            <span className='font-semibold text-2xl text-red-700'>House</span>
        </div>
        <nav className=''>
            <ul className='flex text-nowrap justify-between md:items-center gap-[3vw]'>
                  <li><a href='#'>Home</a></li>
                  <li><a href='#'>Product TCG</a></li>
                  <li><a href='#'>Board Game</a></li>
                  <form action='' className='md:w-full max-w-screen-md'>
                    <div className='relative flex items-center text-gray-400 focus-within:text-gray-600'>
                        <input type='text' placeholder='What card do you need...' autoComplete='off' aria-label='What card do you need...'
                              className='w-full pr-3 pl-10 px-3 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2'
                        />
                          <FaSearch className='absolute ml-3 pointer-events-none'/>
                    </div>
                  </form>
                  <li><a href='#'></a></li>
                  <li><a href='#'></a></li>
            </ul>
        </nav>
        <div className='flex gap-3 justify-evenly items-center'>
            <a href='#User'>
                <FaUser/>
            </a>
            <span><a href='#User'>Juan Adhiasta</a></span>
            <FaBars className='md:hidden'/>
        </div>
    </header>
  )
}

export default Header
