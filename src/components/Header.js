import React from "react";
import logo from "../assets/logo.png";

function Header(props) {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Ferry Hopper Assignment Logo" />
      <div className="header__menu">
        <ul className="menu">
          <li className="menu__item">
            <a
              href="javascript:void(0)"
              onClick={() => props.setActiveMenu("destinations")}
              className={props.activeMenu === "destinations" ? "menu__link active" : "menu__link"}
            >
              Destinations
            </a>
          </li>
          <li className="menu__item">
            <a
              href="javascript:void(0)"
              onClick={() => props.setActiveMenu("favourites")}
              className={props.activeMenu === "favourites" ? "menu__link active" : "menu__link"}
            >
              Favourites
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
