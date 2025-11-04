// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <div className="footerarea">
      <div className="container">
        {/* Newsletter Section */}
        <div className="footerarea__newsletter__wraper">
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
              data-aos="fade-up"
            >
              <div className="footerarea__text">
                <h3>
                  Still You Need Our <span>Support</span> ?
                </h3>
                <p>
                  Don’t wait make a smart & logical quote here. Its pretty easy.
                </p>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
              data-aos="fade-up"
            >
              <div className="footerarea__newsletter">
                <div className="footerarea__newsletter__input">
                  <form action="#">
                    <input
                      type="text"
                      placeholder="Enter your email here"
                    />
                    <div className="footerarea__newsletter__button">
                      <button type="submit" className="subscribe__btn">
                        Subscribe Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="footerarea__wrapper footerarea__wrapper__2">
          <div className="row">
            {/* About Us */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
            >
              <div className="footerarea__inner footerarea__about__us">
                <div className="footerarea__heading">
                  <h3>About us</h3>
                </div>
                <div className="footerarea__content">
                  <p>
                    Corporate clients and leisure travelers has been relying on
                    Groundlink for dependable safe, and professional chauffeured
                    car end service in major cities across World.
                  </p>
                </div>
                <div className="foter__bottom__text">
                  <div className="footer__bottom__icon">
                    <i className="icofont-clock-time"></i>
                  </div>
                  <div className="footer__bottom__content">
                    <h6>Opening Hours</h6>
                    <span>Mon - Sat(8.00 - 6.00)</span>
                    <span>Sunday - Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div
              className="col-xl-2 col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-up"
            >
              <div className="footerarea__inner">
                <div className="footerarea__heading">
                  <h3>Useful Links</h3>
                </div>
                <div className="footerarea__list">
                  <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Teachers</a></li>
                    <li><a href="#">Partner</a></li>
                    <li><a href="#">Room-Details</a></li>
                    <li><a href="#">Gallery</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Courses */}
            <div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
            >
              <div className="footerarea__inner footerarea__padding__left">
                <div className="footerarea__heading">
                  <h3>Course</h3>
                </div>
                <div className="footerarea__list">
                  <ul>
                    <li><a href="#">Ui Ux Design</a></li>
                    <li><a href="#">Web Development</a></li>
                    <li><a href="#">Business Strategy</a></li>
                    <li><a href="#">Software Development</a></li>
                    <li><a href="#">Business English</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Recent Posts */}
            <div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-12"
              data-aos="fade-up"
            >
              <div className="footerarea__right__wraper footerarea__inner">
                <div className="footerarea__heading">
                  <h3>Recent Post</h3>
                </div>
                <div className="footerarea__right__list">
                  <ul>
                    <li>
                      <a href="#">
                        <div className="footerarea__right__img">
                          <img
                            loading="lazy"
                            src="img/footer/footer__1.png"
                            alt="footerphoto"
                          />
                        </div>
                        <div className="footerarea__right__content">
                          <span>02 Apr 2024 </span>
                          <h6>Best Your Business</h6>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="footerarea__right__img">
                          <img
                            loading="lazy"
                            src="img/footer/footer__2.png"
                            alt="footerphoto"
                          />
                        </div>
                        <div className="footerarea__right__content">
                          <span>02 Apr 2024 </span>
                          <h6>Keep Your Business</h6>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="footerarea__right__img">
                          <img
                            loading="lazy"
                            src="img/footer/footer__3.png"
                            alt="footerphoto"
                          />
                        </div>
                        <div className="footerarea__right__content">
                          <span>02 Apr 2024 </span>
                          <h6>Nice Your Business</h6>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footerarea__copyright__wrapper footerarea__copyright__wrapper__2">
          <div className="row">
            <div className="col-xl-3 col-lg-3">
              <div className="copyright__logo">
                <a href="/">
                  <img
                    loading="lazy"
                    src="img/logo/logo_2.png"
                    alt="logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="footerarea__copyright__content footerarea__copyright__content__2">
                <p>
                  Copyright © <span>2024</span> by edurock. All Rights
                  Reserved.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3">
              <div className="footerarea__icon footerarea__icon__2">
                <ul>
                  <li>
                    <a href="//facebook.com">
                      <i className="icofont-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="//twitter.com">
                      <i className="icofont-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="//vimeo.com">
                      <i className="icofont-vimeo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="//linkedin.com">
                      <i className="icofont-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="//skype.com">
                      <i className="icofont-skype"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;