import React from "react";
import "./Navbar.css";
import logo from "./images/logo.svg";
import hamburger from "./images/icon-hamburger.svg";
import close from "./images/icon-close.svg";

const Navbar = () => {
  const handleClickMenu = () => {
    const navImg = document.querySelector(".nav-menu-img");
    const navLists = document.querySelector(".lists");
    console.log(navLists);
    navLists.classList.toggle("show");
    if (navLists.classList.contains("show")) {
      navImg.src = close;
    } else {
      navImg.src = hamburger;
    }
  };
  return (
    <nav className="Navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="lists">
        <li className="item-list">
          <a href="#">home</a>
        </li>
        <li className="item-list">
          <a href="#">shop</a>
        </li>
        <li className="item-list">
          <a href="#">about</a>
        </li>
        <li className="item-list">
          <a href="#">contact</a>
        </li>
      </ul>
      <button className="nav-menu" onClick={handleClickMenu}>
        <img className="nav-menu-img" src={hamburger} alt="menu-btn" />
      </button>
      <div className="backdrop"></div>
    </nav>
  );
};

export default Navbar;
