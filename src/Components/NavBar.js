import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HiDocumentText } from 'react-icons/hi';


const NavBar = () => {
  return (
    <>
      <div className="m-4">
      
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        
          <a href="#" className="navbar-brand text-light">Navbar</a>
          <button type="text" className=" navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span><HiDocumentText/></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <a href="#" className="nav-item nav-link text-light">Home</a>
              <a href="#" className="nav-item nav-link text-light">Profile</a>
              <a href="#" className="nav-item nav-link text-light">Messages</a>
              <a href="#" className="nav-item nav-link text-light" >Reports</a>
             
            </div>
          </div>
        </nav>
      </div>
    </>

  );
}

export default NavBar