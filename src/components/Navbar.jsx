import React from "react";
import logo from '../images/logo.jpeg'
import close from '../images/close.png'
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
            <li><a href="#">Home</a></li>
             <li><a href="#">About us</a></li>
             <li><a href="#">Our Teams</a></li>
             <li><a href="#">Services</a></li>
             <li><a href="#">Contact Us</a></li>
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
      <li><a href="https://vanila.io" target="_blank">Home</a></li>
      <li><a href="https://instagram.com/plavookac" target="_blank">About us</a></li>
      <li><a href="https://twitter.com/plavookac" target="_blank">Our Teams</a></li>
      <li><a href="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg" target="_blank">Services</a></li>
      <li><a href="https://www.linkedin.com/in/plavookac/" target="_blank">Contact us</a></li>
    </ul>
  </div>

    </>
  );
}
