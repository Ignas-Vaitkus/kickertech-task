import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <header className="Navbar">
    <nav>
      <input class="checkbox" type="checkbox" />
      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
      <ul className="menu-items">
        <li>Lorem Ipsum</li>
        <li>Lorem Ipsum</li>
        <li>Lorem Ipsum</li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
