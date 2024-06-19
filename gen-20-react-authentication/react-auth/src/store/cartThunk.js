import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const saveCartToServer = createAsyncThunk(
    'cart/saveCartToServer',
    async ({cartItems, userId}, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3000/cart', {
                ...cartItems,
                userId,
                quantity: cartItems.quantity || 1
            })
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const deleteCartItem = createAsyncThunk(
    'cart/deleteCartItem',
    async ({itemId, userId}, {rejectWithValue}) => {
        try {
            await axios.delete(`http://localhost:3000/cart/${itemId}?userId=${userId}`)
            return itemId
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const updateCartItemQuantity = createAsyncThunk(
    'cart/updateCartItemQuantity',
    async ({id, quantity, userId}, {rejectWithValue}) => {
        try {
            const response = await axios.patch(`http://localhost:3000/cart/${id}`, {quantity, userId})
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const fetchCartFromServer = createAsyncThunk(
    'cart/fetchCartFromServer',
    async (userId, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:3000/cart?userId=${userId}`);
            return Array.isArray(response.data) ? response.data : [];
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)
