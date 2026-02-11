import React from "react";

function Products(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => {
        return <li key={product.id}>{product.name}</li>;
      })}
    </ul>
  );
}

export default Products;
