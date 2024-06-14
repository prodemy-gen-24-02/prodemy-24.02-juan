import {createSlice} from '@reduxjs/toolkit'
import { saveCartToServer, deleteCartItem, updateCartItemQuantity } from './cartThunk'

const initialState = {
    cartItems: [],
    status: 'idle',
    error: null,
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

    extraReducers: (builder) => {
        builder
            .addCase(saveCartToServer.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(saveCartToServer.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.cartItems = action.payload.cartItems;
            })
            .addCase(saveCartToServer.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(deleteCartItem.fulfilled, (state, action) => {
                state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
            })
            .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
                state.cartItems = state.cartItems.map((item) =>
                    item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
                );
            });
    },
})


export const { addToCart, removeFromCart, clearCart} = cartSlice.actions
export default cartSlice.reducer
