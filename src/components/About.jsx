import React from "react";
import hero from "../images/hero-image.jpeg";
export default function About() {
  return (
    <>
      <div className="about-us">
        <div className="hero-image">
          <img src={hero} alt="" srcset="" />
        </div>
        <div className="sumit">
          <h2>Sumit Pandey</h2>
        </div>
        <div className="content">
          <span>
            This Law Firm is the place where you get all types of Legal Remedy,
            We Practice in all types of field, We Handle Criminal Matters, Civil
            Matters, Corporate Matters, Company Matters, etc. We will provide
            best Legal Service in the manner of Legal Remedy. Our Firm are
            having well qualified and experience Holder Advocates, All advocates
            handle Criminal as well as Civil Matters. A law firm is a business
            entity formed by one or more to engage in the practice of Law. The
            primary service rendered by a law firm is to advise clients
            (individuals or corporations) about their legal rights and
            responsibilities, and to represent clients in Civil or Criminal
            Cases business transactions, and other matters in which legal advice
            and other assistance are sought.
          </span>
        </div>
      </div>
    </>
  );
}
