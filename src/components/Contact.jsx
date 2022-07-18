import React from "react";
import contact from "../images/contact.jpeg";
import { Link, NavLink } from "react-router-dom";

export default function Contact() {
    return (
        <>
        <div className="contact-wrapper">
        <div className="wrapper">
    <div className="left">
        <img src={contact} alt="user" width="100"/>
        <h4>Sumit Pandey</h4>
         <p>Advocate and legal adviser</p>
    </div>
    <div className="right">
        <div className="info">
            <h3>Information</h3>
            <div className="info_data">
                 <div className="data">
                    <h4>Email</h4>
                    <p>advsumitpandey@gmail.com</p>
                 </div>
                 <div className="data">
                   <h4>Phone</h4>
                    <p>+91 8318864818</p>
              </div>
            </div>
        </div>
      
      <div className="projects">
            <h3>Address</h3>
            <div className="projects_data">
                 <div className="data">
                    <h4>Recent</h4>
                    <p>S18-19, second floor, Pankaj Central Market near ipex  Bhawan, IP Extension, Delhi 110092</p>
                 </div>

            </div>
        </div>
      
        <div className="social_media">
            <ul>
              <li><a target="_blank" href="https://www.facebook.com/sumitpandey1994"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a target="_blank" href="https://www.instagram.com/sumit6764"><i className="fab fa-instagram"></i></a></li>
          </ul>
      </div>
    </div>
</div>
</div>
        </>
    )
}