import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const saveCartToServer = createAsyncThunk(
    'cart/saveCartToServer',
    async (cartItems, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3000/cart', {cartItems})
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const deleteCartItem = createAsyncThunk(
    'cart/deleteCartItem',
    async (itemId, {rejectWithValue}) => {
        try {
            await axios.delete(`http://localhost:3000/cart/${itemId}`)
            return itemId
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const updateCartItemQuantity = createAsyncThunk(
    'cart/updateCartItemQuantity',
    async ({id, quantity}, {rejectWithValue}) => {
        try {
            const response = await axios.patch(`http://localhost:3000/cart/${id}`, {quantity})
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
