import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../actions/cartActions";

const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload;
            const isItemInCart = state.cartItems.find((cartItem) => cartItem.id === item.id);

            if (isItemInCart) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((cartItem) =>
                        cartItem.id === item.id
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...item, quantity: 1 }],
                };
            }

        case REMOVE_FROM_CART:
            const isItemInCartForRemoval = state.cartItems.find((cartItem) => cartItem.id === action.payload.id);

            if (isItemInCartForRemoval.quantity === 1) {
                return {
                    ...state,
                    cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id),
                };
            } else {
                return {
                    ...state,
                    cartItems: state.cartItems.map((cartItem) =>
                        cartItem.id === action.payload.id
                            ? { ...cartItem, quantity: cartItem.quantity - 1 }
                            : cartItem
                    ),
                };
            }

        case CLEAR_CART:
            return {
                ...state,
                cartItems: [],
            };

        default:
            return state;
    }
};

export default cartReducer;
