import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      {/* Navbar container */}
      <nav className="navbar navbar-expand-lg" style={{
        backgroundColor: 'rgb(75, 18, 76,0.8)', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        zIndex: 1000, 
        padding: '10px 0' // Optional: Adjust the padding to your preference
      }}>
        <div className="container-fluid ms-lg-5 me-lg-5 ms-sm-1 me-sm-1">
          <span className="navbar-brand mb-2">
            <a href="/" className="h1 text-uppercase fs-3 text-decoration-none" style={{color:'rgb(254, 254, 254)'}}>U & Recipy</a>
          </span>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <a href="/" className="btn btn-link text-light fs-5 text-decoration-none ms-3">Home</a>
              </li>
              <li className="nav-item">
                <a href="/searchrecipy" className="btn btn-link text-light fs-5 text-decoration-none ms-3">Search Recipy</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
