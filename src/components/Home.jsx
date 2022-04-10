import React from "react";
import Typewriter from "typewriter-effect";

export default function Home() {
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
      <h1>any kind of <span>Violence</span></h1>
      <a className="contact-us-btn" href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Contact Us Now
    </a>
   
        </div>
      </div>
    </>
  );
}
