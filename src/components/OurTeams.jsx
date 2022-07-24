import React from "react";

export default function OurTeams() {
    const branches = ["delhi","noida","ghaziabad","gurugram","mumbai","jaipur","faridabad","guwahati","uttarakhand","allahabad","sant ravidas nagar","mirzapur","varansi","patna"]
    return (
        <>

        <div className="teams-bg">
        <div className="teams-bg-color">
        <h1 className="branches-title">Our Branches are: </h1>
      {branches.map((elem) => {
        return (
            <div className="teams">
            <div className="services-wrapper">
          <div className="services">
            <div className="blinking"></div>
            <span>{elem.toUpperCase()}</span>
          </div>
          </div>
          </div>
        );
      })}
      </div>
        </div>
        </>
      
    )
}