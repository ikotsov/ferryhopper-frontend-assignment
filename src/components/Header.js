import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Ferry Hopper Assignment Logo" />
      <div className="header__menu">
        <ul className="menu">
          <li className="menu__item">
            <a href="#" className="menu__link">
              Destinations
            </a>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__link">
              Favourites
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
