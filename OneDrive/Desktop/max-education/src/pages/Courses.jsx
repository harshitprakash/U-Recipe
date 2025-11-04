import React from "react";

const Breadcrumb = () => {
  return (
    <>
    <div className="breadcrumbarea">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="breadcrumb__content__wraper" data-aos="fade-up">
              <div className="breadcrumb__title">
                <h2 className="heading">Courses Grid</h2>
              </div>
              <div className="breadcrumb__inner">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li>Courses List</li>
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
          alt="photo"
        />
        <img
          loading="lazy"
          className="shape__icon__img shape__icon__img__2"
          src="img/herobanner/herobanner__2.png"
          alt="photo"
        />
        <img
          loading="lazy"
          className="shape__icon__img shape__icon__img__3"
          src="img/herobanner/herobanner__3.png"
          alt="photo"
        />
        <img
          loading="lazy"
          className="shape__icon__img shape__icon__img__4"
          src="img/herobanner/herobanner__5.png"
          alt="photo"
        />
      </div>
    </div>

    <div className="coursearea sp_top_100 sp_bottom_100">
      <div className="container">
        <div className="row">
          {/* Header */}
          <div className="col-xl-12">
            <div className="course__text__wraper" data-aos="fade-up">
              <div className="course__text">
                <p>Showing 1–12 of 54 Results</p>
              </div>
              <div className="course__icon">
                <ul className="nav property__team__tap" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      href="#"
                      className="single__tab__link active"
                      data-bs-toggle="tab"
                      data-bs-target="#projects__one"
                    >
                      <i className="icofont-layout"></i>
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      href="#"
                      className="single__tab__link"
                      data-bs-toggle="tab"
                      data-bs-target="#projects__two"
                    >
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </li>
                  <li className="short__by__new">
                    <select className="form-select" aria-label="Sort by">
                      <option defaultValue>Short by New</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="col-xl-12">
            <div className="tab-content tab__content__wrapper" id="myTabContent">
              {/* Grid View */}
              <div className="tab-pane fade active show" id="projects__one" role="tabpanel">
                <div className="row">
                  {[
                    {
                      img: 'grid_1.png',
                      badge: 'Data & Tech',
                      time: '6 Months',
                      title: 'Primary Telly',
                      price: '800 Rs',
                      oldPrice: '1000 Rs',
                      free: true,
                     
                    },
                    {
                      img: 'grid_2.png',
                      badge: 'Mechanical',
                      badgeColor: 'blue__color',
                      lessons: '29 Lesson',
                      time: '2 hr 10 min',
                      title: 'Basic Computers',
                      price: '600 Rs',
                      oldPrice: '1000 Rs',
                      free: true,
                  
                    },
                    {
                      img: 'grid_3.png',
                      badge: 'Development',
                      badgeColor: 'pink__color',
                      lessons: '25 Lesson',
                      time: '1 hr 40 min',
                      title: 'Minws course to understand about solution',
                      price: '$40.00',
                      oldPrice: '$67.00',
                      free: true,
                      instructorImg: 'grid_small_3.jpg',
                      instructor: 'Micle Jhon',
                      rating: 4,
                    },
                    {
                      img: 'grid_4.png',
                      badge: 'Ui & UX Design',
                      badgeColor: 'green__color',
                      lessons: '36 Lesson',
                      time: '3 hr 40 min',
                      title: 'Design course to understand about solution',
                      price: '$40.00',
                      oldPrice: '$67.00',
                      free: true,
                      instructorImg: 'grid_small_4.jpg',
                      instructor: 'Micle Robin',
                      rating: 4,
                    },
                    {
                      img: 'grid_5.png',
                      badge: 'Data & Tech',
                      badgeColor: 'orange__color',
                      lessons: '36 Lesson',
                      time: '3 hr 40 min',
                      title: 'Data course to understand about solution',
                      price: '$40.00',
                      oldPrice: '$67.00',
                      free: true,
                      instructorImg: 'grid_small_5.jpg',
                      instructor: 'Micle Robin',
                      rating: 4,
                    },
                    {
                      img: 'grid_6.png',
                      badge: 'Big Data',
                      badgeColor: 'yellow__color',
                      lessons: '30 Lesson',
                      time: '3 hr 40 min',
                      title: 'Big data to understand about solution package',
                      price: '$40.00',
                      oldPrice: '$67.00',
                      free: true,
                      instructorImg: 'grid_small_5.jpg',
                      instructor: 'Micle Robin',
                      rating: 4,
                    },
                  ].map((course, i) => (
                    <div key={i} className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12" data-aos="fade-up">
                      <div className="gridarea__wraper gridarea__wraper__2">
                        <div className="gridarea__img">
                          <a href="/course-details">
                            <img loading="lazy" src={`/img/grid/${course.img}`} alt="course" />
                          </a>
                          <div className="gridarea__small__button">
                            <div className={`grid__badge ${course.badgeColor || ''}`}>{course.badge}</div>
                          </div>
                          <div className="gridarea__small__icon">
                            <a href="#"><i className="icofont-heart-alt"></i></a>
                          </div>
                        </div>
                        <div className="gridarea__content">
                          <div className="gridarea__list">
                            <ul>
                              <li><i className="icofont-clock-time"></i> {course.time}</li>
                            </ul>
                          </div>
                          <div className="gridarea__heading">
                            <h3><a href="/course-details" >{course.title}</a></h3>
                          </div>
                          <div className="gridarea__price">
                            {course.price} <del>/{course.oldPrice}</del>
                            {course.free && <span> <del className="del__2">Free</del></span>}
                          </div>
                         
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* List View */}
              <div className="tab-pane fade" id="projects__two" role="tabpanel">
                {/* Repeat similar structure for list view if needed */}
                {/* Omitted for brevity — same pattern */}
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="main__pagination__wrapper" data-aos="fade-up">
            <ul className="main__page__pagination">
              <li><a className="disable" href="#"><i className="icofont-double-left"></i></a></li>
              <li><a className="active" href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#"><i className="icofont-double-right"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</>


  );
};

export default Breadcrumb;
