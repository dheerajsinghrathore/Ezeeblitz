import React from "react";
import NoContent from "../components/extra/NoContent";
import CartItems from "../components/cart/CartItems";
import CartNumber from "../components/cart/CartNumber";
import CartBuyButton from "../components/cart/CartBuyButton";
import { useSelector } from "react-redux";

export default function Cart() {
	const { cartItems } = useSelector((state) => state.cart);
	if (cartItems.length === 0) {
		return (
			<div>
				<NoContent text="Nothing In Your Cart" btnText="Browse Products" />
			</div>
		);
	}
	return (
		<div className="row py-3">
			<div className="col-12 col-md-10 col-xl-8 mx-auto">
				<div
					id="cart"
					className="border p-3 bg-white text-dark my-3 my-md-0 rounded"
				>
					<h4 className="mb-3 px-1">Cart</h4>
					<ul className="list-group mb-3">
						{cartItems.map((item) => {
							return <CartItems key={item.id} item={item} />;
						})}
					</ul>
					<CartNumber />
					<CartBuyButton />
				</div>
			</div>
		</div>
	);
}
