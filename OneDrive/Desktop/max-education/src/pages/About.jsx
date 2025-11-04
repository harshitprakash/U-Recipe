import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* breadcrumbarea__section__start */}
      <div className="breadcrumbarea" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb__content__wraper">
                <div className="breadcrumb__title">
                  <h2 className="heading">About Page</h2>
                </div>
                <div className="breadcrumb__inner">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>About Page</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shape__icon__2">
          <img
            loading="lazy"
            className="shape__icon__img shape__icon__img__1"
            src="img/herobanner/herobanner__1.png"
            alt="banner"
          />
          <img
            loading="lazy"
            className="shape__icon__img shape__icon__img__2"
            src="img/herobanner/herobanner__2.png"
            alt="banner"
          />
          <img
            loading="lazy"
            className="shape__icon__img shape__icon__img__3"
            src="img/herobanner/herobanner__3.png"
            alt="banner"
          />
          <img
            loading="lazy"
            className="shape__icon__img shape__icon__img__4"
            src="img/herobanner/herobanner__5.png"
            alt="banner"
          />
        </div>
      </div>
      {/* breadcrumbarea__section__end */}

      {/* aboutarea__5__section__start */}
      <div className="aboutarea__5 sp_bottom_100 sp_top_100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6" data-aos="fade-up">
              <div className="aboutarea__5__img" data-tilt>
                <img
                  loading="lazy"
                  src="img/about/about_14.png"
                  alt="about"
                />
              </div>
            </div>

            <div className="col-xl-6 col-lg-6" data-aos="fade-up">
              <div className="aboutarea__content__wraper__5">
                <div className="section__title">
                  <div className="section__title__button">
                    <div className="default__small__button">About Us</div>
                  </div>
                  <div className="section__title__heading">
                    <h2>Welcome to Max Education</h2>
                  </div>
                </div>

                <div className="about__text__5">
                  <p>
                    Located at <strong>Maa Jawala Complex, Near Jain Garments, Samaypur, Samaypur Badli, Delhi – 110042</strong>, 
                    Max Education is a reputed institute committed to empowering students and professionals with 
                    high-quality computer training and practical skills development.
                  </p>
                </div>

                <div className="aboutarea__5__small__icon__wraper">
                  <div className="aboutarea__5__small__icon">
                    <img
                      loading="lazy"
                      src="img/about/about_15.png"
                      alt="icon"
                    />
                  </div>
                  <div className="aboutarea__small__heading">
                    <span>10+ Years of Experience</span> in Computer Education & Skill Training
                  </div>
                </div>

                <div className="aboutarea__para__5">
                  <p>
                    Our mission is to create a modern, results-driven learning environment where learners 
                    develop the confidence and expertise required to excel in today’s fast-paced job market. 
                    We combine theoretical understanding with hands-on projects to ensure that every student 
                    gains real-world experience and industry-ready capabilities.
                  </p>
                </div>

                <div className="aboutarea__bottom__button__5">
                  <a className="default__button" href="#more">
                    More About <i className="icofont-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* aboutarea__5__section__end */}

      {/* about__tap__section__start */}
      <div className="abouttabarea sp_bottom_70">
        <div className="container">
          <div className="row">
            <div className="col-xl-12" data-aos="fade-up">
              <ul className="nav about__button__wrap" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="single__tab__link active"
                    data-bs-toggle="tab"
                    data-bs-target="#about"
                    type="button"
                  >
                    About
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="single__tab__link"
                    data-bs-toggle="tab"
                    data-bs-target="#courses"
                    type="button"
                  >
                    Courses
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="single__tab__link"
                    data-bs-toggle="tab"
                    data-bs-target="#awards"
                    type="button"
                  >
                    Awards
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="single__tab__link"
                    data-bs-toggle="tab"
                    data-bs-target="#education"
                    type="button"
                  >
                    Education
                  </button>
                </li>
              </ul>
            </div>

            <div
              className="tab-content tab__content__wrapper"
              id="myTabContent"
              data-aos="fade-up"
            >
              {/* About Tab */}
              <div
                className="tab-pane fade show active"
                id="about"
                role="tabpanel"
              >
                <div className="col-xl-12">
                  <div className="aboutarea__content__tap__wraper">
                    <p className="paragraph__1">
                      Max Education has been at the forefront of digital education for over a decade. 
                      Our goal is to bridge the gap between classroom learning and real-world skills by 
                      offering computer training that is relevant, practical, and industry-focused.
                    </p>

                    <div className="aboutarea__tap__heading">
                      <h5>Practical Learning Environment</h5>
                      <p>
                        We focus on hands-on training to ensure that every learner develops 
                        the skills and confidence needed to succeed in their professional journey.
                      </p>
                    </div>

                    <div className="aboutarea__tap__heading">
                      <h5>Expert Trainers & Updated Curriculum</h5>
                      <p>
                        Our instructors bring real-world expertise, ensuring students stay 
                        updated with the latest technologies and tools in IT and digital literacy.
                      </p>
                    </div>

                    <div className="aboutarea__tap__heading">
                      <h5>Student-Centric Approach</h5>
                      <p>
                        We provide flexible class timings, personalized attention, and 
                        guidance to help every student achieve their learning goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Courses Tab */}
              <div className="tab-pane fade" id="courses" role="tabpanel">
                <div className="col-xl-12">
                  <div className="aboutarea__content__tap__wraper">
                    <h5>Our Popular Courses</h5>
                    <ul>
                      <li>DCA (Diploma in Computer Applications)</li>
                      <li>Banking & Accounting Courses</li>
                      <li>Networking and Hardware Training</li>
                      <li>Tally and MS Office Mastery</li>
                      <li>Web Development Basics</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Awards Tab */}
              <div className="tab-pane fade" id="awards" role="tabpanel">
                <div className="col-xl-12">
                  <div className="aboutarea__content__tap__wraper">
                    <h5>Achievements & Recognition</h5>
                    <p>
                      Over the years, Max Education has earned recognition from students and the community 
                      for delivering consistent, quality education and skill-based training.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education Tab */}
              <div className="tab-pane fade" id="education" role="tabpanel">
                <div className="col-xl-12">
                  <div className="aboutarea__content__tap__wraper">
                    <h5>Education Philosophy</h5>
                    <p>
                      We believe that education is most effective when it combines 
                      structured knowledge with real-world application. Our training programs 
                      reflect this philosophy through project-based and experiential learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about__tap__section__end */}
    </>
  );
};

export default AboutPage;
