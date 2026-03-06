import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";
const initialState = {
	cartItems: [],
	cartNumbers: { subtotal: 1, shipping: 2, tax: 3, total: 4 },
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			//code to add item to the cart
			let { payload: item } = action;
			state.cartItems.push({ ...item, quantity: 1 });
		},
		removeFromCart: (state, action) => {
			//code to remove item from cart
			let { payload: item } = action;
			let index = state.cartItems.findIndex(
				(cartItem) => cartItem.id === item.id,
			);
			state.cartItems.splice(index, 1);
		},
		setQuantity: (state, action) => {
			let { item, qty } = action.payload;
			state.cartItems = state.cartItems.map((cartItem) => {
				return cartItem.id != item.id
					? cartItem
					: { ...cartItem, quantity: cartItem.quantity + qty };
			});
			state.cartItems = state.cartItems.filter(
				(cartItem) => cartItem.quantity >= 1,
			);
		},
	},
});
export const { addToCart, removeFromCart, setQuantity } = cartSlice.actions;
export default cartSlice.reducer;
