import React, { useState } from "react";
import "./Header.css";
import { FaAlignJustify } from "react-icons/fa";
const Header = () => {
  const [state, setState] = useState(true);
  return (
    <nav className="header">
      <div className="container">
        <div className="header__container">
          <ul className="header__left">
            <div className="header__left-logo">
              <img src="/images/logo.png" alt="logo" />
            </div>
          </ul>
          {state ? (
            <ul className="header__right">
              <li>
                <a style={{ color: "darkorange" }} href="#">
                  Home
                </a>
              </li>

              <li>
                <a href="#About">About</a>
              </li>

              <li>
                <a href="#Portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#Testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Header;
