import React from "react";
import Typewriter from "typewriter-effect";
import { Link, NavLink } from "react-router-dom";
import * as bootstrap from 'bootstrap';


export default function Home() {
// myModal.toggle()
  return (
    <>
      {/* <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Hello, I am Sumit Pandey.")
            .pauseFor(1000)
            .deleteAll()
            .typeString("I am an advocate.")
            .start();
        }}
      /> */}
      <div className="home-bg-container">
        <div className="home-introduction">
          <h1>We are here to Protect</h1>
          <h1>
            any kind of <span>Violence</span>
          </h1>
          <NavLink className="contact-us-btn" to="/contact">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Contact Us Now
          </NavLink>
        </div>
      </div>

    </>
  );
}
