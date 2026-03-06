import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../features/cart/cartSlice";
export default function ProductButton(props) {
	const dispatch = useDispatch();
	const { cartItems } = useSelector((state) => state.cart);
	const isInCart = Boolean(
		cartItems.find((item) => item.id === props.product.id),
	);
	const handleClick = () => {
		dispatch(addToCart(props.product));
	};
	const handleRemoveClick = () => {
		dispatch(removeFromCart(props.product));
	};
	if (isInCart) {
		return (
			<button
				onClick={handleRemoveClick}
				className="btn btn-outline-danger  w-100"
			>
				Remove From Cart
			</button>
		);
	} else {
		return (
			<button onClick={handleClick} className="btn btn-outline-success w-100">
				Add To Cart
			</button>
		);
	}
}
