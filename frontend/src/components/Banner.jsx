import React from "react";
import "./Banner.css";
import bannerImg from "/images/home/banner.png";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="cat">
          <h1>
            Order Your Favourite <br />
            <span> Sphatlho Online</span>
          </h1>
          <p>
            Relax and get your sphatlho delivered to your door or come to
            collect, your choice.
          </p>
          <button className="cat-button">Order Now</button>
        </div>
        <img src={bannerImg} alt="banner-image" />
      </div>
    </>
  );
};

export default Banner;
