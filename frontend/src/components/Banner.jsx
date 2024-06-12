import React from "react";
import "./Banner.css";
import bannerImg from "../assets/images/banner.png";

const Banner = () => {
  return (
    <>
      <div className="banner-section">
        <div className="banner-cat">
          <h1>
            Order Your Favourite <br />
            <span> Sphatlho Online</span>
          </h1>
          <p>
            Relax and get your sphatlho delivered to your door or come to collect,
            your choice.
          </p>
          <button className="primary-button">Order Now</button>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="banner-image" />
        </div>
      </div>
    </>
  );
};

export default Banner;
