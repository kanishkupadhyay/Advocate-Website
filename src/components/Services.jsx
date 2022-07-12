import React from "react";
export default function Services() {
  const serviceList = [
    "civil cases",
    "criminal cases",
    "company law",
    "matrimonial dispute",
    "cyber law",
    "labour law",
    "copyright & trademark",
    "banking law",
    "proper law",
    "arbitration",
    "insurance",
    "workplace harrasment",
    "consumer protecttion law",
    "contract law",
    "intellectual property right",
    "enviromental law",
    "motor vehicle accident cases",
    "tax law",
    "others",
  ];
  return (
    <>
    <div className="service-main">
      {serviceList.map((elem) => {
        return (
            <div className="services-wrapper">
          <div className="services">
            <div className="blinking"></div>
            <span>{elem.toUpperCase()}</span>
          </div>
          </div>
        );
      })}
   </div>
    </>
  );
}
