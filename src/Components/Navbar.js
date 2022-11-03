import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"> abc </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">{props.hometext}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/about">{props.abouttext}</Link>
          </li>
        </ul>
         {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">{props.searchicon}</button>
        </form>  */}

           <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
         <input class="form-check-input" type="checkbox" onClick={props.toogleMode} role="switch" id="flexSwitchCheckDefault"/>
          <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
           </div> 
        
      </div>
    </div>
  </nav>
  </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abouttext: PropTypes.string.isRequired,
  hometext: PropTypes.string.isRequired,
  searchicon: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: "TITLE",
    abouttext: "ABOUT",
    hometext: "HOME",
    searchicon: "VIEW"
  };
  
  
// import { Outlet, Link } from "react-router-dom";

// const Layout = () => {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About Us</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>

//       <Outlet />
//     </>
//   )
// };

// export default Layout;

