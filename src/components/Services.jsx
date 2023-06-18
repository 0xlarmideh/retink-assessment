import React from "react";
import { ServicesData } from "./ServicesData";

const Services = () => {
  return (
    <>
      <div className="service-intro-layout">
        <div className="service-intro-item">
          <p className="purple service-head">Transform your Creation Process</p>
          <p className="service-desc">
            With a new approach to ordering content, you can now stop juggling
            multiple documents and meetings and start publishing content faster
            and on demand
          </p>
        </div>
        <div className="service-intro-item">
          <p className="purple service-head">
            Activate your business growth with RetinkContent.{" "}
          </p>
          <p className="service-desc">
            Save time and maintain your brand identity within your budget range
            or sign up for affordable plans and still access multiple content
            services like:
          </p>
        </div>
      </div>
      <div className="service-grid">
        {ServicesData.map(({ id, title, description, imageUrl }) => {
          return (
            <div className="service-item" key={id}>
              <div className="service-item-image">
                <img
                  className="image-object"
                  width="100%"
                  height="100%"
                  src={imageUrl}
                />
              </div>
              <p className="service-item-title">{title}</p>
              <div className="border-divider"></div>
              <p className="service-item-description">{description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Services;
