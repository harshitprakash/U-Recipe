import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div>
        
        <nav className="navbar navbar-expand-lg "style={{ backgroundColor: '#7dcfb6' }}>
          <div className="container-fluid ms-lg-5 me-lg-5 ms-sm-1 me-sm-1">
          <span className="navbar-brand mb-2 "><a href="/" className='h1  text-light text-uppercase fs-3 text-decoration-none'>U & Recipy</a></span>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                <a href="/" className="btn btn-link text-light fs-5 text-decoration-none ms-3">Home</a>
                </li>
                <li className="nav-item">
                <a href="/searchrecipy" className="btn btn-link text-light fs-5 text-decoration-none ms-3 ">Search Recipy</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

    </div>
  )
}

export default Sidebar;
