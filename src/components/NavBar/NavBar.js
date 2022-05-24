import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../logoHenry.png";

import "./Navbar.css";

export default function NavBar() {
  return (
    <header className="navbar">
      <div>
        {/* <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" /> */}
        <Link className="logoMG" to="/">
          <div className="logo">MG</div>
        </Link>
      </div>
      <nav>
        <ul className="list">
          <li className="list-item">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/favs">Favoritas</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
