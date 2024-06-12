import React from "react";
import './Services.css'
import timer from "../../assets/images/time-fast.png";
import tickCard from "../../assets/images/shopping-cart-check.png";

const Services = () => {
  return (
    <div className="service-section">
      <h2 className="heading">Our Sevice</h2>
      <div className="service-wrapper">
        <div className="service-text-wrapper">
          <p>
            Rooted in passion, we curate unforgettable dining experiences and
            offer exceptional services, blending culinary artistry with warm
            hospitality.
          </p>
        </div>
        <div className="service-cards-wrapper">
          <div className="service-card">
            <img src={timer} alt="" />
            <p>
              <span className="uppercase">
                <strong>Fast delivery</strong>
              </span>
            </p>
            <p>We deliver your order promptly to your door</p>
          </div>
          <div className="service-card">
            <img src={tickCard} alt="" />
            <p>
              <span className="uppercase">
                <strong>Online Ordering</strong>
              </span>
            </p>
            <p>Give the gift of exceptional dining with Foodi Gift Cards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
