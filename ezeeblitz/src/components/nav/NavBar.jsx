import React from "react";
import CategorySelector from "./CategorySelector";
import CartButton from "./CartButton";
import SearchBar from "./SearchBar";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  bg-dark border-bottom fixed-top">
      <div className="container-fluid px-md-5">
        <span id="name" className="navbar-brand fw-bold pointer ">
          {props.title}
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          id="navbarSupportedContent"
          className="collapse navbar-collapse justify-content-end"
        >
          <CategorySelector />
          <SearchBar />
          <CartButton />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
