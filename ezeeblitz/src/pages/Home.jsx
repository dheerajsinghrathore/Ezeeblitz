import React from "react";
import { data } from "../data";
import Products from "../components/nav/products/Products";

export default function Home() {
  return <Products products={data} />;
}
