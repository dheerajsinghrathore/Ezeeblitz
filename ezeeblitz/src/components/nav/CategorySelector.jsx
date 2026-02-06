import React from "react";

function CategorySelector() {
  let title = "All";
  const categories = ["All", "Gloves", "Hats", "Jackets", "Scarfs", "Socks"];
  return (
    <div className="dropdown mb-3 mb-lg-0">
      <button
        className="btn btn-outline-success text-white dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
      >
        {title}
      </button>
      <ul className="dropdown-menu">
        {categories.map((category) => {
          return (
            <li key={category}>
              <a href="#" className="dropdown-item pointer">
                {category}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CategorySelector;
