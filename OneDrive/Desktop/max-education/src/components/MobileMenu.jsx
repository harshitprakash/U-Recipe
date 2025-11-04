// src/components/MobileMenu.jsx
import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const closeMenu = () => {
    document.body.classList.remove("mobile-off-canvas-active");
  };

  return (
    <div className="mobile-off-canvas-active">
      <a className="mobile-aside-close" onClick={closeMenu}>
        <i className="icofont icofont-close-line"></i>
      </a>

      <div className="header-mobile-aside-wrap">
        {/* Search */}
        <div className="mobile-search">
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Search entire store…" />
            <button type="submit">
              <i className="icofont icofont-search-2"></i>
            </button>
          </form>
        </div>

        {/* Simple Flat Menu - NO DROPDOWNS */}
        <div className="mobile-menu-wrap">
          <nav>
            <ul className="mobile-menu">
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/about" onClick={closeMenu}>About</Link></li>
              <li><Link to="/courses" onClick={closeMenu}>Courses</Link></li>
              <li><Link to="/dashboard" onClick={closeMenu}>Dashboard</Link></li>
              <li><Link to="/shop" onClick={closeMenu}>Shop</Link></li>
              <li><Link to="/cart" onClick={closeMenu}>Cart</Link></li>
              <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
            </ul>
          </nav>
        </div>

        {/* Social Icons */}
        <div className="mobile-social-wrap">
          <a href="#"><i className="icofont icofont-facebook"></i></a>
          <a href="#"><i className="icofont icofont-twitter"></i></a>
          <a href="#"><i className="icofont icofont-instagram"></i></a>
          <a href="#"><i className="icofont icofont-youtube-play"></i></a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;