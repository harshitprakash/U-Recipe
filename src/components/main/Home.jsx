import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../elements/Navbar";  // Import Sidebar if you plan to use it
import Navbar from '../elements/Navbar';
import Footer from '../elements/Footer';

function Home() {
  return (
    <div>
      {/* Sidebar will be fixed at the top of the screen */}
      <Navbar/>

      {/* Main Content Below the Navbar */}
      <div
        className="position-relative"
        style={{
          height: '100vh',    // Make the video fill the entire height of the viewport
          width: '100%',      // Make the video fill the full width
        }}
      >
        <div
          className="embed-responsive embed-responsive-16by9"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
          }}
        >
          <video
            className="embed-responsive-item"
            autoPlay
            muted
            loop
            style={{
              objectFit: 'cover', // Ensures the video covers the entire area
              width: '100%',
              height: '100%',
              filter:'blur(1px)'
            }}
          >
            <source src="/videos/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Overlay text centered on the video */}
        <div
          className="position-absolute top-50 start-50 translate-middle text-center text-white"
          style={{
            zIndex: 2, // Make sure the text is above the video
          }}
        >
          <h1>Welcome to <a href="#" style={{ textDecoration: 'none', color: 'white' }}>U & Recipy</a></h1>
          <h5 style={{ color: 'white', marginTop: '20px' }}>Click below to search recipes:</h5>
          <button
            type="button"
            className="btn btn-dark"
            style={{ backgroundColor: 'white', marginTop: '40px',borderColor:'#4B124C'}}
          >
            <Link to="/searchrecipy" style={{ color: '#4B124C', textDecoration: 'none'}}> <b>Search Recipy  </b> </Link>
          </button>
        </div>
      </div>

      {/* Additional content */}

      <div className="ms-5 me-5 mt-5">
        <h2 style={{color:'white',textAlign:'center',marginBottom:'40px'}}>Recomendation</h2><hr style={{color:'white'}}/> 
          <div className="row">
              <div className="col-sm-3">
                  <div className="card">
                    <div className="card-body">

                    </div>
                  </div>
              </div>
              <div className="col-sm-3">
                  <div className="card">
                    <div className="card-body">

                    </div>
                  </div>
              </div>
              <div className="col-sm-3">
                  <div className="card">
                    <div className="card-body">

                    </div>
                  </div>
              </div>
              <div className="col-sm-3">
                  <div className="card">
                    <div className="card-body">

                    </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="ms-5 me-5 mt-5">
        <h2 style={{color:'rgb(250, 250, 250)',textAlign:'center',marginBottom:'40px'}}>About US</h2><hr style={{color:'white'}}/> 

        <div className="row"style={{backgroundColor:'rgb(75, 18, 76,0.8)',color:'white',marginTop:'40px'}}>
            <div className="col-sm-4 ">
                <div className="card" style={{backgroundColor:'transparent', border:'none',color:'white',marginTop:'40px'}}>
                  <div className="card-body mt-lg-5 mb-lg-5">
                      <div></div>
                      <img className="rounded-circle mt-lg-5" src="images/aboutus.jpg" alt="" style={{width:'100%'}} />    
                  </div>
                </div>
            </div>
            <div className="col-sm-8">
                <div className="card"style={{backgroundColor:'transparent', border:'none',color:'white',marginTop:'40px'}}>
                  <div className="card-body mt-lg-5 mb-lg-5 text ">
                    <p className="opacity-100 fs-4">Welcome to U & Recipy – where cooking meets convenience and creativity! Our mission is simple: to help you discover exciting and delicious recipes based on the ingredients you already have at home. Whether you're a seasoned chef or a beginner in the kitchen, U & Recipy is your perfect culinary companion.</p>
                    <p className=" opacity-50 fs-5 mt-4">With the power of the Spnacular API, we provide you with personalized recipe suggestions tailored to your preferences. All you need to do is list the ingredients you have, tell us how many recipes you'd like to explore, and let us do the rest! We’ll serve up a curated collection of recipes that turn your pantry staples into mouthwatering meals.
                      We believe cooking should be fun, effortless, and above all, a way to bring people together. Our platform is designed to inspire your culinary creativity and help you make the most of every meal, all while minimizing food waste.
                      Join us today and let’s create magic in the kitchen – one recipe at a time!</p>
                      <div className="container mt-5">
                        <h4>Contact Info</h4> <hr />
                          <div className="row mt-4">
                              <div className="col-sm-4">
                                <p className="opacity-100 fs-5">Phone Number</p>
                                <p className="opacity-50 fs-6">806118369</p>
                              </div>
                              <div className="col-sm-4">
                                <p className="opacity-100 fs-5">Email</p>
                                <p className="opacity-50 fs-6">harshitprakash2@gmail.com</p>
                              </div>
                              <div className="col-sm-4">
                                <p className="opacity-100 fs-5">Address</p>
                                <p className="opacity-50 fs-6">Qutub Vihar Goyala Dairy</p>
                              </div>  
                          </div>
                            <hr />
                          <div className="flex-sm-wrap">
                            <a href="" className="m-4">Facebook</a>
                            <a href="" className="m-4">Linkdin</a>
                            <a href=""className="m-4">Instagram</a>
                            <a href=""className="m-4">Github</a>

                          </div>

                      </div>
                  </div>
                </div>
            </div>
            
        </div>
      </div>
      
     <Footer/>
     
    </div>
  );
}

export default Home;
