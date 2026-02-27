import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";
const initialState = {
	cartItems: data.slice(4, 8),
	cartNumbers: { subtotal: 1, shipping: 2, tax: 3, total: 4 },
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			//code to add item to the cart
		},
		removeFromCart: (state, actions) => {
			//code to remove item from cart
		},
	},
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
