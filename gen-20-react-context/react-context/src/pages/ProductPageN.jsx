import React, { useState, useContext, useEffect } from 'react'
import { FaBars, FaTimes, FaShoppingCart, FaSearch, FaUser, FaBell } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import Cart from '../components/Cart'
import { CartContext } from '../context/CartContext'
import axios from 'axios'

const ProductPageN = () => {
    const navigate = useNavigate();
    const onClickCard = (id) => {
        navigate(`/detail/${id}`)
    }
    const [menuOpen, setMenuOpen] = useState(false)
    const [data, setData] = useState([])
    //const [loading, setLoading] = useState(true)
    //const [error, setError] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const { cartItems, addToCart } = useContext(CartContext)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const toggle = () => {
        setShowModal(!showModal)
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/data')
                setData(response.data)
                console.log(response.data)
                //setLoading(false)
            } catch (error) {
                //setError(error)
                //setLoading(false)
            }
        }
        fetchData()
    }, [])

    // if (loading) { return <div>Loading . . .</div> }
    // if (error) { return <div>Error: {error.message}</div> }

  return (
    <>
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
                          <li><a href='#'><FaBell className='transition ease-in-out hover:text-red-500 duration-300' /></a></li>
                          <div>
                              {!showModal && <button className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                                  onClick={toggle}
                              >Cart ({cartItems.length})</button>}
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
              </div>
          </header>
          <div className='container flex flex-wrap md:flex-row flex-col mx-auto my-[2vh]'>
            {
                data?.map ((product) => {
                    <div key={product.id} className='flex flex-col grow-0 shrink-0 basis-[20%] ml-[20px] mr-[20px] mb-[20px] p-[20px] text-center rounded-xl border-2 border-black shadow-lg '>
                        <img onClick={()=> onClickCard(product.id)} src={product.card_images[0].image_url} alt={data.name} className='w-full rounded-lg mb-[10px] hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden' />
                        <div>
                            <h3 className='font-bold text-[1.1em] mb-[0.5em]'>{product.name}</h3>
                            <p className='font-light text-[1.1em] mb-[0.5em]'>{product.series}</p>
                            <p className='text-bold text-[1em] mb-[0.5em]'>$ {product.card_prices[0].tcgplayer_price}</p>
                            <button className='flex justify-center items-center w-1/2 px-[10px] py-[10px] mx-auto border-2 border-[#c16e70] rounded hover:cursor-pointer bg-[#dc9e82] shadow-md active:opacity-75 transition-opacity duration-100'
                                onClick={() => { addToCart(product) }}>
                                Add to Cart <FaShoppingCart />
                            </button>
                        </div>
                    </div>
                })
            }
          </div>
          <Cart showModal={showModal} toggle={toggle} />
    </>
  )
}

export default ProductPageN
