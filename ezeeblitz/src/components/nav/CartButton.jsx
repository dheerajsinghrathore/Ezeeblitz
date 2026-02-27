import React from "react";
import { useNavigate } from "react-router-dom";

function CartButton() {
	const navigate = useNavigate();
	const handleCartClick = () => {
		navigate("/cart");
	};
	const items = [];
	const colorName = items.length === 0 ? "none" : "white";
	return (
		<button
			onClick={handleCartClick}
			type="button"
			className="btn btn-outline-success d-md-block mt-3 mt-lg-0"
		>
			<i className="bi bi-cart3"></i>
			<span className="mx-2">Checkout</span>
			<span className={`badge text-success bg-${colorName}`}>
				{items.length}
			</span>
		</button>
	);
}

export default CartButton;
