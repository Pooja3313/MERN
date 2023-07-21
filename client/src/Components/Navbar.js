import React  from "react";
import {Link} from "react-router-dom";
import "../style.css";
function Navbar(){
    return(
<>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/Login'}>

              positronX
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/Login'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/SignUp'}>
                    Sign up
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to={'/Home'}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/About'}>
                    About
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to={'/Contact'}>
                    Contact
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
          </nav>
      </div>
      </>
    )
}

 export default Navbar;