import { React, useState } from "react";
import contact from "../images/contact.jpeg";
import { Link, NavLink } from "react-router-dom";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmitClick = () => {

    if(firstName && lastName && phone && email && message) {
        alert(`FirstName: ${firstName}, LastName: ${lastName}, Email: ${email}, Message: ${message}`);
    }else {
        alert('please fill the form correctly')
    }
    console.log(firstName);
    console.log(lastName)
    console.log(phone)
    console.log(email)
    console.log(message)
  };

  return (
    <>
      <div className="contact-form">
        <div class="container">
          <div class="form-title">Get In Touch</div>
          <div class="form-floating">
            <input
              onInput={(e) => setFirstName(e.target.value)}
              value={firstName}
              type="text"
              placeholder=" "
            />
            <label>First Name</label>
          </div>

          <div class="form-floating">
            <input  value={lastName}onInput={(e) => setLastName(e.target.value)}  type="text" placeholder=" " />
            <label>Last Name</label>
          </div>

          <div class="form-floating">
            <input value={phone}onInput={(e) => setPhone(e.target.value)} type="number" placeholder=" " />
            <label>Phone Number</label>
          </div>

          <div class="form-floating">
            <input value={email} onInput={(e) => setEmail(e.target.value)}  type="email" placeholder=" " />
            <label>Email</label>
          </div>

          <div class="form-floating">
            <textarea value={message} onInput={(e) => setMessage(e.target.value)} placeholder=" "></textarea>
            <label>Message</label>
          </div>

          <button onClick={handleSubmitClick} class="btn btn__dark">
            Submit
          </button>
        </div>
      </div>
      <div className="contact-wrapper">
        <div className="wrapper">
          <div className="left">
            <img src={contact} alt="user" width="100" />
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
              </div>
            </div>

            <div className="projects">
              <h3>Address</h3>
              <div className="projects_data">
                <div className="data">
                  <h4>Recent</h4>
                  <p>
                    S18-19, second floor, Pankaj Central Market near ipex
                    Bhawan, IP Extension, Delhi 110092
                  </p>
                </div>
              </div>
            </div>

            <div className="social_media">
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/sumitpandey1994"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.instagram.com/sumit6764">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
