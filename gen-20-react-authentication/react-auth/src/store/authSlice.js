import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    token: "",
    user: {
        id: "",
        email: "",
        name: "",
        role: "",
    },
    userId: "",
}

function getStoredAuthState() {
    const token = localStorage.getItem("token")
    const userString = localStorage.getItem("user")

    if (token && userString) {
        const user = JSON.parse(userString)
        axios.defaults.headers.common["Authorization"] = "Bearer " + token
        return {
            token,
            user: user,
            userId: user.id,
        }
    }
    return { ...initialState }
}

const authSlice = createSlice({
    name: "auth",
    initialState: getStoredAuthState(),
    reducers: {
        setToken(state, action) {
            const token = action.payload;
            state.token = token;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        },
        setUser(state, action) {
            const {id, email, name, role } = action.payload;

            state.user = {id, email, name, role}
            state.userId = id
            console.log('Saving user to localStorage', {id, email, name, role})
            localStorage.setItem('user', JSON.stringify({ id, email, name, role }));
        },
        resetAuthData() {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            axios.defaults.headers.common["Authorization"] =""
            return {...initialState}
        }
    }
})

export const {setToken, setUser, resetAuthData} = authSlice.actions
export default authSlice.reducer
