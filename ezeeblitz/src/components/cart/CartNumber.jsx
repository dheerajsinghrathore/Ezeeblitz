import React from "react";

function CartNumber() {
	const cartNumbers = {
		subtotal: 2348.0,
		shipping: 80.0,
		tax: 422.64,
		total: 2850.64,
	};
	const items = [
		{ title: "SubTotal", price: cartNumbers.subtotal },
		{ title: "Shipping", price: cartNumbers.shipping },
		{ title: "Tax", price: cartNumbers.tax },
		{ title: "Total (INR)", price: cartNumbers.total },
	];
	return (
		<div id="cart-numbers">
			<ul className="list-group mb-3">
				{items.map((item) => {
					return (
						<li className="list-group-item d-flex justify-content-between">
							<span>{item.title}</span>
							<span className="text-muted">{item.price}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default CartNumber;
