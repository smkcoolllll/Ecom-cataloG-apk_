import React from "react";
import "./Navbar.css";

const Navbar = ({ onOptionChange }) => {
  const handleLinkClick = (option) => {
    onOptionChange(option);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
        <img
            src="https://cdn-icons-png.flaticon.com/128/2096/2096276.png"
            alt="Icon"
            
            className="navbar-icon"
          />
        </li>
        <li className="navbar-item">
          <span className="navbar-link" >Ecom-cataLoG_🛒</span>
        </li>

        <li
          className="navbar-item"
          onClick={() => handleLinkClick("add-product")}
        >
          <span className="navbar-link">Add Product</span>
        </li>
        <li className="navbar-item" onClick={() => handleLinkClick("products")}>
          <span className="navbar-link">Products</span>
        </li>
        <li
          className="navbar-item"
          onClick={() => handleLinkClick("add-category")}
        >
          <span className="navbar-link">Add Category</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
