import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.png";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { ShoppingBasket } from "lucide-react";
import { User } from "lucide-react";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <Link className="logo">
          <img src={logo} alt="logo" />
        </Link>

        <ul className={menuOpen ? "open" : ""}>
          <NavLink to="/">Home</NavLink>
          <Link>Menu</Link>
          <Link to="">About Us</Link>
          <Link className="contact primary-button" to="#">Contact Us</Link>
        </ul>
        <div className="user-cart">
          <Link>
            <ShoppingBasket />
          </Link>
          <Link>
            <User />
          </Link>
        </div>
        <div
          className="menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <Menu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
