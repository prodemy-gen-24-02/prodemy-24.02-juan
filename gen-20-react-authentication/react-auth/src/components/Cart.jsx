import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart,removeFromCart,clearCart } from '../store/cartSlice'
import PropTypes from 'prop-types'
import { deleteCartItem, saveCartToServer, updateCartItemQuantity } from '../store/cartThunk'


function Cart({ showModal, toggle}) {
    //const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)
    const cartItems = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()

    const handleAddToCart = async () => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        if (existingItem) {
            await dispatch(updateCartItemQuantity({ id: product.id, quantity: existingItem.quantity + 1 }));
        } else {
            await dispatch(addToCart(product));
            await dispatch(saveCartToServer(cartItems));
        }
    };

    const handleRemoveFromCart = async (item) => {
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
        if (existingItem.quantity === 1) {
            await dispatch(deleteCartItem(item.id));
        } else {
            await dispatch(removeFromCart(item));
            await dispatch(updateCartItemQuantity({ id: item.id, quantity: existingItem.quantity - 1 }));
        }
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleDeleteItem = (item) => {
        dispatch(deleteCartItem(item.id))
    }

    const getCartTotal = () => {
        const total = cartItems.reduce((total, item) => {
            const price = parseFloat(item.price) || 0
            const quantity = parseInt(item.quantity, 10) || 0
            return total + price * quantity
        }, 0)
        return total.toFixed(2)
    };

    return (
        showModal && (
            <div className="flex-col flex items-center fixed inset-0 left-1/4 bg-white dark:bg-[#301014] gap-8  p-10  text-black dark:text-white font-normal uppercase text-sm z-10">
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
                                <button
                                onClick={handleDeleteItem}
                                className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'>
                                    Delete from Server
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {
                    cartItems.length > 0 ? (
                        <div className="flex flex-col gap-2 justify-between items-center">
                            <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
                            <button
                                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                onClick={handleClearCart}
                            >
                                Clear cart
                            </button>
                            <button
                                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"

                            >
                                Continue Payment
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
