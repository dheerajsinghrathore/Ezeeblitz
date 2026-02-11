import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";

export default function Single() {
  const { id } = useParams();
  const product = data.find((product) => product.id === Number(id));
  const imagePath = `/images/${product.id}.jpg`;

  return (
    <div className="row">
      <div className="col-6">
        <img src={imagePath} alt={product.name} className="img-fluid w-50" />
      </div>
      <div className="col-6">
        <h1>{product.name}</h1>
        <h3>${product.price}</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
