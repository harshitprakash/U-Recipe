import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../sidebar/Sidebar";  // Import Sidebar if you plan to use it

function Home() {
  return (
    <div>
      {/* Sidebar will be fixed at the top of the screen */}
      <Sidebar />

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
          <h1>Welcome to <a href="#" style={{ textDecoration: 'none', color: 'rgb(128, 43, 177)' }}>U & Recipy</a></h1>
          <h5 style={{ color: 'white', marginTop: '20px' }}>Click below to search recipes:</h5>
          <button
            type="button"
            className="btn btn-dark"
            style={{ backgroundColor: 'rgb(128, 43, 177)', marginTop: '20px' }}
          >
            <Link to="/searchrecipy" style={{ color: 'white', textDecoration: 'none' }}>Search Recipy</Link>
          </button>
        </div>
      </div>

      {/* Additional content */}
      <h1>Other content below the video...</h1>
    </div>
  );
}

export default Home;
