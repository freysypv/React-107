//imports
import { Link } from 'react-router-dom'
// import "./Navbar.css"

//logic
function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-opacity-70 bg- text-white mb-5 fs-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler  bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            hover="true"
            hover-bg="dark"
            
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent onHover:bg-dark" aria-label="Toggle navigation">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link active" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/About"}>
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/Catalog"}>
                  Catalog
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/admin"}>
                  Admin
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/Contact"}>
                  Contact
                </Link>
              </li>

              
            </ul>
            
          </div>
        </div>
      </nav>
    );
} 



//exports
export default Navbar;