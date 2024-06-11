import React from 'react'
//import { CartContext } from '../context/CartContext'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart,removeFromCart,clearCart } from '../store/actions/cartActions'
import PropTypes from 'prop-types'


function Cart({ showModal, toggle}) {
    //const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)
    const cartItems = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        showModal && (
            <div className="flex-col flex items-center fixed inset-0 left-1/4 bg-white dark:bg-black gap-8  p-10  text-black dark:text-white font-normal uppercase text-sm z-10">
                <h1 className="text-2xl font-bold">Cart</h1>
                <div className="absolute right-16 top-10">
                    <button
                        className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                        onClick={toggle}
                    >
                        Close
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    {cartItems.map((item) => (
                        <div className="flex justify-between items-center" key={item.id}>
                            <div className="flex gap-4">
                                <img src={item.img} alt={item.name} className="rounded-md h-24" />
                                <div className="flex flex-col">
                                    <h1 className="text-lg font-bold">{item.name}</h1>
                                    <p className="text-gray-600">{item.price}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button
                                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                    onClick={() => handleAddToCart(item)}
                                >
                                    +
                                </button>
                                <p>{item.quantity}</p>
                                <button
                                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                    onClick={() => handleRemoveFromCart(item)}
                                >
                                    -
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {
                    cartItems.length > 0 ? (
                        <div className="flex flex-col justify-between items-center">
                            <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
                            <button
                                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                onClick={handleClearCart}
                            >
                                Clear cart
                            </button>
                        </div>
                    ) : (
                        <h1 className="text-lg font-bold">Your cart is empty</h1>
                    )
                }
            </div>
        )
    )
}

Cart.propTypes = {
    showModal: PropTypes.bool,
    toggle: PropTypes.func
}

export default Cart
