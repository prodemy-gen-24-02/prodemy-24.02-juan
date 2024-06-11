import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemExist = state.cartItems.find(item => item.id === action.payload.id)
            if (itemExist) {
                itemExist.quantity +=  1
            } else {
                state.cartItems.push({...action.payload, quantity: 1})
            }
        },
        removeFromCart: (state, action) => {
            const itemExist = state.cartItems.find(item => item.id === action.payload.id)
            if(itemExist.quantity === 1){
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
            } else {
                itemExist.quantity -= 1
            }
        },
        clearCart: (state) => {
            state.cartItems = []
        },

    },
})

export const { addToCart, removeFromCart, clearCart} = cartSlice.actions
export default cartSlice.reducer
