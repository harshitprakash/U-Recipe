import React from "react";

const ContactSection = () => {
  return (
    <>
      {/* Breadcrumbarea Section Start */}
      <div className="breadcrumbarea">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb__content__wraper" data-aos="fade-up">
                <div className="breadcrumb__title">
                  <h2 className="heading">Contact Page</h2>
                </div>
                <div className="breadcrumb__inner">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li>Contact Page</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shape__icon__2">
          <img loading="lazy" className="shape__icon__img shape__icon__img__1"
               src="img/herobanner/herobanner__1.png" alt="shape"/>
          <img loading="lazy" className="shape__icon__img shape__icon__img__2"
               src="img/herobanner/herobanner__2.png" alt="shape"/>
          <img loading="lazy" className="shape__icon__img shape__icon__img__3"
               src="img/herobanner/herobanner__3.png" alt="shape"/>
          <img loading="lazy" className="shape__icon__img shape__icon__img__4"
               src="img/herobanner/herobanner__5.png" alt="shape"/>
        </div>
      </div>
      {/* Breadcrumbarea Section End */}

      {/* Contact Info Section Start */}
      <div className="contact__section sp_top_100 sp_bottom_50" data-aos="fade-up">
        <div className="container">
          <div className="row">
            {/* Email & Phone */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="single__contact">
                <div className="contact__icon">
                  {/* SVG Icon here */}
                </div>
                <div className="contact__text">
                  <h5>Mail Address & Contact</h5>
                  <div className="contact__email">
                    <p>techbootmail@gmail.com</p>
                    <span>+91 9540802050</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Address */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="single__contact">
                <div className="contact__icon">
                  {/* SVG Icon here */}
                </div>
                <div className="contact__text">
                  <h5>Office Address</h5>
                  <div className="contact__email">
                    <p>Office No‑12, Maa Jawala Complex, Samaypur Badli, Delhi – 110042</p>
                    <span>(Near Jain Garments)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Number */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="single__contact">
                <div className="contact__icon">
                  {/* SVG Icon here */}
                </div>
                <div className="contact__text">
                  <h5>Phone Number</h5>
                  <div className="contact__email">
                    <p>+91 9540802050</p>
                    <span>Mon – Sun: 7:00 AM – 9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Info Section End */}

      {/* Contact Form Section Start */}
      <div className="contact__from__wraper sp_bottom_100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="contact__form__inner">
                <div className="contact__form__heading" data-aos="fade-up">
                  <h3>Drop Us a Line</h3>
                  <p>Your email address will not be published. Required fields are marked *</p>
                </div>

                <form id="contact-form" className="contact-form" action="mail.php" method="post">
                  <div className="row">

                    <div className="col-xl-6" data-aos="fade-up">
                      <div className="contact__input__wraper">
                        <input type="text" name="con_name" id="con_name" placeholder="Enter Your Name*" />
                        <div className="contact__icon">
                          <i className="icofont-businessman"></i>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6" data-aos="fade-up">
                      <div className="contact__input__wraper">
                        <input type="text" name="con_email" id="con_email" placeholder="Enter Email Address*" />
                        <div className="contact__icon">
                          <i className="icofont-envelope"></i>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6" data-aos="fade-up">
                      <div className="contact__input__wraper">
                        <input type="text" name="subject" placeholder="Write Service Type" />
                        <div className="contact__icon">
                          <i className="icofont-edit"></i>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6" data-aos="fade-up">
                      <div className="contact__input__wraper">
                        <input type="text" name="phone" placeholder="Enter Your Phone" />
                        <div className="contact__icon">
                          <i className="icofont-ui-call"></i>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-12" data-aos="fade-up">
                      <div className="contact__input__wraper">
                        <textarea name="con_message" id="con_message" cols="30" rows="10" placeholder="Enter Your Message here"></textarea>
                        <div className="contact__icon">
                          <i className="icofont-pen-alt-2"></i>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-12" data-aos="fade-up">
                      <div className="contact__button">
                        <button type="submit" value="submit" className="default__button" name="submit">
                          Post a Comment
                        </button>
                        <p className="form-messege"></p>
                      </div>
                    </div>

                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Form Section End */}
    </>
  );
};

export default ContactSection;
