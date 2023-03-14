import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/shared/logo.svg";
import iconOpen from "../../assets/shared/icon-hamburger.svg";
import closeIcon from "../../assets/shared/icon-close.svg";

import "./navbar.css";
function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="nav-thin-line"></div>
        <ul className="nav-links">
          <Link to="/" className="nav-link">
            <p>00</p> <span> HOME</span>
          </Link>
          <Link to="/destination" className="nav-link">
            <p>01</p> <span> destination</span>
          </Link>
          <Link to="/crew" className="nav-link">
            <p>02</p> <span> crew</span>
          </Link>

          <Link to="/tech" className="nav-link">
            <p>03</p> <span> technology</span>
          </Link>
        </ul>

        <div className="nav--bar-smallscreen">
          <div className="open-icon " onClick={() => setToggle(true)}>
            <img src={iconOpen} alt="close" />
          </div>

          {toggle && (
            <div className="nav--bar-smallscreen_overlay">
              <div className="close-icon" onClick={() => setToggle(false)}>
                <img src={closeIcon} alt="close" />
              </div>

              <ul className="nav-links_smallscreen">
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => setToggle(false)}
                >
                  00 HOME
                </Link>
                <Link
                  to="/destination"
                  className="nav-link"
                  onClick={() => setToggle(false)}
                >
                  01 destination
                </Link>
                <Link
                  to="/crew"
                  className="nav-link"
                  onClick={() => setToggle(false)}
                >
                  02 crew
                </Link>

                <Link
                  to="/tech"
                  className="nav-link"
                  onClick={() => setToggle(false)}
                >
                  03 technology
                </Link>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
