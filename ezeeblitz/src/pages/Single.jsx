import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data";
import ProductButton from "../components/products/ProductButton";
import Line from "../components/extra/Line";
import Products from "../components/products/Products";
import { useSelector, useDispatch } from "react-redux";
import { setSingleProduct } from "../features/product/productSlice";
export default function Single() {
	const { id } = useParams();
	const { single, singleSimilarProducts } = useSelector(
		(state) => state.products,
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setSingleProduct(id));
	}, [id]);
	const imagePath = `/images/${single.id}.jpg`;

	return (
		<div>
			<div
				id="single"
				className="row justify-content-center align-items-center text-white mx-auto"
			>
				<div className="col-md-6">
					<img
						src={imagePath}
						alt={single.name}
						className="card-img-top mb-5 mb-md-0 p-0 p-lg-5"
					/>
				</div>
				<div className="col-md-6 text-center text-md-start">
					<h2 className="fs-1 fw-bold">{single.name}</h2>
					<div className="fs-5 mb-2">{single.price}</div>
					<p className="lead">{single.description}</p>
					<ProductButton />
				</div>
			</div>
			<Line />
			<h2 className="text-white my-4 text-center">
				Similar Products Like This
			</h2>
			<Products products={singleSimilarProducts} />
		</div>
	);
}
