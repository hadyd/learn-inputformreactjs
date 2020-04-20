import React from "react";
import "../App.css";
import {Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li className="nav">
            <Link to="/">Form Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
