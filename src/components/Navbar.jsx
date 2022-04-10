import React from "react";
import logo from '../images/logo.jpeg'
import close from '../images/close.png'
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  let sidebar = document.getElementById('box')
  const handleHamburerClick = () => {
    if(sidebar) {
      console.log(sidebar)
      sidebar.style.width = '270px'
    }
  }
  return (
    <>
		<nav>
      <div className="hamburger-container">
        <div className="logo">
           <img className="logo-img" srcSet={logo} alt="" />
            </div>
  </div>
         <ul className="sublinks">
            <li><NavLink activeClassName="active"  to="/">Home</NavLink ></li>
             <li><NavLink activeClassName="active" to="/about-us">About us</NavLink></li>
             <li><NavLink activeClassName="active" to="/teams">Our Teams</NavLink></li>
             <li><NavLink activeClassName="active" to="services">Services</NavLink></li>
             <li><NavLink activeClassName="active" to="/contact">Contact Us</NavLink></li>
            </ul>
        </nav>


  <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"/>
  <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
  </label>
  <div id="sidebarMenu">
    <ul className="sidebarMenuInner">
      <li>Sumit Pandey <span>Advocate</span></li>
      <li><NavLink to="/" >Home</NavLink></li>
      <li><NavLink  to="/about-us" >About us</NavLink></li>
      <li><NavLink to="/teams" >Our Teams</NavLink></li>
      <li><NavLink to="/services">Services</NavLink></li>
      <li><NavLink to="/contact-us">Contact us</NavLink></li>
    </ul>
  </div>

    </>
  );
}
