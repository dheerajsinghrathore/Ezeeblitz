import React from "react";
import { useDispatch } from "react-redux";
import { setQuantity } from "../../features/cart/cartSlice";
export default function CartItems(props) {
	const { item } = props;
	const dispatch = useDispatch();
	const handleClick = (qty) => {
		dispatch(setQuantity({ item, qty }));
	};
	return (
		<li className="list-group-item">
			<div className="my-0 d-flex justify-content-between align-items-center">
				<span className="fw-bolder fs-6 me-auto">
					{item.name} ({item.price})
				</span>
				<div className="btn-group">
					<button
						onClick={() => {
							handleClick(-1);
						}}
						className="btn border"
					>
						-
					</button>
					<button className="btn btn-light" disabled>
						1
					</button>
					<button
						onClick={() => {
							handleClick(1);
						}}
						className="btn border"
					>
						+
					</button>
				</div>
			</div>
			<p className="text-muted mb-0 col-3 description w-100">
				{item.description}
			</p>
		</li>
	);
}
