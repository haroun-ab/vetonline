import React from "react";
import '../styles/Banner.css'
import {Link} from 'react-router-dom'

function Banner() {
    return (
        <header>
            <div className="header-content">
                <Link href="#" title="Back" style={document.location.pathname == '/' || document.location.pathname == '/login' || document.location.pathname == '/signup' || document.location.pathname == "/signup-confirmation" ? {display: 'none'} : {display:"initial"}}><i className="fa-solid fa-arrow-left"></i></Link>
                <a id="logo" href='#' style={document.location.pathname == '/' || document.location.pathname == '/login' || document.location.pathname == '/signup' || document.location.pathname == "/signup-confirmation" ? {margin: '10px auto'} : {display:"initial"}}><h1><i className="fa-solid fa-shield-dog"></i>VetOnline</h1></a>
                <nav style={document.location.pathname == '/'|| document.location.pathname == '/login' || document.location.pathname == '/signup' || document.location.pathname == "/signup-confirmation"  ? {display: 'none'} : {display:"initial"}}> 
                    <Link to="/veterinary" title="Veterinary informations"><i className="fa-solid fa-user-doctor"></i></Link>
                    <Link to="/change-password" title="Change the password"><i className="fa-solid fa-key"></i></Link>
                    <a href="#" title="Log out"><i className="fa-solid fa-power-off"></i></a>
                </nav>               
            </div>
        </header>
    );
  }

  export default Banner;
  