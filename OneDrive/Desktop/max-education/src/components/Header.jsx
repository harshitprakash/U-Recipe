// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu"; // ← Import it

const Header = () => {
  const openMobileMenu = () => {
    document.body.classList.add("mobile-off-canvas-active");
  };

  return (
    <header>
      {/* Desktop Header */}
      <div className="headerarea headerarea__2 header__sticky header__area">
        <div className="container desktop__menu__wrapper">
          <div className="row">
            {/* Logo */}
            <div className="col-xl-2 col-lg-2 col-md-6">
              <div className="headerarea__left">
                <div className="headerarea__left__logo">
                  <Link to="/">
                    <img loading="lazy" src="/img/logo/logo_1.png" alt="logo" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Main Menu */}
            <div className="col-xl-7 col-lg-7 main_menu_wrap">
              <div className="headerarea__main__menu">
                <nav>
                  <ul>
                     <li>
                      <a className="headerarea__has__dropdown" href="/">
                        Home <i className="icofont-rounded-down"></i>
                      </a>
                      
                    </li>
                    <li>
                      <a className="headerarea__has__dropdown" href="/courses">
                        Courses <i className="icofont-rounded-down"></i>
                      </a>
                      
                    </li>
                    <li>
                      <a className="headerarea__has__dropdown" href="/about">
                        About <i className="icofont-rounded-down"></i>
                      </a>
                    
                    </li>
                    <li>
                      <a className="headerarea__has__dropdown" href="/contact">
                        Contact Us <i className="icofont-rounded-down"></i>
                      </a>
                    
                    </li>
                
                  </ul>
                </nav>
              </div>
            </div>

            {/* Right Button */}
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="headerarea__right">
                <div className="headerarea__button">
                  <a href="/login">SignIn / SignUp</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="container-fluid mob_menu_wrapper">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="mobile-logo">
                <Link to="/">
                  <img loading="lazy" src="/img/logo/logo_1.png" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-6">
              <div className="header-right-wrap">
                <div className="mobile-off-canvas">
                  <a className="mobile-aside-button" href="#" onClick={openMobileMenu}>
                    <i className="icofont-navigation-menu"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU - RENDERED HERE */}
      <MobileMenu />
    </header>
  );
};

export default Header;